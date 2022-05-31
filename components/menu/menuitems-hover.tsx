import { AppMenuLink } from '@/lib/menu'
import { useState } from 'react'
import { MenuLinks } from '../menu'
import MenuLink from './link'

type Props = {
  item: AppMenuLink
  level: number
  levels: number
}
const MenuitemsHover = ({ item, level, levels }: Props) => {
  const [isOver, setIsOver] = useState(false)
  return (
    <li
      onMouseEnter={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
    >
      <MenuLink item={item} />
      {isOver && (
        <ul className={`menu-level-${level}`}>
          <MenuLinks
            links={item.links}
            level={level + 1}
            levels={levels}
            type="hover"
          />
        </ul>
      )}
    </li>
  )
}

export default MenuitemsHover
