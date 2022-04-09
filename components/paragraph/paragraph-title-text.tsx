import { ParagraphTitleTextFragment } from '@/graphql/generated/schema'
import Fields from '../fields'
import { ParagraphComponentProps } from '../paragraphs'

type Props = {
  fields: ParagraphTitleTextFragment
} & ParagraphComponentProps

const ParagraphTitleText = ({ fields, settings }: Props) => {
  const { fieldTest: title, ...remainingFields } = fields

  return (
    <div className="paragraph-title-text">
      {title && <h1>{title}</h1>}
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
