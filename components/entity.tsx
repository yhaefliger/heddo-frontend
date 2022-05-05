import { Entity } from '@/lib/page'
import Metatags from './metatags'
import NodePage from './node/node-page'

// Drupal entities __typename to React components
const EntitiesComponents = {
  NodePage: NodePage,
}

export type Props = {
  entity: Entity
  children?: React.ReactNode
}

const Entity = ({ entity, children }: Props) => {
  if ('__typename' in entity) {
    const Component = EntitiesComponents[entity.__typename]

    if (!Component) {
      return null
    }
    return (
      <>
        {entity.metatags && <Metatags metatags={entity.metatags} />}
        <Component entity={entity}>{children}</Component>
      </>
    )
  } else {
    return null
  }
}

export default Entity
