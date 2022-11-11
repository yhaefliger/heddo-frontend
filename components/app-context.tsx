import { GlobalData } from '@/lib/global'
import { createContext, useContext } from 'react'

// default take all global data
const appProviderDefaultValues: GlobalData = {
  menus: null,
  settings: null,
  homepage: false
}

const AppContext = createContext<GlobalData>(appProviderDefaultValues)

export const useAppContext = () => {
  return useContext(AppContext)
}

type appProviderProps = {
  children: React.ReactNode
  value: GlobalData
}

const AppProvider = ({ children, value }: appProviderProps) => {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider
