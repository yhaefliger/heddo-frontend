import requester from '@/lib/api'

export const camelcase = (string: string) => {
  return `${string}`
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w*)/, 'g'),
      ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
    )
    .replace(new RegExp(/\w/), s => s.toUpperCase());
}

export const decamelize = (string: string) => {
  return string.replace(/[A-Z]/g, m => "-" + m.toLowerCase())
}

export const formatPhoneLink = (number: string) => {
  if (number.charAt(0) === "0") {
    return `+41${number.substring(1)}`
  } else {
    return number
  }
}

export const formatPhoneDisplay = (number: string) => {
  if (number.charAt(0) === "0") {
    return number.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4')
  } else {
    return number
  }
}

export const getPaths = async () => {
  const data = await requester.Paths()

  // return paths with slug params in nextjs form
  return data.nodeQuery?.entities
    ? data.nodeQuery.entities
      .filter((entity) => {
        return entity && entity.entityUrl?.routed
      })
      .map((entity) => {
        let path: string = entity.entityUrl?.path || '/'
        if (path == process.env.DRUPAL_HOME) {
          return {
            params: { slug: [] },
          }
        } else {
          path = path.startsWith('/') ? path.substring(1) : path
          return {
            params: { slug: path.split('/') },
          }
        }
      })
    : []
}
