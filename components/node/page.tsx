import { NodePage } from '@/lib/page'

export type Props = {
  entity: NodePage
  children?: React.ReactNode
}

const Page = ({ entity, children }: Props) => {
  console.log(entity.__typename)
  return <>{children}</>
}

export default Page
