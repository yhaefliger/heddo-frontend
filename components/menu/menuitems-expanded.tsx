import { AppMenuLink } from '@/lib/menu'
import { MenuLinks } from '../menu'
import MenuLink from './link'

type Props = {
  item: AppMenuLink
  level: number
  levels: number
  handleClick?: () => void
}
const MenuItemsExpanded = ({ item, level, levels, handleClick }: Props) => {
  return (
    <li>
      <MenuLink item={item} onClick={handleClick} />
      {!!item.links && !!item.links.length && level < levels && (
        <ul className={`menu-level-${level}`}>
          <MenuLinks
            links={item.links}
            level={level + 1}
            levels={levels}
            type="expanded"
            handleClick={handleClick}
          />
        </ul>
      )}
    </li>
  )
}

export default MenuItemsExpanded
