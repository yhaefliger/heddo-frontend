import { NextPageContext } from "next"
import { NodePageFieldsFragment } from "@/graphql/generated/schema"
import requester from "@/lib/api"
import getGlobalData, { GlobalData } from "./global"
import buildSections, { ParagraphContent } from "./paragraphs"
import { getPathFromContext } from "./utils"

export type NodeTypes = 'page'
export type NodePage = NodePageFieldsFragment & { content?: ParagraphContent[] }
// union of possibles node types ex: NodePage | NodeBlog | NodeProduct
export type Node =  NodePage

export interface PageContext extends NextPageContext {
  params: {
    slug?: string[]
  }
}

export type PageProps = {
  node: Node,
  global: GlobalData
}

const getPageData = async (context: PageContext, type: NodeTypes): Promise<PageProps> => {
  let node: Node;

  const path = getPathFromContext(context)
  const data = await requester.NodeByPath({ path })

  if(data.route?.entity){
    switch (type) {
      //Node Page
      case 'page':
        const { fieldContent, ...nodeFields } = data.route.entity;
        node = { ...nodeFields, content: buildSections(fieldContent)} as NodePage
        break;

      default:
        node = data.route.entity
        break;
    }
  }

  const global = await getGlobalData(context)

  return {
    node: node || {},
    global
   }
}

export default getPageData
