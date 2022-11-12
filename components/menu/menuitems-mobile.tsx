import { AppMenuLink } from '@/lib/menu'
import clsx from 'clsx'
import { MenuLinks } from '../menu'
import MenuLink from './link'

type Props = {
  item: AppMenuLink
  level: number
  levels: number
  handleClick?: () => void
}
const MenuItemsMobile = ({ item, level, levels, handleClick }: Props) => {
  const className = clsx('block px-4 text-center', {
    'root-menu': level == 1,
    'with-submenu': item.links.length,
    'submenu': level > 1,
    'is-active': item.active || item.childActive,
  })

  return (
    <li>
      <MenuLink item={item} className={className} onClick={handleClick}>
        {item.label}
      </MenuLink>
      {!!item.links && !!item.links.length && level < levels && (
        <ul className={`menu-level-${level} py-4`}>
          <MenuLinks
            links={item.links}
            level={level + 1}
            levels={levels}
            type="mobile"
            handleClick={handleClick}
          />
        </ul>
      )}
    </li>
  )
}

export default MenuItemsMobile
