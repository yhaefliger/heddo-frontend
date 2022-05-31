import { ParagraphContainerSimpleFragment } from '@/graphql/generated/schema'
import { ParagraphComponentProps } from '../paragraphs'
import clsx from 'clsx'

type Props = {
  fields: ParagraphContainerSimpleFragment
} & ParagraphComponentProps

const ParagraphContainerSimple = ({ fields, children }: Props) => {
  const className = clsx(
    'container-simple container mx-auto',
    fields.fieldClasses
  )
  return <div className={className}>{children}</div>
}

export default ParagraphContainerSimple
