import { ConfigPageSettingsFieldsFragment } from '@/graphql/generated/schema'
import requester from '@/lib/api'
import { AppMenu, getMenu } from './menu'

export type GlobalData = {
  menus: {
    main: AppMenu | null
  } | null
  settings: null | ConfigPageSettingsFieldsFragment
  homepage: boolean
}

const getGlobalData = async (path: string): Promise<GlobalData> => {
  const [mainMenu, querySettings] = await Promise.all([
    getMenu('main', path),
    requester.ConfigPage({ type: 'settings' }),
  ])
  const homepage = path === process.env.DRUPAL_HOME ? true : false
  let settings = null
  if (querySettings?.configPagesQuery?.entities && querySettings.configPagesQuery.entities.length > 0 && querySettings.configPagesQuery.entities[0]?.__typename == "ConfigPagesSettings") {
    settings = querySettings.configPagesQuery.entities[0]
  }
  return {
    menus: {
      main: mainMenu,
    },
    settings,
    homepage,
  }
}

export default getGlobalData
