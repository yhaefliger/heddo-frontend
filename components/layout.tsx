import { ReactNode, useState } from 'react'
import { useAppContext } from './app-context'


type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  /*const { settings, menus, homepage } = useAppContext()

  const [isHomepage, setIsHomepage] = useState(homepage)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)*/

  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default Layout
