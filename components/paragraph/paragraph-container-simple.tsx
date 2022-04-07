import { ParagraphContent } from '@/lib/paragraphs'

export type Props = {
  paragraph: ParagraphContent
  children?: React.ReactNode
}
const ContainerSimple = ({ children }: Props) => {
  return <div className="container-simple container mx-auto">{children}</div>
}

export default ContainerSimple
