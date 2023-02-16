import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const AddRatingDocument = gql`
    mutation addRating($lmsFeedbackId: ID!, $comment: String!, $rating: Int!) {
  addLMSfeedback(
    lmsFeedbackId: $lmsFeedbackId
    comment: $comment
    rating: $rating
  ) {
    success
    message
  }
}
    `;
export type AddRatingMutationFn = Apollo.MutationFunction<AddRatingMutation, AddRatingMutationVariables>;

/**
 * __useAddRatingMutation__
 *
 * To run a mutation, you first call `useAddRatingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddRatingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addRatingMutation, { data, loading, error }] = useAddRatingMutation({
 *   variables: {
 *      lmsFeedbackId: // value for 'lmsFeedbackId'
 *      comment: // value for 'comment'
 *      rating: // value for 'rating'
 *   },
 * });
 */
export function useAddRatingMutation(baseOptions?: Apollo.MutationHookOptions<AddRatingMutation, AddRatingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddRatingMutation, AddRatingMutationVariables>(AddRatingDocument, options);
      }
export type AddRatingMutationHookResult = ReturnType<typeof useAddRatingMutation>;
export type AddRatingMutationResult = Apollo.MutationResult<AddRatingMutation>;
export type AddRatingMutationOptions = Apollo.BaseMutationOptions<AddRatingMutation, AddRatingMutationVariables>;
export type AddRatingMutationVariables = Types.Exact<{
  lmsFeedbackId: Types.Scalars['ID'];
  comment: Types.Scalars['String'];
  rating: Types.Scalars['Int'];
}>;


export type AddRatingMutation = { __typename?: 'Mutation', addLMSfeedback?: { __typename?: 'GenericServerResponse', success?: boolean | null, message?: string | null } | null };
