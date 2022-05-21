import { unserialize } from 'php-serialize'
import { camelcase } from './utils'

export type ParagraphContent = {
  __typename: null | string
  uuid: boolean | string
  id: number
  parent_id: null | string
  type: string
  layout: null | string
  layout_config: null | object
  region: string
  fields: {
    [field_name: string]: string | object
  }
  regions: {
    [region: string]: ParagraphContent[]
  }
}

const groupParagraphs = (items) => {
  return items.reduce((item, acc) => {
    (item[acc['region']] = item[acc['region']] || []).push(acc)
    return item
  }, {})
}

const nestParagraphs = (items, uuid = null) => {
  return items
    .filter((item) => item['parent_id'] === uuid)
    .map((item) =>
      item.type == 'section'
        ? { ...item, regions: groupParagraphs(nestParagraphs(items, item.uuid)) }
        : item
    )
}

// Restructure layout paragraph field with nesting and region grouping
const buildSections = (field): ParagraphContent[] => {
  const sections = field.filter((section) => section.entity)
  .map((section) => {
    let parent_id = null
    let layout = null
    let layout_config = null
    let region = 'default'
    let type = 'paragraph'
    //process settings
    const {
      uuid = false,
      id = 0,
      __typename = null,
      behaviorSettings = null,
      ...fields
    } = section.entity

    if (behaviorSettings) {
      const settings = unserialize(behaviorSettings)
      // uuid is required for nesting from parent_id
      if (settings.layout_paragraphs && uuid) {
        // determine region and parent
        layout_config = settings.layout_paragraphs.config
          ? settings.layout_paragraphs.config
          : null
        parent_id = settings.layout_paragraphs.parent_uuid
          ? settings.layout_paragraphs.parent_uuid
          : null
        region = settings.layout_paragraphs.region
          ? settings.layout_paragraphs.region
          : 'default'

        // if it has layout param it is a section
        if (settings.layout_paragraphs.layout) {
          type = 'section'
          layout = camelcase(settings.layout_paragraphs.layout)
        }
      }
    }
    return { __typename, id, uuid, parent_id, type, layout, layout_config, region, fields }
  })

  return nestParagraphs(sections)
}

export default buildSections
