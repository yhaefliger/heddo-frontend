import { gql } from "@apollo/client"
import client from "./apollo-client"

const NODE_PAGE_FRAGMENT = gql`
  fragment PageFields on NodePage {
    fieldContent {
      entity{
        behaviorSettings
        __typename
        id:entityUuid
        ...on ParagraphTitleText {
          fieldTest
        }
      }
    }
    fieldHeader {
      entity{
        ...on MediaImage{
          fieldMediaImage{
            derivative(style: THUMBNAIL){
              url,
              width,
              height
            }
          }
        }
      }
    }
  }
`

export const getPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query getPaths {
        nodeQuery {
          entities {
            entityLabel
            entityType
            entityBundle
            entityUrl {
              path
              routed
            }
          }
        }
      }
    `
  })
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
    }) : [];
  return paths
}

export const getMenu = async (name: string) => {
  const { data } = await client.query({
    query: gql`
      query getMenuByName($name: String!)	{
        menuByName(name: $name){
          links{
            label
            description
            url {
              path
              routed
            }
            links {
              label
              description
              url{
                path
                routed
              }
            }
          }
        }
      }
    `,
    variables: { name }
  })

  return data.menuByName
}

export const getPage = async (slug: string) => {
  const { data } = await client.query({
    query: gql`
    ${NODE_PAGE_FRAGMENT}

    query getPageBySlug($slug: String!) {
      route(path: $slug) {
        ...on EntityCanonicalUrl {
          entity{
            ...PageFields
          }
        }
      }
    }
    `,
    variables: { slug }
  })

  return data.route.entity
}

export const getSettings = async () => {
  const { data } = await client.query({
    query: gql`
      query {
        configPagesQuery(filter:{conditions:{operator: EQUAL, field: "type", value:"settings"}}){
          entities {
            ...on ConfigPagesSettings {
              header:fieldDefaultHeader {
                entity{
                  ...on MediaImage{
                    image:fieldMediaImage {
                      url,
                      height,
                      width,
                      alt
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  })

  return data.configPagesQuery?.entities?.length > 0 ? data.configPagesQuery.entities[0] : {};
}
