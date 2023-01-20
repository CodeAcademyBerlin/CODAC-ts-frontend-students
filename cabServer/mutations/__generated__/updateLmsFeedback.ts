import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const UpdateLmsFeedbackDocument = gql`
    mutation updateLmsFeedback($id: ID!, $comments: [ComponentCommentsCommentsInput], $issues: [ComponentCommentsCommentsInput], $slug: String!) {
  updateLmsFeedback(
    id: $id
    data: {comments: $comments, issues: $issues, slug: $slug}
  ) {
    data {
      attributes {
        comments {
          id
          timestamp
          message
        }
        issues {
          id
          timestamp
          message
          rating
        }
        slug
      }
    }
  }
}
    `;
export type UpdateLmsFeedbackMutationFn = Apollo.MutationFunction<UpdateLmsFeedbackMutation, UpdateLmsFeedbackMutationVariables>;

/**
 * __useUpdateLmsFeedbackMutation__
 *
 * To run a mutation, you first call `useUpdateLmsFeedbackMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLmsFeedbackMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLmsFeedbackMutation, { data, loading, error }] = useUpdateLmsFeedbackMutation({
 *   variables: {
 *      id: // value for 'id'
 *      comments: // value for 'comments'
 *      issues: // value for 'issues'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useUpdateLmsFeedbackMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLmsFeedbackMutation, UpdateLmsFeedbackMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLmsFeedbackMutation, UpdateLmsFeedbackMutationVariables>(UpdateLmsFeedbackDocument, options);
      }
export type UpdateLmsFeedbackMutationHookResult = ReturnType<typeof useUpdateLmsFeedbackMutation>;
export type UpdateLmsFeedbackMutationResult = Apollo.MutationResult<UpdateLmsFeedbackMutation>;
export type UpdateLmsFeedbackMutationOptions = Apollo.BaseMutationOptions<UpdateLmsFeedbackMutation, UpdateLmsFeedbackMutationVariables>;
export type UpdateLmsFeedbackMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  comments?: Types.InputMaybe<Array<Types.InputMaybe<Types.ComponentCommentsCommentsInput>> | Types.InputMaybe<Types.ComponentCommentsCommentsInput>>;
  issues?: Types.InputMaybe<Array<Types.InputMaybe<Types.ComponentCommentsCommentsInput>> | Types.InputMaybe<Types.ComponentCommentsCommentsInput>>;
  slug: Types.Scalars['String'];
}>;


export type UpdateLmsFeedbackMutation = { __typename?: 'Mutation', updateLmsFeedback?: { __typename?: 'LmsFeedbackEntityResponse', data?: { __typename?: 'LmsFeedbackEntity', attributes?: { __typename?: 'LmsFeedback', slug: string, comments?: Array<{ __typename?: 'ComponentCommentsComments', id: string, timestamp?: any | null, message?: string | null } | null> | null, issues?: Array<{ __typename?: 'ComponentCommentsComments', id: string, timestamp?: any | null, message?: string | null, rating?: number | null } | null> | null } | null } | null } | null };
