import { ApolloClient, InMemoryCache } from '@apollo/client'

const uri =
  process.env.REACT_APP_UNISWAP_V3_SUBGRAPH ||
  'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3'

export const client = new ApolloClient({
  uri,
  cache: new InMemoryCache(),
})
