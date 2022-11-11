import { AppMenu, AppMenuLink } from '@/lib/menu'
import MenuItemsExpanded from './menu/menuitems-expanded'
import MenuitemsHover from './menu/menuitems-hover'
import MenuItemsMobile from './menu/menuitems-mobile'

const ItemsComponents = {
  Hover: MenuitemsHover,
  Expanded: MenuItemsExpanded,
  Mobile: MenuItemsMobile,
}

type MenuLinksProps = {
  links: AppMenu['links']
  level: number
  levels: number
  type: MenuProps['type']
  handleClick?: () => void
}
export const MenuLinks = ({
  links,
  level = 0,
  levels,
  type,
  handleClick,
}: MenuLinksProps) => {

    return (
    <>
      {links.map((item: AppMenuLink, index) => {
        level = level++
        let Component = ItemsComponents.Expanded

        if (type == 'mobile') {
          Component = ItemsComponents.Mobile
        } else if (type == 'hover' && !!item.links && !!item.links.length) {
          Component = ItemsComponents.Hover
        }

        return (
          <Component
            handleClick={handleClick}
            item={item}
            level={level}
            levels={levels}
            key={index}
          />
        )
      })}
    </>
  )
}

type MenuProps = {
  menu: AppMenu
  className?: string
  type?: 'hover' | 'expanded' | 'desktop' | 'mobile'
  levels?: number
  handleClick?: () => void
}
const Menu = ({
  menu,
  type = 'expanded',
  levels = 2,
  className,
  handleClick,
}: MenuProps) => {
  if (!menu || !menu.links || !menu.links?.length) {
    return null
  }
  return (
    <ul className={className}>
      <MenuLinks
        handleClick={handleClick}
        links={menu.links}
        level={1}
        levels={levels}
        type={type}
      />
    </ul>
  )
}

export default Menu
