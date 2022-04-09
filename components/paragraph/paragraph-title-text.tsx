import { ParagraphTitleTextFragment } from '@/graphql/generated/schema'
import { ParagraphContent } from '@/lib/paragraphs'

type Paragraph = {
  fields: ParagraphTitleTextFragment
  paragraphData: Partial<ParagraphContent>
}
export type Props = {
  paragraph: Paragraph
  children?: React.ReactNode
}

const ParagraphTitleText = ({ paragraph }: Props) => {
  const { fields } = paragraph
  const { fieldTest: title, ...remainingFields } = fields
  return <div className="paragraph-title-text">{title && <h1>{title}</h1>}</div>
}

export default ParagraphTitleText
