import { ParagraphContent } from '@/lib/paragraphs'
import Paragraphs from '../paragraphs'

export type Props = {
  regions: {
    content?: ParagraphContent[]
  }
}

const LayoutOnecol = ({ regions }: Props) => {
  return (
    <div className="layout-onecol">
      {regions.content && <Paragraphs paragraphs={regions.content} />}
    </div>
  )
}

export default LayoutOnecol
