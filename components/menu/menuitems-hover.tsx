import { AppMenuLink } from '@/lib/menu'
import { useEffect, useRef, useState } from 'react'
import { MenuLinks } from '../menu'
import clsx from 'clsx'
import MenuLink from './link'

type Props = {
  item: AppMenuLink
  level: number
  levels: number
  handleClick?: () => void
}
const MenuitemsHover = ({ item, level, levels }: Props) => {
  const linkWrapper = useRef(null)
  const [isOver, setIsOver] = useState(false)
  useEffect(() => {
    const wrapper = linkWrapper.current
    let closeTimeout = null

    wrapper.addEventListener('mouseenter', () => {
      clearTimeout(closeTimeout)
      setIsOver(true)
    })
    wrapper.addEventListener('mouseleave', () => {
      closeTimeout = setTimeout(() => {
        setIsOver(false)
      }, 500)
    })
  }, [linkWrapper])
  return (
    <li ref={linkWrapper}>
      <MenuLink item={item} className="flex items-center space-x-2">
        <span>{item.label}</span>

      </MenuLink>
      {isOver && (
        <ul
          className={clsx(
            `menu-level-${level}`,
            'absolute z-30 submenu w-[260px] bg-white'
          )}
        >
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
