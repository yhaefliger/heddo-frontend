import { ParagraphComponentProps } from '../paragraphs'

const ParagraphContainerSimple = ({ children }: ParagraphComponentProps) => {
  return <div className="container-simple container mx-auto">{children}</div>
}

export default ParagraphContainerSimple
