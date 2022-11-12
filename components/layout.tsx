import { ReactNode, useState } from 'react'
import { useAppContext } from './app-context'
import Menu from './menu'


type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  const { menus } = useAppContext()


  return (
    <>
      <header>
          <nav>
            <Menu menu={menus.main} className="main-menu" type="hover" levels={2} />
          </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2022 Heddo CMS.</p>
      </footer>
    </>
  )
}

export default Layout
