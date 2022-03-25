import { getMenu, getSettings } from "./api"

export async function getGlobalData(context) {
  const [mainMenu, settings] = await Promise.all([getMenu("main"), getSettings()])

  return {
    menus: {
      main: mainMenu
    },
    settings
  }
}
