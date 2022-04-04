import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { getPaths } from '@/lib/utils'
import getPageData, { PageContext, PageProps } from '@/lib/page'
import Layout from '@/components/layout'

interface PageParams extends URLSearchParams {
  slug: string[]
}

const Page = ({ entity, type }: PageProps) => {
  console.log(entity, type)
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
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
  const { entity, type, global } = await getPageData(context, path)

  return {
    props: {
      entity,
      type,
      global,
    },
  }
}

export default Page
