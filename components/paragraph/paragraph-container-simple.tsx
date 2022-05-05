import { ParagraphContainerSimpleFragment } from '@/graphql/generated/schema'
import classNames from 'classnames'
import { ParagraphComponentProps } from '../paragraphs'

type Props = {
  fields: ParagraphContainerSimpleFragment
} & ParagraphComponentProps

const ParagraphContainerSimple = ({ fields, children }: Props) => {
  const className = classNames(
    'container-simple container mx-auto',
    fields.fieldClasses
  )
  return <div className={className}>{children}</div>
}

export default ParagraphContainerSimple
