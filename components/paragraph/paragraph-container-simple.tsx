import { ParagraphContainerSimpleFragment } from '@/graphql/generated/schema'
import clsx from 'clsx'
import { ParagraphComponentProps } from '../paragraphs'

type Props = {
  fields: ParagraphContainerSimpleFragment
} & ParagraphComponentProps

const ParagraphContainerSimple = ({ fields, children }: Props) => {
  const className = clsx(
    'container-simple container-wrapper',
    fields.fieldClasses,
  )
  return (
    <div id={fields.fieldId?.toString() || `container-${fields.id}`} className={className}>
      {children}
    </div>
  )
}

export default ParagraphContainerSimple
