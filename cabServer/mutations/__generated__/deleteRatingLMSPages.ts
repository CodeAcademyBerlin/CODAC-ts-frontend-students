import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const DeleteLmsRatingDocument = gql`
    mutation deleteLMSRating($lmsFeedbackId: ID!, $feedbackId: ID!) {
  deleteLMSfeedback(lmsFeedbackId: $lmsFeedbackId, feedbackId: $feedbackId) {
    success
    message
  }
}
    `;
export type DeleteLmsRatingMutationFn = Apollo.MutationFunction<DeleteLmsRatingMutation, DeleteLmsRatingMutationVariables>;

/**
 * __useDeleteLmsRatingMutation__
 *
 * To run a mutation, you first call `useDeleteLmsRatingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLmsRatingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLmsRatingMutation, { data, loading, error }] = useDeleteLmsRatingMutation({
 *   variables: {
 *      lmsFeedbackId: // value for 'lmsFeedbackId'
 *      feedbackId: // value for 'feedbackId'
 *   },
 * });
 */
export function useDeleteLmsRatingMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLmsRatingMutation, DeleteLmsRatingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteLmsRatingMutation, DeleteLmsRatingMutationVariables>(DeleteLmsRatingDocument, options);
      }
export type DeleteLmsRatingMutationHookResult = ReturnType<typeof useDeleteLmsRatingMutation>;
export type DeleteLmsRatingMutationResult = Apollo.MutationResult<DeleteLmsRatingMutation>;
export type DeleteLmsRatingMutationOptions = Apollo.BaseMutationOptions<DeleteLmsRatingMutation, DeleteLmsRatingMutationVariables>;
export type DeleteLmsRatingMutationVariables = Types.Exact<{
  lmsFeedbackId: Types.Scalars['ID'];
  feedbackId: Types.Scalars['ID'];
}>;


export type DeleteLmsRatingMutation = { __typename?: 'Mutation', deleteLMSfeedback?: { __typename?: 'GenericServerResponse', success?: boolean | null, message?: string | null } | null };
