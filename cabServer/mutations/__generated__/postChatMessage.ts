import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const AddChatMessageDocument = gql`
    mutation addChatMessage($chatId: ID!, $body: String!) {
  addChatMessage(chatId: $chatId, body: $body) {
    success
    message
  }
}
    `;
export type AddChatMessageMutationFn = Apollo.MutationFunction<AddChatMessageMutation, AddChatMessageMutationVariables>;

/**
 * __useAddChatMessageMutation__
 *
 * To run a mutation, you first call `useAddChatMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddChatMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addChatMessageMutation, { data, loading, error }] = useAddChatMessageMutation({
 *   variables: {
 *      chatId: // value for 'chatId'
 *      body: // value for 'body'
 *   },
 * });
 */
export function useAddChatMessageMutation(baseOptions?: Apollo.MutationHookOptions<AddChatMessageMutation, AddChatMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddChatMessageMutation, AddChatMessageMutationVariables>(AddChatMessageDocument, options);
      }
export type AddChatMessageMutationHookResult = ReturnType<typeof useAddChatMessageMutation>;
export type AddChatMessageMutationResult = Apollo.MutationResult<AddChatMessageMutation>;
export type AddChatMessageMutationOptions = Apollo.BaseMutationOptions<AddChatMessageMutation, AddChatMessageMutationVariables>;
export type AddChatMessageMutationVariables = Types.Exact<{
  chatId: Types.Scalars['ID'];
  body: Types.Scalars['String'];
}>;


export type AddChatMessageMutation = { __typename?: 'Mutation', addChatMessage?: { __typename?: 'GenericServerResponse', success?: boolean | null, message?: string | null } | null };
