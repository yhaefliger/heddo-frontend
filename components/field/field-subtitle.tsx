import { FieldParagraphTitleTextFieldSubtitle } from '@/graphql/generated/schema'
import { FieldComponentProps } from '../fields'

type Props = {
  value: null | FieldParagraphTitleTextFieldSubtitle
} & FieldComponentProps

const FieldSubtitle = ({ value }: Props) => {
  if (!value || !value.processed) {
    return null
  }
  return <div className="field-subtitle">{value.processed}</div>
}

export default FieldSubtitle
