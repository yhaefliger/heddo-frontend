import { NextPageContext } from "next"
import { getPage } from "./api"
import { buildSections } from "./paragraphs"

export interface PageContext extends NextPageContext {
  params: {
    slug?: string[]
  }
}

export const getPageData = async (context: PageContext) => {
  //determine drupal path
  const path = context.params.slug ? `/${context.params.slug.join('/')}` : process.env.DRUPAL_HOME

  //retrieve api data
  const node = await getPage(path)
  //build content sections (paragraphs)
  const sections = buildSections(node.fieldContent)

  return { ...node, fieldContent: sections }
}
