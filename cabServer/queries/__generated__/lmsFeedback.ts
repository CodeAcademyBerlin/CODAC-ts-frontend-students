import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

import * as Types from '../../global/__generated__/types';
const defaultOptions = {} as const;

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
            }
          }
        }
      }
    }
  }
`;

/**
 * __useFeedbackQuery__
 *
 * To run a query within a React component, call `useFeedbackQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedbackQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedbackQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeedbackQuery(
  baseOptions?: Apollo.QueryHookOptions<FeedbackQuery, FeedbackQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<FeedbackQuery, FeedbackQueryVariables>(
    FeedbackDocument,
    options,
  );
}
export function useFeedbackLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    FeedbackQuery,
    FeedbackQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<FeedbackQuery, FeedbackQueryVariables>(
    FeedbackDocument,
    options,
  );
}
export type FeedbackQueryHookResult = ReturnType<typeof useFeedbackQuery>;
export type FeedbackLazyQueryHookResult = ReturnType<
  typeof useFeedbackLazyQuery
>;
export type FeedbackQueryResult = Apollo.QueryResult<
  FeedbackQuery,
  FeedbackQueryVariables
>;
export type FeedbackQueryVariables = Types.Exact<{ [key: string]: never }>;

export type FeedbackQuery = {
  __typename?: 'Query';
  lmsFeedbacks?: {
    __typename?: 'LmsFeedbackEntityResponseCollection';
    data: Array<{
      __typename?: 'LmsFeedbackEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'LmsFeedback';
        rating?: number | null;
        slug: string;
        createdAt?: any | null;
        comments?: Array<{
          __typename?: 'ComponentCommentsComments';
          id: string;
          message?: string | null;
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
