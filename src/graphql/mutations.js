/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createComune = /* GraphQL */ `
  mutation CreateComune(
    $input: CreateComuneInput!
    $condition: ModelComuneConditionInput
  ) {
    createComune(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateComune = /* GraphQL */ `
  mutation UpdateComune(
    $input: UpdateComuneInput!
    $condition: ModelComuneConditionInput
  ) {
    updateComune(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteComune = /* GraphQL */ `
  mutation DeleteComune(
    $input: DeleteComuneInput!
    $condition: ModelComuneConditionInput
  ) {
    deleteComune(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
