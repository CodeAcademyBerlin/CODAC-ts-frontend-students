import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const CreateLmsFeedbackDocument = gql`
    mutation createLmsFeedback($rating: Int!, $slug: String!, $issues: [ComponentCommentsCommentsInput]) {
  createLmsFeedback(data: {rating: $rating, slug: $slug, issues: $issues}) {
    data {
      attributes {
        rating
        slug
        issues {
          message
        }
      }
    }
  }
}
    `;
export type CreateLmsFeedbackMutationFn = Apollo.MutationFunction<CreateLmsFeedbackMutation, CreateLmsFeedbackMutationVariables>;

/**
 * __useCreateLmsFeedbackMutation__
 *
 * To run a mutation, you first call `useCreateLmsFeedbackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLmsFeedbackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLmsFeedbackMutation, { data, loading, error }] = useCreateLmsFeedbackMutation({
 *   variables: {
 *      rating: // value for 'rating'
 *      slug: // value for 'slug'
 *      issues: // value for 'issues'
 *   },
 * });
 */
export function useCreateLmsFeedbackMutation(baseOptions?: Apollo.MutationHookOptions<CreateLmsFeedbackMutation, CreateLmsFeedbackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLmsFeedbackMutation, CreateLmsFeedbackMutationVariables>(CreateLmsFeedbackDocument, options);
      }
export type CreateLmsFeedbackMutationHookResult = ReturnType<typeof useCreateLmsFeedbackMutation>;
export type CreateLmsFeedbackMutationResult = Apollo.MutationResult<CreateLmsFeedbackMutation>;
export type CreateLmsFeedbackMutationOptions = Apollo.BaseMutationOptions<CreateLmsFeedbackMutation, CreateLmsFeedbackMutationVariables>;
export type CreateLmsFeedbackMutationVariables = Types.Exact<{
  rating: Types.Scalars['Int'];
  slug: Types.Scalars['String'];
  issues?: Types.InputMaybe<Array<Types.InputMaybe<Types.ComponentCommentsCommentsInput>> | Types.InputMaybe<Types.ComponentCommentsCommentsInput>>;
}>;


export type CreateLmsFeedbackMutation = { __typename?: 'Mutation', createLmsFeedback?: { __typename?: 'LmsFeedbackEntityResponse', data?: { __typename?: 'LmsFeedbackEntity', attributes?: { __typename?: 'LmsFeedback', rating?: number | null, slug: string, issues?: Array<{ __typename?: 'ComponentCommentsComments', message?: string | null } | null> | null } | null } | null } | null };
