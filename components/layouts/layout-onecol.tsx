import { ParagraphContent } from '@/lib/paragraphs'
import Paragraphs from '../paragraphs'

export type Props = {
  regions: {
    content?: ParagraphContent[]
  }
}

const LayoutOneCol = ({ regions }: Props) => {
  return (
    <div className="layout-onecol">
      {regions.content && <Paragraphs paragraphs={regions.content} />}
    </div>
  )
}

export default LayoutOneCol
