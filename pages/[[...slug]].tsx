import { GetStaticPaths, GetStaticProps, NextPageContext } from "next";
import { getPaths } from '@/lib/utils'
import getPageData, { PageContext, PageProps } from "@/lib/page";
import Layout from "@/components/layout";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPaths()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<PageProps> = async ({
  params,
  //preview = false,
  //previewData
}) => {

  const path = typeof params.slug === "object" ? `/${params.slug.join('/')}` : process.env.DRUPAL_HOME

  const { entity, global } = await getPageData(path)
  return {
    props: {
      entity,
      global,
    },
  }
}

export default function Page() {
  return (
    <Layout>
      <div>
        <h1>Hello world</h1>
      </div>
    </Layout>
  );
}
