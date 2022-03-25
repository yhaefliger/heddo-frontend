import { useAppContext } from "contexts/AppContext"
import { useRouter } from "next/router"


const MenuLinks = ({ links, level = 0 }) => {
  return (
    <>
      {links.map((item, index) => {
          return (
            <li key={index}>
              {!!item.links && !!item.links.length && (
                <ul>
                  <MenuLinks links={item.links} level={level + 1} />
                </ul>
              )}
            </li>
          )
      })}
    </>
  )
}

const Menu = ({ name }) => {
  const { menus } = useAppContext()
  const router = useRouter()
  const menu = menus[name]

  if (!menu || !menu.links || !menu.links?.length) {
    return null
  }

  return (
    <ul>
      <MenuLinks links={menu.links} level={0} />
    </ul>
  )
}

export default Menu
