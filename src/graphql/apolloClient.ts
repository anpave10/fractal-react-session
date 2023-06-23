import { ApolloClient, InMemoryCache } from '@apollo/client'
import { GRAPHQL_ENDPOINT } from '../config'

const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache: new InMemoryCache()
})

export default client