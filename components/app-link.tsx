import { Maybe, Scalars, Url } from '@/graphql/generated/schema'
import clsx from 'clsx'
import Link from 'next/link'
import { forwardRef } from 'react'

type Props = {
  item: {
    __typename?: string
    attribute?: Maybe<Scalars['String']>
    options?: Maybe<Scalars['Map']>
    title?: Maybe<Scalars['String']>
    uri?: Maybe<Scalars['String']>
    url?: Maybe<Url> & { __typename?: string }
  }
  className?: string
  children?: React.ReactNode
  onClick?: () => void
}
const AppLink = forwardRef(
  (
    { item, className, children, onClick, ...rest }: Props
  ) => {
    const content = children || item.title || ''

    className = clsx(className || '')

    if (!item.url || !item.url.path) {
      return null
    }

    //routed link means we can use next/link for internal processing
    if (item.url.routed) {
      return (
        (<Link
          href={item.url.path}
          className={className}
          onClick={onClick}
          {...rest}>

          {content}

        </Link>)
      );
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
              onClick={onClick}
            >
              {content}
            </a>
          )
        case 'DefaultInternalUrl':
          return (
            <a
              href={`${process.env.DRUPAL_BASE_URL}${decodeURI(item.url.path)}`}
              className={className}
              onClick={onClick}
            >
              {content}
            </a>
          )
      }
    }

    //default if no previous match return a normal link
    return (
      <a href={item.url.path} className={className} onClick={onClick}>
        {content}
      </a>
    )
  }
)
AppLink.displayName = 'AppLink'

export default AppLink
