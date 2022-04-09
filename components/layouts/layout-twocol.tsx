import { ParagraphContent } from '@/lib/paragraphs'
import Paragraphs from '../paragraphs'

export type Props = {
  regions: {
    top?: ParagraphContent[]
    first?: ParagraphContent[]
    second?: ParagraphContent[]
    bottom?: ParagraphContent[]
  }
}

const LayoutTwocol = ({ regions }: Props) => {
  return (
    <div className="layout-twocol">
      {regions.top && (
        <div className="layout-region layout-region-top">
          <Paragraphs paragraphs={regions.top} />
        </div>
      )}
      {(regions.first || regions.second) && (
        <div className="layout-region flex flex-wrap">
          {regions.first && (
            <div className="flex-1 layout-region">
              <Paragraphs paragraphs={regions.first} />
            </div>
          )}
          {regions.second && (
            <div className="flex-1 layout-region">
              <Paragraphs paragraphs={regions.second} />
            </div>
          )}
        </div>
      )}
      {regions.bottom && (
        <div className="layout-region layout-region-bottom">
          <Paragraphs paragraphs={regions.bottom} />
        </div>
      )}
    </div>
  )
}

export default LayoutTwocol
