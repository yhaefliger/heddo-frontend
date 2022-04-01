import requester from "@/lib/api"
import { ConfigPageSettingsFieldsFragment } from "@/graphql/generated/schema"
import { PageContext } from "./page"
import { AppMenu, getMenu } from "./menu"
import { getPathFromContext } from "./utils"

export type GlobalData = {
  menus: {
    main: AppMenu | null
  } | null,
  settings: ConfigPageSettingsFieldsFragment | null
}

const getGlobalData = async (context: PageContext): Promise<GlobalData> => {
  const path = getPathFromContext(context)
  const [mainMenu, settings] = await Promise.all([
    getMenu("main", path),
    requester.ConfigPage({ type: "settings" })
  ])

  return {
    menus: {
      main: mainMenu
    },
    settings: settings.configPagesQuery?.entities?.length > 0 ? settings.configPagesQuery.entities[0] as ConfigPageSettingsFieldsFragment : null
  }
}

export default getGlobalData
