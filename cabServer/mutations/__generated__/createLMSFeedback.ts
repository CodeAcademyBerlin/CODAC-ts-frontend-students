import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const CreateLmsFeedbackDocument = gql`
    mutation createLMSFeedback($slug: String, $comments: [ComponentCommentsCommentsInput], $feedbacks: [ComponentFeedbackFeedbackInput]) {
  createLmsFeedback(
    data: {comments: $comments, slug: $slug, feedbacks: $feedbacks}
  ) {
    data {
      id
      attributes {
        slug
        createdAt
        updatedAt
        comments {
          message
          timestamp
          id
          author {
            data {
              id
              attributes {
                username
              }
            }
          }
        }
        feedbacks {
          message
          rating
          timestamp
          id
          author {
            data {
              id
              attributes {
                username
              }
            }
          }
        }
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
 *      slug: // value for 'slug'
 *      comments: // value for 'comments'
 *      feedbacks: // value for 'feedbacks'
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
  slug?: Types.InputMaybe<Types.Scalars['String']>;
  comments?: Types.InputMaybe<Array<Types.InputMaybe<Types.ComponentCommentsCommentsInput>> | Types.InputMaybe<Types.ComponentCommentsCommentsInput>>;
  feedbacks?: Types.InputMaybe<Array<Types.InputMaybe<Types.ComponentFeedbackFeedbackInput>> | Types.InputMaybe<Types.ComponentFeedbackFeedbackInput>>;
}>;


export type CreateLmsFeedbackMutation = { __typename?: 'Mutation', createLmsFeedback?: { __typename?: 'LmsFeedbackEntityResponse', data?: { __typename?: 'LmsFeedbackEntity', id?: string | null, attributes?: { __typename?: 'LmsFeedback', slug: string, createdAt?: any | null, updatedAt?: any | null, comments?: Array<{ __typename?: 'ComponentCommentsComments', message?: string | null, timestamp?: any | null, id: string, author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null } | null } | null> | null, feedbacks?: Array<{ __typename?: 'ComponentFeedbackFeedback', message?: string | null, rating?: number | null, timestamp?: any | null, id: string, author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null } | null } | null> | null } | null } | null } | null };
