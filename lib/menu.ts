import { Menu } from "@/graphql/generated/schema"
import requester from "./api"

export type AppMenu = Menu & {
  active?: boolean
  hasChildren: boolean
}

export const getMenu = async (name: string): Promise<AppMenu> => {
  const data = await requester.Menu({ name })
  const menu = data.menuByName as AppMenu

  //TODO: set active and haschildren properties

  return menu
}
