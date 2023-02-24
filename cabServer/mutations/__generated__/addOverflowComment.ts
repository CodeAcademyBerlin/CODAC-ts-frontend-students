import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const AddCodacOverflowCommentDocument = gql`
    mutation addCODACOverflowComment($codacOverflowId: ID!, $comment: String!) {
  addCODACOverflowComment(codacOverflowId: $codacOverflowId, comment: $comment) {
    success
    message
  }
}
    `;
export type AddCodacOverflowCommentMutationFn = Apollo.MutationFunction<AddCodacOverflowCommentMutation, AddCodacOverflowCommentMutationVariables>;

/**
 * __useAddCodacOverflowCommentMutation__
 *
 * To run a mutation, you first call `useAddCodacOverflowCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCodacOverflowCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCodacOverflowCommentMutation, { data, loading, error }] = useAddCodacOverflowCommentMutation({
 *   variables: {
 *      codacOverflowId: // value for 'codacOverflowId'
 *      comment: // value for 'comment'
 *   },
 * });
 */
export function useAddCodacOverflowCommentMutation(baseOptions?: Apollo.MutationHookOptions<AddCodacOverflowCommentMutation, AddCodacOverflowCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCodacOverflowCommentMutation, AddCodacOverflowCommentMutationVariables>(AddCodacOverflowCommentDocument, options);
      }
export type AddCodacOverflowCommentMutationHookResult = ReturnType<typeof useAddCodacOverflowCommentMutation>;
export type AddCodacOverflowCommentMutationResult = Apollo.MutationResult<AddCodacOverflowCommentMutation>;
export type AddCodacOverflowCommentMutationOptions = Apollo.BaseMutationOptions<AddCodacOverflowCommentMutation, AddCodacOverflowCommentMutationVariables>;
export type AddCodacOverflowCommentMutationVariables = Types.Exact<{
  codacOverflowId: Types.Scalars['ID'];
  comment: Types.Scalars['String'];
}>;


export type AddCodacOverflowCommentMutation = { __typename?: 'Mutation', addCODACOverflowComment?: { __typename?: 'GenericServerResponse', success?: boolean | null, message?: string | null } | null };
