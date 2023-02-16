import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const GetNewsDocument = gql`
    query getNews {
  newsPosts(sort: "updatedAt:desc") {
    data {
      id
      attributes {
        title
        post
        author {
          data {
            id
            attributes {
              username
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
        likes {
          data {
            id
            attributes {
              username
            }
          }
        }
        createdAt
        updatedAt
        publishedAt
        tags
        image {
          data {
            id
            attributes {
              url
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
export function useGetNewsQuery(baseOptions?: Apollo.QueryHookOptions<GetNewsQuery, GetNewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNewsQuery, GetNewsQueryVariables>(GetNewsDocument, options);
      }
export function useGetNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNewsQuery, GetNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNewsQuery, GetNewsQueryVariables>(GetNewsDocument, options);
        }
export type GetNewsQueryHookResult = ReturnType<typeof useGetNewsQuery>;
export type GetNewsLazyQueryHookResult = ReturnType<typeof useGetNewsLazyQuery>;
export type GetNewsQueryResult = Apollo.QueryResult<GetNewsQuery, GetNewsQueryVariables>;
export type GetNewsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetNewsQuery = { __typename?: 'Query', newsPosts?: { __typename?: 'NewsPostEntityResponseCollection', data: Array<{ __typename?: 'NewsPostEntity', id?: string | null, attributes?: { __typename?: 'NewsPost', title?: string | null, post?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, tags?: Types.Enum_Newspost_Tags | null, author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, width?: number | null, height?: number | null, hash: string, mime: string, size: number, previewUrl?: string | null, provider: string, url: string } | null } | null } | null } | null } | null } | null, likes?: { __typename?: 'UsersPermissionsUserRelationResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string } | null }> } | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null };
