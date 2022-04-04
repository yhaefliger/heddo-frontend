import { AppMenu, AppMenuLink } from '@/lib/menu'
import Link from 'next/link'

type MenuLinkProps = {
  links: AppMenu['links']
  level: number
}

const MenuLinks = ({ links, level = 0 }: MenuLinkProps) => {
  return (
    <>
      {links.map((item: AppMenuLink, index) => {
        return (
          <li key={index}>
            <Link href={item.url.path}>{item.label}</Link>
            {!!item.links && !!item.links.length && (
              <ul className={`menu-level-${level + 1}`}>
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
