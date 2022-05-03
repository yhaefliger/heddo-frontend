import { NextPageContext } from 'next'
import {  EntityByPathQuery, NodePageFieldsFragment } from '@/graphql/generated/schema'
import requester from '@/lib/api'
import getGlobalData, { GlobalData } from './global'
import buildSections, { ParagraphContent } from './paragraphs'
import buildMetatags, { Metatags } from './metatags'

// Union of possible entities returned by query
export type QueryEntity = NonNullable<Exclude<EntityByPathQuery["route"], { __typename?: 'DefaultInternalUrl' } | { __typename?: 'ExternalUrl' }>>["entity"]
// Custom modified entities
export type NodePage = QueryEntity & NodePageFieldsFragment & { content?: ParagraphContent[] }
// Final union of transformed entities and default query returned entities
export type Entity = (NodePage | QueryEntity) & { metatags?: Metatags }

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
    entity = data.route.entity as QueryEntity

    //transform entity metatags
    if(entity.entityMetatags){
      const { entityMetatags, ...entitydata } = entity
      entity = {
        ...entitydata,
        metatags: buildMetatags(entityMetatags),
      }
    }

    //nodes specific fields transformation
    switch (data.route.entity.__typename) {
      // Customised node page entity
      case 'NodePage':
        const { fieldContent, ...nodeFields } = entity as NodePage
        entity = {
          ...nodeFields,
          content: buildSections(fieldContent),
        } as NodePage
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
