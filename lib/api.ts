import {
  ApolloClient,
  QueryOptions,
  MutationOptions,
  InMemoryCache,
} from '@apollo/client'
import { DocumentNode } from 'graphql'
import { getSdk, Requester } from '../graphql/generated/schema'

export type ApolloRequesterOptions<V, R> =
  | Omit<QueryOptions<V>, 'variables' | 'query'>
  | Omit<MutationOptions<R, V>, 'variables' | 'mutation'>


let defaultOptions = {}
//disable apollo cache in development
if(process.env.NODE_ENV == 'development') {
  defaultOptions = {
    watchQuery: {
      fetchPolicy: 'network-only',
    },
    query: {
      fetchPolicy: 'network-only',
    }
  }
}
export const client = new ApolloClient({
  uri: process.env.DRUPAL_GRAPHQL_URL,
  cache: new InMemoryCache(),
  defaultOptions
})

const validDocDefOps = ['query']

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getSdkApollo = <C>(client: ApolloClient<C>) => {
  const requester: Requester = async <R, V>(
    doc: DocumentNode,
    variables: V,
    options?: ApolloRequesterOptions<V, R>
    ): Promise<R> => {
    // Valid document should contain *single* query or mutation unless it's has a fragment
    if (
      doc.definitions.filter(
        (d) =>
          d.kind === 'OperationDefinition' &&
          validDocDefOps.includes(d.operation)
      ).length !== 1
    ) {
      throw new Error(
        'DocumentNode passed to Apollo Client must contain single query or mutation'
      )
    }

    const definition = doc.definitions[0]

    // Valid document should contain *OperationDefinition*
    if (definition.kind !== 'OperationDefinition') {
      throw new Error(
        'DocumentNode passed to Apollo Client must contain single query or mutation'
      )
    }


      const response = await client.query<R, V>({
        query: doc,
        variables,
        ...options,
      })

      if (response.errors || response.error) {
        if(response.error) {
          throw new Error(`Apollo query error: ${response.error.message}`);
        } else if(response.errors){
          const error = response.errors.map(e => e.message).join(',')
          throw new Error(`Apollo query errors: ${error}`);
        } else {
          throw new Error(`Apollo query error`);
        }
      }

      if (response.data === undefined || response.data === null) {
        throw new Error('No data presented in the GraphQL response')
      }
      return response.data

  }

  return getSdk(requester)
}
export type Sdk = ReturnType<typeof getSdkApollo>

const requester = getSdkApollo(client)
export default requester
