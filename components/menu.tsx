import { AppMenu, AppMenuLink } from '@/lib/menu'
import MenuItemsExpanded from './menu/menuitems-expanded'
import MenuitemsHover from './menu/menuitems-hover'

const ItemsComponents = {
  Hover: MenuitemsHover,
  Expanded: MenuItemsExpanded,
}

type MenuLinksProps = {
  links: AppMenu['links']
  level: number
  levels: number
  type: MenuProps['type']
}
export const MenuLinks = ({
  links,
  level = 0,
  levels,
  type,
}: MenuLinksProps) => {
  return (
    <>
      {links.map((item: AppMenuLink, index) => {
        level = level++
        let Component = ItemsComponents.Expanded
        if (type == 'hover' && !!item.links && !!item.links.length) {
          Component = ItemsComponents.Hover
        }
        return (
          <Component item={item} level={level} levels={levels} key={index} />
        )
      })}
    </>
  )
}

type MenuProps = {
  menu: AppMenu
  type?: 'hover' | 'expanded'
  levels?: number
}
const Menu = ({ menu, type = 'expanded', levels = 2 }: MenuProps) => {
  if (!menu || !menu.links || !menu.links?.length) {
    return null
  }

  return (
    <ul className="flex space-x-4">
      <MenuLinks links={menu.links} level={1} levels={levels} type={type} />
    </ul>
  )
}

export default Menu
