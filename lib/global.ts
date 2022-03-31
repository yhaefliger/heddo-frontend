import requester from "@/graphql/client"
import { ConfigPageSettingsFieldsFragment, Menu } from "@/graphql/generated/schema"
import { PageContext } from "./page"

export type GlobalData = {
  menus: {
    main: Menu | null
  },
  settings: ConfigPageSettingsFieldsFragment | null
}

const getGlobalData = async (context: PageContext): Promise<GlobalData> => {
  const [mainMenu, settings] = await Promise.all([
    requester.Menu({ name: "main" }),
    requester.ConfigPage({ type: "settings" })
  ])

  return {
    menus: {
      main: mainMenu.menuByName || null
    },
    settings: settings.configPagesQuery?.entities?.length > 0 ? settings.configPagesQuery.entities[0] as ConfigPageSettingsFieldsFragment : null
  }
}

export default getGlobalData
