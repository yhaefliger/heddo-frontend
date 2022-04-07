import { ParagraphContent } from '@/lib/paragraphs'
import LayoutOneCol from './layouts/layout-onecol'
import LayoutTwoCol from './layouts/layout-twocol'
import ContainerSimple from './paragraph/paragraph-container-simple'
import ParagraphTitleText from './paragraph/paragraph-title-text'

const ParagraphsComponents = {
  ParagraphContainerSimple: ContainerSimple,
  ParagraphTitleText: ParagraphTitleText,
}

const LayoutsComponents = {
  'layout-onecol': LayoutOneCol,
  'layout-twocol': LayoutTwoCol,
}

export type Props = {
  paragraphs: ParagraphContent[]
  children?: React.ReactNode
}

const Paragraph = ({ paragraph }: { paragraph: ParagraphContent }) => {
  if ('__typename' in paragraph) {
    const ParagraphComponent = ParagraphsComponents[paragraph.__typename]
    if (!ParagraphComponent) {
      console.log(`No paragraph component for ${paragraph.__typename}`)
      return null
    }

    // layout render
    if (
      paragraph.type == 'section' &&
      paragraph.layout &&
      LayoutsComponents[paragraph.layout]
    ) {
      const LayoutComponent = LayoutsComponents[paragraph.layout]
      return (
        <ParagraphComponent paragraph={paragraph}>
          <LayoutComponent regions={paragraph.regions} />
        </ParagraphComponent>
      )
    } else {
      return <ParagraphComponent paragraph={paragraph} />
    }
  }
  return null
}

const Paragraphs = ({ paragraphs }: Props) => {
  return (
    <>
      {paragraphs.map((paragraph) => (
        <Paragraph paragraph={paragraph} key={`paragraph-${paragraph.id}`} />
      ))}
    </>
  )
}

export default Paragraphs
