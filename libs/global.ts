import { getMenu, getSettings } from "./api"

export async function getGlobalData(context) {
  const [menu, settings] = await Promise.all([getMenu("main"), getSettings()])

  return {
    menu,
    settings
  }
}
