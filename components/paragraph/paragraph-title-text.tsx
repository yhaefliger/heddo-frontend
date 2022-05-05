import { ParagraphTitleTextFragment } from '@/graphql/generated/schema'
import Fields from '../fields'
import { ParagraphComponentProps } from '../paragraphs'

type Props = {
  fields: ParagraphTitleTextFragment
} & ParagraphComponentProps

const ParagraphTitleText = ({ fields, settings }: Props) => {
  const { fieldTitle, fieldSubtitle, fieldText, ...remainingFields } = fields
  return (
    <div className="paragraph-title-text">
      {fieldTitle && <h1>{fieldTitle}</h1>}
      {fieldSubtitle && <div className="subtitle">{fieldSubtitle}</div>}
      {fieldText && (
        <div
          className="prose-sm lg:prose"
          dangerouslySetInnerHTML={{ __html: fieldText.processed }}
        />
      )}
      {remainingFields && (
        <Fields
          fields={remainingFields}
          parent={{ type: settings.__typename, id: settings.id }}
        />
      )}
    </div>
  )
}

export default ParagraphTitleText
