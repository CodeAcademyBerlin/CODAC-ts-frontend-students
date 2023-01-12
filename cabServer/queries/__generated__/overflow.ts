import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const GetCodacOverflowsDocument = gql`
  query getCodacOverflows {
    codacOverflows {
      data {
        id
        attributes {
          slug
          title
          description
          data
          author {
            data {
              id
              attributes {
                student {
                  data {
                    id
                    attributes {
                      firstname
                      lastname
                      avatar {
                        data {
                          id
                          attributes {
                            name
                            alternativeText
                            width
                            height
                            hash
                            mime
                            size
                            previewUrl
                            provider
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
          comments {
            id
            message
            timestamp
            author {
              data {
                id
                attributes {
                  student {
                    data {
                      id
                      attributes {
                        firstname
                        lastname
                        avatar {
                          data {
                            id
                            attributes {
                              name
                              alternativeText
                              width
                              height
                              hash
                              mime
                              size
                              previewUrl
                              provider
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
          course
          createdAt
          updatedAt
          publishedAt
        }
      }
    }
  }
`;

/**
 * __useGetCodacOverflowsQuery__
 *
 * To run a query within a React component, call `useGetCodacOverflowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCodacOverflowsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCodacOverflowsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCodacOverflowsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCodacOverflowsQuery,
    GetCodacOverflowsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    GetCodacOverflowsQuery,
    GetCodacOverflowsQueryVariables
  >(GetCodacOverflowsDocument, options);
}
export function useGetCodacOverflowsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCodacOverflowsQuery,
    GetCodacOverflowsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetCodacOverflowsQuery,
    GetCodacOverflowsQueryVariables
  >(GetCodacOverflowsDocument, options);
}
export type GetCodacOverflowsQueryHookResult = ReturnType<
  typeof useGetCodacOverflowsQuery
>;
export type GetCodacOverflowsLazyQueryHookResult = ReturnType<
  typeof useGetCodacOverflowsLazyQuery
>;
export type GetCodacOverflowsQueryResult = Apollo.QueryResult<
  GetCodacOverflowsQuery,
  GetCodacOverflowsQueryVariables
>;
export type GetCodacOverflowsQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetCodacOverflowsQuery = {
  __typename?: 'Query';
  codacOverflows?: {
    __typename?: 'CodacOverflowEntityResponseCollection';
    data: Array<{
      __typename?: 'CodacOverflowEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'CodacOverflow';
        slug?: string | null;
        title?: string | null;
        description?: string | null;
        data?: any | null;
        course?: string | null;
        createdAt?: any | null;
        updatedAt?: any | null;
        publishedAt?: any | null;
        author?: {
          __typename?: 'UsersPermissionsUserEntityResponse';
          data?: {
            __typename?: 'UsersPermissionsUserEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'UsersPermissionsUser';
              student?: {
                __typename?: 'StudentEntityResponse';
                data?: {
                  __typename?: 'StudentEntity';
                  id?: string | null;
                  attributes?: {
                    __typename?: 'Student';
                    firstname?: string | null;
                    lastname?: string | null;
                    avatar?: {
                      __typename?: 'UploadFileEntityResponse';
                      data?: {
                        __typename?: 'UploadFileEntity';
                        id?: string | null;
                        attributes?: {
                          __typename?: 'UploadFile';
                          name: string;
                          alternativeText?: string | null;
                          width?: number | null;
                          height?: number | null;
                          hash: string;
                          mime: string;
                          size: number;
                          previewUrl?: string | null;
                          provider: string;
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
        comments?: Array<{
          __typename?: 'ComponentCommentsComments';
          id: string;
          message?: string | null;
          timestamp?: any | null;
          author?: {
            __typename?: 'UsersPermissionsUserEntityResponse';
            data?: {
              __typename?: 'UsersPermissionsUserEntity';
              id?: string | null;
              attributes?: {
                __typename?: 'UsersPermissionsUser';
                student?: {
                  __typename?: 'StudentEntityResponse';
                  data?: {
                    __typename?: 'StudentEntity';
                    id?: string | null;
                    attributes?: {
                      __typename?: 'Student';
                      firstname?: string | null;
                      lastname?: string | null;
                      avatar?: {
                        __typename?: 'UploadFileEntityResponse';
                        data?: {
                          __typename?: 'UploadFileEntity';
                          id?: string | null;
                          attributes?: {
                            __typename?: 'UploadFile';
                            name: string;
                            alternativeText?: string | null;
                            width?: number | null;
                            height?: number | null;
                            hash: string;
                            mime: string;
                            size: number;
                            previewUrl?: string | null;
                            provider: string;
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
        } | null> | null;
      } | null;
    }>;
  } | null;
};
