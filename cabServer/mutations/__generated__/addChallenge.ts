import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const CreateCodingChallengeDocument = gql`
    mutation createCodingChallenge($title: String, $challenge: String, $difficulty: Int, $tags: ENUM_CODINGCHALLENGE_TAGS, $publishedAt: DateTime!) {
  createCodingChallenge(
    data: {title: $title, challenge: $challenge, difficulty: $difficulty, tags: $tags, publishedAt: $publishedAt}
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
export type CreateCodingChallengeMutationVariables = Types.Exact<{
  title?: Types.InputMaybe<Types.Scalars['String']>;
  challenge?: Types.InputMaybe<Types.Scalars['String']>;
  difficulty?: Types.InputMaybe<Types.Scalars['Int']>;
  tags?: Types.InputMaybe<Types.Enum_Codingchallenge_Tags>;
  publishedAt: Types.Scalars['DateTime'];
}>;


export type CreateCodingChallengeMutation = { __typename?: 'Mutation', createCodingChallenge?: { __typename?: 'CodingChallengeEntityResponse', data?: { __typename?: 'CodingChallengeEntity', id?: string | null } | null } | null };
