import camelcase from 'camelcase'
import DefaultField from './field/default'

const FieldsComponents = {}

/**
 * Default field component props
 */
export type FieldComponentProps = {
  type: string
  value: string | object
}

type Props = {
  fields: {
    [key: string]: string | object
  }
  parent: {
    type: string
    id: number
  }
}

/**
 * Loop through object properties and render fields
 */
const Fields = ({ fields, parent }: Props) => {
  const parentType = camelcase(parent.type, { pascalCase: true })
  return (
    <>
      {Object.entries(fields).map(([key, value], index) => {
        key = camelcase(key, { pascalCase: true })
        let Component = DefaultField
        /**
         * Fields components hierarchy example for field named "subtitle" from paragraph named "title text":
         * - ParagraphTitleTextFieldSubtitle
         * - FieldSubtitle
         * - Field
         */
        if (FieldsComponents[`${parentType}${key}`]) {
          Component = FieldsComponents[`${parentType}${key}`]
        } else if (FieldsComponents[key]) {
          Component = FieldsComponents[key]
        }
        return (
          <Component
            type={key}
            value={value}
            key={`${parentType}-${parent.id}-field-${index}`}
          />
        )
      })}
    </>
  )
}

export default Fields
