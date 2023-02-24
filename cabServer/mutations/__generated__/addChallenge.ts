import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const CreateCodingChallengeDocument = gql`
    mutation createCodingChallenge($title: String, $challenge: String, $difficulty: Int, $tags: ENUM_CODINGCHALLENGE_TAGS, $publishedAt: DateTime!, $author: ID!) {
  createCodingChallenge(
    data: {title: $title, challenge: $challenge, difficulty: $difficulty, tags: $tags, publishedAt: $publishedAt, author: $author}
  ) {
    data {
      id
    }
  }
}
    `;
export type CreateCodingChallengeMutationFn = Apollo.MutationFunction<CreateCodingChallengeMutation, CreateCodingChallengeMutationVariables>;

/**
 * __useCreateCodingChallengeMutation__
 *
 * To run a mutation, you first call `useCreateCodingChallengeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCodingChallengeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCodingChallengeMutation, { data, loading, error }] = useCreateCodingChallengeMutation({
 *   variables: {
 *      title: // value for 'title'
 *      challenge: // value for 'challenge'
 *      difficulty: // value for 'difficulty'
 *      tags: // value for 'tags'
 *      publishedAt: // value for 'publishedAt'
 *      author: // value for 'author'
 *   },
 * });
 */
export function useCreateCodingChallengeMutation(baseOptions?: Apollo.MutationHookOptions<CreateCodingChallengeMutation, CreateCodingChallengeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCodingChallengeMutation, CreateCodingChallengeMutationVariables>(CreateCodingChallengeDocument, options);
      }
export type CreateCodingChallengeMutationHookResult = ReturnType<typeof useCreateCodingChallengeMutation>;
export type CreateCodingChallengeMutationResult = Apollo.MutationResult<CreateCodingChallengeMutation>;
export type CreateCodingChallengeMutationOptions = Apollo.BaseMutationOptions<CreateCodingChallengeMutation, CreateCodingChallengeMutationVariables>;
export const UpdateCodingChallengeDocument = gql`
    mutation updateCodingChallenge($id: ID!, $challenge: String) {
  updateCodingChallenge(data: {challenge: $challenge}, id: $id) {
    data {
      id
    }
  }
}
    `;
export type UpdateCodingChallengeMutationFn = Apollo.MutationFunction<UpdateCodingChallengeMutation, UpdateCodingChallengeMutationVariables>;

/**
 * __useUpdateCodingChallengeMutation__
 *
 * To run a mutation, you first call `useUpdateCodingChallengeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCodingChallengeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCodingChallengeMutation, { data, loading, error }] = useUpdateCodingChallengeMutation({
 *   variables: {
 *      id: // value for 'id'
 *      challenge: // value for 'challenge'
 *   },
 * });
 */
export function useUpdateCodingChallengeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCodingChallengeMutation, UpdateCodingChallengeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCodingChallengeMutation, UpdateCodingChallengeMutationVariables>(UpdateCodingChallengeDocument, options);
      }
export type UpdateCodingChallengeMutationHookResult = ReturnType<typeof useUpdateCodingChallengeMutation>;
export type UpdateCodingChallengeMutationResult = Apollo.MutationResult<UpdateCodingChallengeMutation>;
export type UpdateCodingChallengeMutationOptions = Apollo.BaseMutationOptions<UpdateCodingChallengeMutation, UpdateCodingChallengeMutationVariables>;
export const DeleteCodingChallengeDocument = gql`
    mutation deleteCodingChallenge($id: ID!) {
  deleteCodingChallenge(id: $id) {
    data {
      id
    }
  }
}
    `;
export type DeleteCodingChallengeMutationFn = Apollo.MutationFunction<DeleteCodingChallengeMutation, DeleteCodingChallengeMutationVariables>;

/**
 * __useDeleteCodingChallengeMutation__
 *
 * To run a mutation, you first call `useDeleteCodingChallengeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCodingChallengeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCodingChallengeMutation, { data, loading, error }] = useDeleteCodingChallengeMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCodingChallengeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCodingChallengeMutation, DeleteCodingChallengeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCodingChallengeMutation, DeleteCodingChallengeMutationVariables>(DeleteCodingChallengeDocument, options);
      }
export type DeleteCodingChallengeMutationHookResult = ReturnType<typeof useDeleteCodingChallengeMutation>;
export type DeleteCodingChallengeMutationResult = Apollo.MutationResult<DeleteCodingChallengeMutation>;
export type DeleteCodingChallengeMutationOptions = Apollo.BaseMutationOptions<DeleteCodingChallengeMutation, DeleteCodingChallengeMutationVariables>;
export type CreateCodingChallengeMutationVariables = Types.Exact<{
  title?: Types.InputMaybe<Types.Scalars['String']>;
  challenge?: Types.InputMaybe<Types.Scalars['String']>;
  difficulty?: Types.InputMaybe<Types.Scalars['Int']>;
  tags?: Types.InputMaybe<Types.Enum_Codingchallenge_Tags>;
  publishedAt: Types.Scalars['DateTime'];
  author: Types.Scalars['ID'];
}>;


export type CreateCodingChallengeMutation = { __typename?: 'Mutation', createCodingChallenge?: { __typename?: 'CodingChallengeEntityResponse', data?: { __typename?: 'CodingChallengeEntity', id?: string | null } | null } | null };

export type UpdateCodingChallengeMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  challenge?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type UpdateCodingChallengeMutation = { __typename?: 'Mutation', updateCodingChallenge?: { __typename?: 'CodingChallengeEntityResponse', data?: { __typename?: 'CodingChallengeEntity', id?: string | null } | null } | null };

export type DeleteCodingChallengeMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type DeleteCodingChallengeMutation = { __typename?: 'Mutation', deleteCodingChallenge?: { __typename?: 'CodingChallengeEntityResponse', data?: { __typename?: 'CodingChallengeEntity', id?: string | null } | null } | null };
