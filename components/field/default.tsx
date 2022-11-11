import { FieldComponentProps } from '../fields'

const Field = ({ value }: FieldComponentProps) => {
  if (typeof value === 'string') {
    return <div> {value}</div>
  }
  return null
}

export default Field
