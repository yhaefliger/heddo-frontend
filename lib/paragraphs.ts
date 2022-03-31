import { unserialize } from "php-serialize"

function group(items) {
  return items.reduce((item, acc) => {
    (item[acc['region']] = item[acc['region']] || []).push(acc);
    return item;
  }, {});
}

function nest(items, id = null) {
  return items
  .filter(item => item['parent_id'] === id)
  .map(item => {
    if(item.type == 'section') {
      return  { ...item, children: group(nest(items, item.id)) }
    } else {
      return item
    }
  })
}

export function buildSections(field) {
  let sections = field
  .filter(section => section.entity)
  .map(section => {
    let parent_id, layout = null
    let region = 'default'
    let type = 'paragraph'

    //process settings
    const { behaviorSettings, ...sectionData } = section.entity
    if (behaviorSettings) {
      const settings = unserialize(behaviorSettings)
      if (settings.layout_paragraphs){
        parent_id = settings.layout_paragraphs.parent_uuid ? settings.layout_paragraphs.parent_uuid : null
        region = settings.layout_paragraphs.region ? settings.layout_paragraphs.region : 'default'
        //if it has section param it is a section
        if(settings.layout_paragraphs.layout) {
          type = 'section'
          layout = settings.layout_paragraphs.layout
        }
      }
    }
    return { ...sectionData,  parent_id, type, layout, region }
  })

  return nest(sections)
}
