/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComune = /* GraphQL */ `
  query GetComune($id: ID!) {
    getComune(id: $id) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listComunes = /* GraphQL */ `
  query ListComunes(
    $filter: ModelComuneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComunes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
