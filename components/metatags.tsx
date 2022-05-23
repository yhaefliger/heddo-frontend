import buildMetatags from '@/lib/metatags'
import { Entity } from '@/lib/page'
import Head from 'next/head'

type Props = {
  metatags?: Entity['entityMetatags']
  children?: React.ReactNode
}
const Metatags = ({ metatags, children }: Props) => {
  if (!metatags) {
    return null
  }

  const groupedTags = buildMetatags(metatags)
  if (!groupedTags.MetaValue) {
    return null
  }

  const { title, ...tags } = groupedTags.MetaValue
  return (
    <Head>
      {title && title != '' && <title>{title}</title>}
      {Object.entries(tags).map(([key, value]) => {
        if (typeof value === 'string') {
          return <meta key={key} name={key} content={value} />
        }
      })}
      {children}
    </Head>
  )
}

export default Metatags
