import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const UpdateCodacOverflowCommentDocument = gql`
    mutation updateCODACOverflowComment($codacOverflowId: ID!, $commentId: ID!, $comment: String!) {
  updateCODACOverflowComment(
    codacOverflowId: $codacOverflowId
    commentId: $commentId
    comment: $comment
  ) {
    success
    message
  }
}
    `;
export type UpdateCodacOverflowCommentMutationFn = Apollo.MutationFunction<UpdateCodacOverflowCommentMutation, UpdateCodacOverflowCommentMutationVariables>;

/**
 * __useUpdateCodacOverflowCommentMutation__
 *
 * To run a mutation, you first call `useUpdateCodacOverflowCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCodacOverflowCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCodacOverflowCommentMutation, { data, loading, error }] = useUpdateCodacOverflowCommentMutation({
 *   variables: {
 *      codacOverflowId: // value for 'codacOverflowId'
 *      commentId: // value for 'commentId'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useUpdateCodacOverflowCommentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCodacOverflowCommentMutation, UpdateCodacOverflowCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCodacOverflowCommentMutation, UpdateCodacOverflowCommentMutationVariables>(UpdateCodacOverflowCommentDocument, options);
      }
export type UpdateCodacOverflowCommentMutationHookResult = ReturnType<typeof useUpdateCodacOverflowCommentMutation>;
export type UpdateCodacOverflowCommentMutationResult = Apollo.MutationResult<UpdateCodacOverflowCommentMutation>;
export type UpdateCodacOverflowCommentMutationOptions = Apollo.BaseMutationOptions<UpdateCodacOverflowCommentMutation, UpdateCodacOverflowCommentMutationVariables>;
export type UpdateCodacOverflowCommentMutationVariables = Types.Exact<{
  codacOverflowId: Types.Scalars['ID'];
  commentId: Types.Scalars['ID'];
  comment: Types.Scalars['String'];
}>;


export type UpdateCodacOverflowCommentMutation = { __typename?: 'Mutation', updateCODACOverflowComment?: { __typename?: 'GenericServerResponse', success?: boolean | null, message?: string | null } | null };
