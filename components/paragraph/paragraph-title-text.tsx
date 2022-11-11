import { ParagraphTitleTextFragment } from '@/graphql/generated/schema'
import Fields from '../fields'
import { ParagraphComponentProps } from '../paragraphs'

type Props = {
  fields: ParagraphTitleTextFragment
} & ParagraphComponentProps

const ParagraphTitleText = ({ fields, settings }: Props) => {
  const { fieldTitle, fieldSubtitle, fieldText, ...remainingFields } = fields
  let text = ''
  if (fieldTitle && fieldTitle != '') {
    text += `<h2 class="title">${fieldTitle}</h2>`
  }
  if (fieldSubtitle && fieldSubtitle != '') {
    text += `<div class="subtitle font-medium mb-2">${fieldSubtitle}</div>`
  }
  if (fieldText?.processed != '') {
    text += `${fieldText.processed}`
  }

  return (
    <div className="paragraph-title-text">
      {text != '' && (
        <div
          className="prose lg:prose-lg"
          dangerouslySetInnerHTML={{ __html: text }}
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
