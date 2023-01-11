import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const GetNewsDocument = gql`
  query getNews {
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
`;

/**
 * __useGetNewsQuery__
 *
 * To run a query within a React component, call `useGetNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetNewsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetNewsQuery, GetNewsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetNewsQuery, GetNewsQueryVariables>(
    GetNewsDocument,
    options,
  );
}
export function useGetNewsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetNewsQuery,
    GetNewsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetNewsQuery, GetNewsQueryVariables>(
    GetNewsDocument,
    options,
  );
}
export type GetNewsQueryHookResult = ReturnType<typeof useGetNewsQuery>;
export type GetNewsLazyQueryHookResult = ReturnType<typeof useGetNewsLazyQuery>;
export type GetNewsQueryResult = Apollo.QueryResult<
  GetNewsQuery,
  GetNewsQueryVariables
>;
export type GetNewsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetNewsQuery = {
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
    }>;
  } | null;
};
