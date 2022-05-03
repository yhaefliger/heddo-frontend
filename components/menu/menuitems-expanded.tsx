import { AppMenuLink } from '@/lib/menu'
import Link from 'next/link'
import { MenuLinks } from '../menu'

type Props = {
  item: AppMenuLink
  level: number
  levels: number
}
const MenuItemsExpanded = ({ item, level, levels }: Props) => {
  return (
    <li>
      <Link href={item.url.path}>{item.label}</Link>
      {!!item.links && !!item.links.length && level < levels && (
        <ul className={`menu-level-${level}`}>
          <MenuLinks
            links={item.links}
            level={level + 1}
            levels={levels}
            type="expanded"
          />
        </ul>
      )}
    </li>
  )
}

export default MenuItemsExpanded
