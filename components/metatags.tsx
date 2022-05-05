import { Metatags } from '@/lib/metatags'
import Head from 'next/head'

type Props = {
  metatags: Metatags
  children?: React.ReactNode
}
const Metatags = ({ metatags, children }: Props) => {
  const { title, ...tags } = metatags.MetaValue || {}
  return (
    <Head>
      {title && <title>{title}</title>}
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
