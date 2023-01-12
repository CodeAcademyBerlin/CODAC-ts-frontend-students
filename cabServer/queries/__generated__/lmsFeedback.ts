import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

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
          }
        }
      }
    }
  }
`;

/**
 * __useGetLmsFeedbacksQuery__
 *
 * To run a query within a React component, call `useGetLmsFeedbacksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLmsFeedbacksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLmsFeedbacksQuery({
 *   variables: {
 *   },
 * });
 */
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
