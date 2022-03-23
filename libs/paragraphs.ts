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
  let sections = field.map(section => {
    let settings = {}
    let parent_id, layout = null
    let region = 'default'
    let type = 'paragraph'

    //process settings
    if (section.entity?.behaviorSettings) {
      settings = unserialize(section.entity.behaviorSettings)
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

    return { ...section.entity, behaviorSettings: null, parent_id, type, layout, region }
  })

  return nest(sections)
}
