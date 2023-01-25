import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

import * as Types from '../../global/__generated__/types';
const defaultOptions = {} as const;

export const CreateVsBattleDocument = gql`
  mutation createVsBattle(
    $option1: String!
    $option2: String!
    $title: String!
    $description: String!
    $archived: Boolean!
    $publishedAt: DateTime
  ) {
    createVsBattle(
      data: {
        option1: $option1
        option2: $option2
        title: $title
        description: $description
        archived: $archived
        publishedAt: $publishedAt
      }
    ) {
      data {
        id
        attributes {
          option1
          option2
          description
          title
        }
      }
    }
  }
`;
export type CreateVsBattleMutationFn = Apollo.MutationFunction<
  CreateVsBattleMutation,
  CreateVsBattleMutationVariables
>;

/**
 * __useCreateVsBattleMutation__
 *
 * To run a mutation, you first call `useCreateVsBattleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVsBattleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVsBattleMutation, { data, loading, error }] = useCreateVsBattleMutation({
 *   variables: {
 *      option1: // value for 'option1'
 *      option2: // value for 'option2'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      archived: // value for 'archived'
 *      publishedAt: // value for 'publishedAt'
 *   },
 * });
 */
export function useCreateVsBattleMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateVsBattleMutation,
    CreateVsBattleMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateVsBattleMutation,
    CreateVsBattleMutationVariables
  >(CreateVsBattleDocument, options);
}
export type CreateVsBattleMutationHookResult = ReturnType<
  typeof useCreateVsBattleMutation
>;
export type CreateVsBattleMutationResult =
  Apollo.MutationResult<CreateVsBattleMutation>;
export type CreateVsBattleMutationOptions = Apollo.BaseMutationOptions<
  CreateVsBattleMutation,
  CreateVsBattleMutationVariables
>;
export type CreateVsBattleMutationVariables = Types.Exact<{
  option1: Types.Scalars['String'];
  option2: Types.Scalars['String'];
  title: Types.Scalars['String'];
  description: Types.Scalars['String'];
  archived: Types.Scalars['Boolean'];
  publishedAt?: Types.InputMaybe<Types.Scalars['DateTime']>;
}>;

export type CreateVsBattleMutation = {
  __typename?: 'Mutation';
  createVsBattle?: {
    __typename?: 'VsBattleEntityResponse';
    data?: {
      __typename?: 'VsBattleEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'VsBattle';
        option1?: string | null;
        option2?: string | null;
        description?: string | null;
        title?: string | null;
      } | null;
    } | null;
  } | null;
};
