import hexRgb from 'hex-rgb'
import { ReactNode } from 'react'
import { useAppContext } from './app-context'
import Logo from './logo'
import Menu from './menu'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  const { settings, menus } = useAppContext()
  const PrimaryColor = hexRgb(settings.fieldPrimaryColor?.color || '#1986ff')
  return (
    <div className="flex flex-col min-h-screen ">
      <header>
        <div className="container mx-auto flex items-center justify-between">
          <Logo className="h-24" />
          {menus.main && <Menu menu={menus.main} />}
        </div>
      </header>
      <main className="flex flex-col flex-1">{children}</main>
      <footer>
        <div className="text-center text-sm p-4">&copy; 2022 Heddo</div>
      </footer>

      <style global jsx>{`
        /* prettier-ignore */
        :root {
          --color-primary: ${PrimaryColor.red}, ${PrimaryColor.green}, ${PrimaryColor.blue};
        }
      `}</style>
    </div>
  )
}

export default Layout
