import Fields from '../fields'
import { ParagraphComponentProps } from '../paragraphs'

const Paragraph = ({ children, fields, settings }: ParagraphComponentProps) => {
  return (
    <div className="paragraph-default">
      {fields && (
        <Fields
          fields={fields}
          parent={{ type: settings.__typename, id: settings.id }}
        />
      )}
      {children}
    </div>
  )
}

export default Paragraph
