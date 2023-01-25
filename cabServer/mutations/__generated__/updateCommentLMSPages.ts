import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const UpdateLmsFeedbackCommentDocument = gql`
    mutation updateLMSFeedbackComment($lmsFeedbackId: ID!, $commentId: ID!, $comment: String!) {
  updateLMSfeedbackComment(
    lmsFeedbackId: $lmsFeedbackId
    commentId: $commentId
    comment: $comment
  ) {
    success
    message
  }
}
    `;
export type UpdateLmsFeedbackCommentMutationFn = Apollo.MutationFunction<UpdateLmsFeedbackCommentMutation, UpdateLmsFeedbackCommentMutationVariables>;

/**
 * __useUpdateLmsFeedbackCommentMutation__
 *
 * To run a mutation, you first call `useUpdateLmsFeedbackCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLmsFeedbackCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLmsFeedbackCommentMutation, { data, loading, error }] = useUpdateLmsFeedbackCommentMutation({
 *   variables: {
 *      lmsFeedbackId: // value for 'lmsFeedbackId'
 *      commentId: // value for 'commentId'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useUpdateLmsFeedbackCommentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLmsFeedbackCommentMutation, UpdateLmsFeedbackCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLmsFeedbackCommentMutation, UpdateLmsFeedbackCommentMutationVariables>(UpdateLmsFeedbackCommentDocument, options);
      }
export type UpdateLmsFeedbackCommentMutationHookResult = ReturnType<typeof useUpdateLmsFeedbackCommentMutation>;
export type UpdateLmsFeedbackCommentMutationResult = Apollo.MutationResult<UpdateLmsFeedbackCommentMutation>;
export type UpdateLmsFeedbackCommentMutationOptions = Apollo.BaseMutationOptions<UpdateLmsFeedbackCommentMutation, UpdateLmsFeedbackCommentMutationVariables>;
export type UpdateLmsFeedbackCommentMutationVariables = Types.Exact<{
  lmsFeedbackId: Types.Scalars['ID'];
  commentId: Types.Scalars['ID'];
  comment: Types.Scalars['String'];
}>;


export type UpdateLmsFeedbackCommentMutation = { __typename?: 'Mutation', updateLMSfeedbackComment?: { __typename?: 'GenericServerResponse', success?: boolean | null, message?: string | null } | null };
