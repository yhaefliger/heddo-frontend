import { NextPageContext } from 'next'
import {  EntityByPathQuery, NodePageFieldsFragment } from '@/graphql/generated/schema'
import requester from '@/lib/api'
import getGlobalData, { GlobalData } from './global'
import buildSections, { ParagraphContent } from './paragraphs'

// Custom modified entities
export type NodePage = NodePageFieldsFragment & { content?: ParagraphContent[] }
// Union of possible entities returned by query
export type QueryEntity = NonNullable<Exclude<EntityByPathQuery["route"], { __typename?: 'DefaultInternalUrl' } | { __typename?: 'ExternalUrl' }>>["entity"]
// Final union of transformed entities and default query returned entities
export type Entity = NodePage | QueryEntity

export interface PageContext extends NextPageContext {
  params: {
    slug?: string[]
  }
}

export type PageProps = {
  entity: Entity
  global: GlobalData
}

const getPageData = async (
  context: PageContext,
  path: string
): Promise<PageProps> => {

  let entity: Entity

  //const path = getPathFromContext(context)
  const data = await requester.EntityByPath({ path })
  if (data.route?.__typename == 'EntityCanonicalUrl' && data.route.entity) {
    switch (data.route.entity.__typename) {
      // Customised node page entity
      case 'NodePage':
        const { fieldContent, ...nodeFields } = data.route.entity
        entity = {
          ...nodeFields,
          content: buildSections(fieldContent),
        } as NodePage
        break

      default:
        entity = data.route.entity
        break
    }
  }

  const global = await getGlobalData(path)
  return {
    entity: entity || {},
    global,
  }
}

export default getPageData
