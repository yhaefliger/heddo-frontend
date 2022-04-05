import { unserialize } from 'php-serialize'

export type ParagraphContent = {
  __typename: null | string
  id: boolean | string
  parent_id: null | string
  type: string
  layout: null | string
  region: string
  fields: {
    [field_name: string]: string | object
  }
  children: {
    [region: string]: ParagraphContent[]
  }
}

const groupParagraphs = (items) => {
  return items.reduce((item, acc) => {
    ;(item[acc['region']] = item[acc['region']] || []).push(acc)
    return item
  }, {})
}

const nestParagraphs = (items, id = null) => {
  return items
    .filter((item) => item['parent_id'] === id)
    .map((item) =>
      item.type == 'section'
        ? { ...item, children: groupParagraphs(nestParagraphs(items, item.id)) }
        : item
    )
}

// Restructure layout paragraph field with nesting and region grouping
const buildSections = (field): ParagraphContent[] => {
  const sections = field
    .filter((section) => section.entity)
    .map((section) => {
      let parent_id, layout = null
      let region = 'default'
      let type = 'paragraph'

      //process settings
      const {
        id = false,
        __typename = null,
        behaviorSettings = null,
        ...fields
      } = section.entity

      if (behaviorSettings) {
        const settings = unserialize(behaviorSettings)
        // id is required for nesting
        if (settings.layout_paragraphs && id) {
          // determine region and parent
          parent_id = settings.layout_paragraphs.parent_uuid
            ? settings.layout_paragraphs.parent_uuid
            : null
          region = settings.layout_paragraphs.region
            ? settings.layout_paragraphs.region
            : 'default'

          // if it has layout param it is a section
          if (settings.layout_paragraphs.layout) {
            type = 'section'
            layout = settings.layout_paragraphs.layout
          }
        }
      }
      return { __typename, id, parent_id, type, layout, region, fields }
    })

  return nestParagraphs(sections)
}

export default buildSections
