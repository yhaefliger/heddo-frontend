import { AppMenuLink } from '@/lib/menu'
import clsx from 'clsx'
import Link from 'next/link'
import { forwardRef, LegacyRef } from 'react'

type Props = {
  item: AppMenuLink
  className?: string
  children?: React.ReactNode
}
const MenuLink = forwardRef(
  (
    { item, className, children, ...rest }: Props,
    ref: LegacyRef<HTMLAnchorElement>
  ) => {
    const content = children || item.label || ''

    className = clsx(className || '', {
      active: item.active || item.childActive,
    })

    if (!item.url || !item.url.path) {
      return null
    }

    //routed link means we can use next/link for internal processing
    if (item.url.routed) {
      return (
        <Link href={item.url.path}>
          <a ref={ref} className={className} {...rest}>
            {content}
          </a>
        </Link>
      )
    }

    // check if link to external site or drupal instance
    if (item.url && '__typename' in item.url) {
      switch (item.url.__typename) {
        case 'ExternalUrl':
          return (
            <a
              href={item.url.path}
              target="_blank"
              className={className}
              rel="noopener noreferrer"
            >
              {content}
            </a>
          )
        case 'DefaultInternalUrl':
          return (
            <a
              href={`${process.env.DRUPAL_BASE_URL}${decodeURI(item.url.path)}`}
              className={className}
            >
              {content}
            </a>
          )
      }
    }

    //default if no previous match return a normal link
    return (
      <a href={item.url.path} className={className}>
        {content}
      </a>
    )
  }
)
MenuLink.displayName = 'MenuLink'

export default MenuLink
