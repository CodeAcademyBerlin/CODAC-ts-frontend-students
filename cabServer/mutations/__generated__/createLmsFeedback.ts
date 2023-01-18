import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const CreateLmsFeedbackDocument = gql`
    mutation createLmsFeedback($rating: Int, $comments: [ComponentCommentsCommentsInput], $issues: [ComponentCommentsCommentsInput], $slug: String!) {
  createLmsFeedback(
    data: {rating: $rating, comments: $comments, issues: $issues, slug: $slug}
  ) {
    data {
      attributes {
        rating
        comments {
          message
          timestamp
        }
        issues {
          message
          timestamp
        }
        slug
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
 *      comments: // value for 'comments'
 *      issues: // value for 'issues'
 *      slug: // value for 'slug'
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
  rating?: Types.InputMaybe<Types.Scalars['Int']>;
  comments?: Types.InputMaybe<Array<Types.InputMaybe<Types.ComponentCommentsCommentsInput>> | Types.InputMaybe<Types.ComponentCommentsCommentsInput>>;
  issues?: Types.InputMaybe<Array<Types.InputMaybe<Types.ComponentCommentsCommentsInput>> | Types.InputMaybe<Types.ComponentCommentsCommentsInput>>;
  slug: Types.Scalars['String'];
}>;


export type CreateLmsFeedbackMutation = { __typename?: 'Mutation', createLmsFeedback?: { __typename?: 'LmsFeedbackEntityResponse', data?: { __typename?: 'LmsFeedbackEntity', attributes?: { __typename?: 'LmsFeedback', rating?: number | null, slug: string, comments?: Array<{ __typename?: 'ComponentCommentsComments', message?: string | null, timestamp?: any | null } | null> | null, issues?: Array<{ __typename?: 'ComponentCommentsComments', message?: string | null, timestamp?: any | null } | null> | null } | null } | null } | null };
