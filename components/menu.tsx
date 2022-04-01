import { AppMenu } from "@/lib/menu"

type MenuLinkProps = {
  links: AppMenu["links"]
  level: number
}

const MenuLinks = ({ links, level = 0 }: MenuLinkProps) => {
  return (
    <>
      {links.map((item, index) => {
          return (
            <li key={index}>
              {item.label}
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

type MenuProps = {
  menu: AppMenu
}

const Menu = ({ menu }: MenuProps) => {
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
