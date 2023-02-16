import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const DeleteLmsCommentDocument = gql`
    mutation deleteLMSComment($lmsFeedbackId: ID!, $commentId: ID!) {
  deleteLMSfeedbackComment(lmsFeedbackId: $lmsFeedbackId, commentId: $commentId) {
    success
    message
  }
}
    `;
export type DeleteLmsCommentMutationFn = Apollo.MutationFunction<DeleteLmsCommentMutation, DeleteLmsCommentMutationVariables>;

/**
 * __useDeleteLmsCommentMutation__
 *
 * To run a mutation, you first call `useDeleteLmsCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteLmsCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteLmsCommentMutation, { data, loading, error }] = useDeleteLmsCommentMutation({
 *   variables: {
 *      lmsFeedbackId: // value for 'lmsFeedbackId'
 *      commentId: // value for 'commentId'
 *   },
 * });
 */
export function useDeleteLmsCommentMutation(baseOptions?: Apollo.MutationHookOptions<DeleteLmsCommentMutation, DeleteLmsCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteLmsCommentMutation, DeleteLmsCommentMutationVariables>(DeleteLmsCommentDocument, options);
      }
export type DeleteLmsCommentMutationHookResult = ReturnType<typeof useDeleteLmsCommentMutation>;
export type DeleteLmsCommentMutationResult = Apollo.MutationResult<DeleteLmsCommentMutation>;
export type DeleteLmsCommentMutationOptions = Apollo.BaseMutationOptions<DeleteLmsCommentMutation, DeleteLmsCommentMutationVariables>;
export type DeleteLmsCommentMutationVariables = Types.Exact<{
  lmsFeedbackId: Types.Scalars['ID'];
  commentId: Types.Scalars['ID'];
}>;


export type DeleteLmsCommentMutation = { __typename?: 'Mutation', deleteLMSfeedbackComment?: { __typename?: 'GenericServerResponse', success?: boolean | null, message?: string | null } | null };
