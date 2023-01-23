import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const GetNewsPostDocument = gql`
  query getNewsPost {
    newsPosts {
      data {
        attributes {
          post
          post
          author {
            data {
              attributes {
                email
                student {
                  data {
                    attributes {
                      user {
                        data {
                          attributes {
                            avatar {
                              data {
                                attributes {
                                  url
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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
 * __useGetNewsPostQuery__
 *
 * To run a query within a React component, call `useGetNewsPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewsPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewsPostQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNewsPostQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetNewsPostQuery,
    GetNewsPostQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetNewsPostQuery, GetNewsPostQueryVariables>(
    GetNewsPostDocument,
    options,
  );
}
export function useGetNewsPostLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNewsPostQuery,
    GetNewsPostQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetNewsPostQuery, GetNewsPostQueryVariables>(
    GetNewsPostDocument,
    options,
  );
}
export type GetNewsPostQueryHookResult = ReturnType<typeof useGetNewsPostQuery>;
export type GetNewsPostLazyQueryHookResult = ReturnType<
  typeof useGetNewsPostLazyQuery
>;
export type GetNewsPostQueryResult = Apollo.QueryResult<
  GetNewsPostQuery,
  GetNewsPostQueryVariables
>;
export type GetNewsPostQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetNewsPostQuery = {
  __typename?: 'Query';
  newsPosts?: {
    __typename?: 'NewsPostEntityResponseCollection';
    data: Array<{
      __typename?: 'NewsPostEntity';
      attributes?: {
        __typename?: 'NewsPost';
        post?: string | null;
        author?: {
          __typename?: 'UsersPermissionsUserEntityResponse';
          data?: {
            __typename?: 'UsersPermissionsUserEntity';
            attributes?: {
              __typename?: 'UsersPermissionsUser';
              email: string;
              student?: {
                __typename?: 'StudentEntityResponse';
                data?: {
                  __typename?: 'StudentEntity';
                  attributes?: {
                    __typename?: 'Student';
                    user?: {
                      __typename?: 'UsersPermissionsUserEntityResponse';
                      data?: {
                        __typename?: 'UsersPermissionsUserEntity';
                        attributes?: {
                          __typename?: 'UsersPermissionsUser';
                          avatar?: {
                            __typename?: 'UploadFileEntityResponse';
                            data?: {
                              __typename?: 'UploadFileEntity';
                              attributes?: {
                                __typename?: 'UploadFile';
                                url: string;
                              } | null;
                            } | null;
                          } | null;
                        } | null;
                      } | null;
                    } | null;
                  } | null;
                } | null;
              } | null;
            } | null;
          } | null;
        } | null;
      } | null;
    }>;
  } | null;
};
