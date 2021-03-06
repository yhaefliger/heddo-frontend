import requester from '@/lib/api'
import { ConfigPageSettingsFieldsFragment } from '@/graphql/generated/schema'
import { AppMenu, getMenu } from './menu'

export type GlobalData = {
  menus: {
    main: AppMenu | null
  } | null
  settings: ConfigPageSettingsFieldsFragment | null
}

const getGlobalData = async (path: string): Promise<GlobalData> => {
  const [mainMenu, settings] = await Promise.all([
    getMenu('main', path),
    requester.ConfigPage({ type: 'settings' }),
  ])

  return {
    menus: {
      main: mainMenu,
    },
    settings:
      settings.configPagesQuery?.entities?.length > 0
        ? (settings.configPagesQuery
            .entities[0] as ConfigPageSettingsFieldsFragment)
        : null,
  }
}

export default getGlobalData
