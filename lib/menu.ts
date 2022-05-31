import {  Maybe, MenuLink, MenuQuery, Url } from '@/graphql/generated/schema'
import requester from './api'

export type AppMenuLink = MenuLink & {
  active?: boolean
  childActive?: boolean
  links?: AppMenuLink[]
  url?: Maybe<Url> & { __typename?: string }
}

export type AppMenu = Omit<MenuQuery["menuByName"], "links"> & {
  links?: AppMenuLink[]
}

export const setActiveLink = (links, path): AppMenuLink[] => {
  return links.map((link) => {
    let childs,
      childActive = false

    const linkPath = link.url.path == '/' ? process.env.DRUPAL_HOME : link.url.path
    const active = linkPath === path
    if (link.links) {
      childs = setActiveLink(link.links, path)
      childActive = childs.some((c) => c.active)
    }
    const returnLink = { ...link, active, childActive }
    return childs ? { ...returnLink, links: childs } : returnLink
  })
}

export const getMenu = async (
  name: string,
  path: string | null = null
): Promise<AppMenu> => {
  const data = await requester.Menu({ name })
  let menu = data.menuByName
  if (path && menu.links) {
    menu = { ...menu, links: setActiveLink(menu.links, path) }
  }
  return menu
}
