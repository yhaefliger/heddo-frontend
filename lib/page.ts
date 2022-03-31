import { NextPageContext } from "next"
import { NodePageFieldsFragment } from "@/graphql/generated/schema"
import requester from "@/graphql/client"
import { getGlobalData } from "./global"
import { buildSections } from "./paragraphs"

export type NodeTypes = 'page'
export type Node = NodePageFieldsFragment

export interface PageContext extends NextPageContext {
  params: {
    slug?: string[]
  }
}

export const getPageData = async (context: PageContext, type: NodeTypes) => {
  //Node Page
  const path = context.params.slug ? `/${context.params.slug.join('/')}` : process.env.DRUPAL_HOME
  let node: Node = {}

  const data = await requester.NodeByPath({ path })
  if(data.route?.entity){
    if(type == 'page') {
      node = data.route.entity as NodePageFieldsFragment;
      node = { ...node, fieldContent: buildSections(node.fieldContent)}
    }
  }

  const global = await getGlobalData(context)

  return {
    node,
    global
   }
}
