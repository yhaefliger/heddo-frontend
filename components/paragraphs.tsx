import { ParagraphContent } from '@/lib/paragraphs'
import LayoutOnecol from './layouts/layout-onecol'
import LayoutTwocol from './layouts/layout-twocol'
import ParagraphContainerSimple from './paragraph/paragraph-container-simple'
import ParagraphTitleText from './paragraph/paragraph-title-text'
import DefaultParagraph from './paragraph/default'


const ParagraphsComponents = {
  ParagraphContainerSimple: ParagraphContainerSimple,
  ParagraphTitleText: ParagraphTitleText,
}

const LayoutsComponents = {
  LayoutOnecol: LayoutOnecol,
  LayoutTwocol: LayoutTwocol,
}

/**
 * Default field component props
 */
export type ParagraphComponentProps = {
  settings: Partial<ParagraphContent>
  fields: ParagraphContent['fields']
  children?: React.ReactNode
}

type Props = {
  paragraphs: ParagraphContent[]
  children?: React.ReactNode
}

const Paragraph = ({ paragraph }: { paragraph: ParagraphContent }) => {
  if ('__typename' in paragraph) {
    const { fields, ...settings } = paragraph

    let ParagraphComponent = DefaultParagraph
    if (ParagraphsComponents[paragraph.__typename]) {
      ParagraphComponent = ParagraphsComponents[paragraph.__typename]
    }

    // layout render
    if (
      paragraph.type == 'section' &&
      paragraph.layout &&
      LayoutsComponents[paragraph.layout]
    ) {
      const LayoutComponent = LayoutsComponents[paragraph.layout]
      return (
        <ParagraphComponent fields={fields} settings={settings}>
          <LayoutComponent regions={paragraph.regions} />
        </ParagraphComponent>
      )
    } else {
      return <ParagraphComponent fields={fields} settings={settings} />
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
