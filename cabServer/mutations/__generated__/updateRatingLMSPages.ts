import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const UpdateLmsFeedbackDocument = gql`
    mutation updateLMSFeedback($lmsFeedbackId: ID!, $feedbackId: ID!, $comment: String!, $rating: Int!) {
  updateLMSfeedback(
    lmsFeedbackId: $lmsFeedbackId
    feedbackId: $feedbackId
    comment: $comment
    rating: $rating
  ) {
    success
    message
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
 *      lmsFeedbackId: // value for 'lmsFeedbackId'
 *      feedbackId: // value for 'feedbackId'
 *      comment: // value for 'comment'
 *      rating: // value for 'rating'
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
  lmsFeedbackId: Types.Scalars['ID'];
  feedbackId: Types.Scalars['ID'];
  comment: Types.Scalars['String'];
  rating: Types.Scalars['Int'];
}>;


export type UpdateLmsFeedbackMutation = { __typename?: 'Mutation', updateLMSfeedback?: { __typename?: 'GenericServerResponse', success?: boolean | null, message?: string | null } | null };
