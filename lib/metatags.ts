export type Metatags = {
  MetaValue?: {
    robots?: string
    generator?: string
    title?: string
    description?: string
    [tagkey: string]: string | object
  }
  [tagtype: string]: {
    [tagkey: string]: string | object
  }
}

const buildMetatags = (metatags): Metatags => {
  return metatags
    .filter(tag =>  ('__typename' in tag && 'key' in tag && 'value' in tag))
    .reduce((acc, meta) => {
      (acc[meta.__typename] ||= [])[meta.key] = meta.value
      return acc
    }, {})
}
export default buildMetatags
