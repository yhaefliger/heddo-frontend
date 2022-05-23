import { GetStaticPaths, GetStaticProps } from 'next'
import { getPaths } from '@/lib/utils'
import getPageData, {
  Entity as EntityType,
  PageContext,
  PageProps,
} from '@/lib/page'
import Entity from '@/components/entity'
import PageLayout from '@/components/page-layout'
import buildMetatags from '@/lib/metatags'
import Head from 'next/head'

interface PageParams extends URLSearchParams {
  slug: string[]
}
type Props = {
  entity: EntityType
  children?: React.ReactNode
}
const Page = ({ entity }: Props) => {
  return (
    <PageLayout>
      <Entity entity={entity} />
    </PageLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPaths()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PageProps> = async (
  context: PageContext
) => {
  const { slug } = context.params as PageParams
  const path = slug ? `/${slug.join('/')}` : process.env.DRUPAL_HOME
  const { entity, global } = await getPageData(context, path)

  return {
    props: {
      entity,
      global,
    },
  }
}

export default Page
