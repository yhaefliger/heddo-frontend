import { ReactNode } from "react"
import Logo from "./Logo"
import Menu from "./Menu"

//TODO: define page and global props
type Props = {
  children?: ReactNode
  page: any,
}

const Layout = ({ children, page }: Props) => {
  console.log(page)
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <div className="container mx-auto flex items-center justify-between">
          <Logo className="h-24" />
          <Menu name="main" />
        </div>
      </header>
      <main className="flex flex-col flex-1">
        {children}
      </main>
      <footer>
        <div className="text-center text-sm p-4">&copy; 2022 Heddo</div>
      </footer>
    </div>
  )
}

export default Layout
