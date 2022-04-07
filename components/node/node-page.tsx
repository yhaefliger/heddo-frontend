import { NodePage } from '@/lib/page'
import Paragraphs from '../paragraphs'

export type Props = {
  entity: NodePage
  children?: React.ReactNode
}

const NodePage = ({ entity }: Props) => {
  return (
    <div className="node-page">
      {entity.content && <Paragraphs paragraphs={entity.content} />}
    </div>
  )
}

export default NodePage
