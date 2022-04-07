import requester from '@/lib/api'

export const getPaths = async () => {
  const data = await requester.Paths()
  // return paths with slug params in nextjs form
  return data.nodeQuery?.entities
    ? data.nodeQuery.entities
        .filter((entity) => {
          return entity.entityUrl.routed
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
