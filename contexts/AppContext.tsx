import { createContext, useContext } from "react"

type appProviderType = {
  menus: any
  settings: any
}

const appProviderDefaultValues: appProviderType = {
  menus: null,
  settings: null,
}

const AppContext = createContext<appProviderType>(appProviderDefaultValues)

export const useAppContext = () => {
  return useContext(AppContext)
}

type appProviderProps = {
  children: React.ReactNode,
  value: appProviderType
}

const AppProvider = ({ children, value }: appProviderProps) => {
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
