import { gql } from '@apollo/client'

export const tokensQuery = gql`
  query {
    tokens(first: 10, orderBy: id) {
      id
      name
      poolCount
      symbol
      totalSupply
    }
  }
`
