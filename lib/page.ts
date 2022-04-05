import { NextPageContext } from 'next'
import {  NodePageFieldsFragment } from '@/graphql/generated/schema'
import requester from '@/lib/api'
import getGlobalData, { GlobalData } from './global'
import buildSections, { ParagraphContent } from './paragraphs'

export type NodePage = NodePageFieldsFragment & { content?: ParagraphContent[] }
// union of possibles node types ex: NodePage | NodeBlog | NodeProduct
export type Entity = NodePage | object

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
  if (data.route?.__typename == 'EntityCanonicalUrl') {
    switch (data.route.entity.__typename) {
      //Node Page
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

  const global = await getGlobalData(context)
  return {
    entity: entity || {},
    global,
  }
}

export default getPageData
