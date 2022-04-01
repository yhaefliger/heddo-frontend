import { Node } from "@/lib/page"
import { ReactNode } from "react"
import { useAppContext } from "./app-context"
import Logo from "./logo"
import Menu from "./menu"

type Props = {
  children?: ReactNode
  node: Node,
}

const Layout = ({ children, node }: Props) => {
  const { settings, menus } = useAppContext()
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <div className="container mx-auto flex items-center justify-between">
          <Logo className="h-24" />
          {menus.main && <Menu menu={menus.main} />}
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
