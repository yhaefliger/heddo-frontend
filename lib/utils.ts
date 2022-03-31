import requester from "@/graphql/client"

export const getPaths = async () => {
  const data = await requester.Paths()
  // return paths with slug params in nextjs form
  const paths = data.nodeQuery?.entities ? data.nodeQuery.entities
    .filter(entity => {
      return entity.entityUrl.routed
    })
    .map(entity => {
      let path: string = entity.entityUrl?.path || '/'
      if (path == process.env.DRUPAL_HOME) {
        return {
          params: { slug: false }
        }
      } else {
        path = path.startsWith('/') ? path.substring(1) : path
        return {
          params: { slug: path.split("/") }
        }
      }
    }) : []
  return paths
}
