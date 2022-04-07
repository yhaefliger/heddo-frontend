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
  return (
    <div className="paragraph-title-text">
      {fields.fieldTest && <h1>{fields.fieldTest}</h1>}
    </div>
  )
}

export default ParagraphTitleText
