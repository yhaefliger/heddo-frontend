const dotenv = require('dotenv')

dotenv.config({
  path: __dirname,
})

const schema = process.env.DRUPAL_GRAPHQL_URL || 'http://heddo.local/graphql'

module.exports = {
  schema,
  documents: './graphql/*.{gql,graphql}',
  extensions: {
    codegen: {
      generates: {
        './graphql/generated/schema.ts': {
          plugins: [
            'typescript',
            'typescript-operations',
            'typescript-generic-sdk',
          ],
        },
        './graphql.schema.json': {
          plugins: ['introspection'],
        },
      },
    },
  },
}
