import requester from "@/graphql/client"

const getGlobalData = async (context) => {
  const [mainMenu, settings] = await Promise.all([
    requester.Menu({ name: "main" }),
    requester.ConfigPage({ type: "settings" })
  ])

  return {
    menus: {
      main: mainMenu.menuByName || {}
    },
    settings: settings.configPagesQuery?.entities?.length > 0 ? settings.configPagesQuery.entities[0] : {}
  }
}

export default getGlobalData
