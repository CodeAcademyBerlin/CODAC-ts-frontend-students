import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

<<<<<<< HEAD
export const GetLmsFeedbacksDocument = gql`
  query getLMSFeedbacks {
    lmsFeedbacks {
      data {
        id
        attributes {
          comments {
            author {
              data {
                attributes {
                  username
                }
              }
            }
            message
            timestamp
=======
export const FeedbackDocument = gql`
    query feedback {
  lmsFeedbacks {
    data {
      id
      attributes {
        rating
        slug
        createdAt
        comments {
          id
          message
          author {
            data {
              attributes {
                username
              }
            }
>>>>>>> LMS_comments
          }
        }
      }
    }
  }
<<<<<<< HEAD
`;

/**
 * __useGetLmsFeedbacksQuery__
 *
 * To run a query within a React component, call `useGetLmsFeedbacksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLmsFeedbacksQuery` returns an object from Apollo Client that contains loading, error, and data properties
=======
}
    `;

/**
 * __useFeedbackQuery__
 *
 * To run a query within a React component, call `useFeedbackQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedbackQuery` returns an object from Apollo Client that contains loading, error, and data properties
>>>>>>> LMS_comments
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
<<<<<<< HEAD
 * const { data, loading, error } = useGetLmsFeedbacksQuery({
=======
 * const { data, loading, error } = useFeedbackQuery({
>>>>>>> LMS_comments
 *   variables: {
 *   },
 * });
 */
<<<<<<< HEAD
export function useGetLmsFeedbacksQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetLmsFeedbacksQuery,
    GetLmsFeedbacksQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetLmsFeedbacksQuery, GetLmsFeedbacksQueryVariables>(
    GetLmsFeedbacksDocument,
    options,
  );
}
export function useGetLmsFeedbacksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLmsFeedbacksQuery,
    GetLmsFeedbacksQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetLmsFeedbacksQuery,
    GetLmsFeedbacksQueryVariables
  >(GetLmsFeedbacksDocument, options);
}
export type GetLmsFeedbacksQueryHookResult = ReturnType<
  typeof useGetLmsFeedbacksQuery
>;
export type GetLmsFeedbacksLazyQueryHookResult = ReturnType<
  typeof useGetLmsFeedbacksLazyQuery
>;
export type GetLmsFeedbacksQueryResult = Apollo.QueryResult<
  GetLmsFeedbacksQuery,
  GetLmsFeedbacksQueryVariables
>;
export type GetLmsFeedbacksQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetLmsFeedbacksQuery = {
  __typename?: 'Query';
  lmsFeedbacks?: {
    __typename?: 'LmsFeedbackEntityResponseCollection';
    data: Array<{
      __typename?: 'LmsFeedbackEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'LmsFeedback';
        comments?: Array<{
          __typename?: 'ComponentCommentsComments';
          message?: string | null;
          timestamp?: any | null;
          author?: {
            __typename?: 'UsersPermissionsUserEntityResponse';
            data?: {
              __typename?: 'UsersPermissionsUserEntity';
              attributes?: {
                __typename?: 'UsersPermissionsUser';
                username: string;
              } | null;
            } | null;
          } | null;
        } | null> | null;
      } | null;
    }>;
  } | null;
};
=======
export function useFeedbackQuery(baseOptions?: Apollo.QueryHookOptions<FeedbackQuery, FeedbackQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FeedbackQuery, FeedbackQueryVariables>(FeedbackDocument, options);
      }
export function useFeedbackLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeedbackQuery, FeedbackQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FeedbackQuery, FeedbackQueryVariables>(FeedbackDocument, options);
        }
export type FeedbackQueryHookResult = ReturnType<typeof useFeedbackQuery>;
export type FeedbackLazyQueryHookResult = ReturnType<typeof useFeedbackLazyQuery>;
export type FeedbackQueryResult = Apollo.QueryResult<FeedbackQuery, FeedbackQueryVariables>;
export type FeedbackQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type FeedbackQuery = { __typename?: 'Query', lmsFeedbacks?: { __typename?: 'LmsFeedbackEntityResponseCollection', data: Array<{ __typename?: 'LmsFeedbackEntity', id?: string | null, attributes?: { __typename?: 'LmsFeedback', rating?: number | null, slug: string, createdAt?: any | null, comments?: Array<{ __typename?: 'ComponentCommentsComments', id: string, message?: string | null, author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null } | null } | null> | null } | null }> } | null };
>>>>>>> LMS_comments
