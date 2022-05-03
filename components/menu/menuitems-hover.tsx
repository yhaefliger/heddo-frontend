import { AppMenuLink } from '@/lib/menu'
import Link from 'next/link'
import { useState } from 'react'
import { MenuLinks } from '../menu'

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
      <Link href={item.url.path}>{item.label}</Link>
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
