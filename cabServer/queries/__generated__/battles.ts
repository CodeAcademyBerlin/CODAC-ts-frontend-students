import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const GetVsBattlesDocument = gql`
    query getVSBattles {
  vsBattles(sort: "createdAt:desc") {
    data {
      id
      attributes {
        archived
        title
        description
        option1
        option2
        option_1_voters {
          data {
            id
            attributes {
              email
              username
              firstname
              lastname
              avatar {
                data {
                  attributes {
                    url
                    hash
                    mime
                    name
                    provider
                    size
                  }
                }
              }
            }
          }
        }
        option_2_voters {
          data {
            id
            attributes {
              email
              username
              firstname
              lastname
              avatar {
                data {
                  attributes {
                    url
                    hash
                    mime
                    name
                    provider
                    size
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
 * __useGetVsBattlesQuery__
 *
 * To run a query within a React component, call `useGetVsBattlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVsBattlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVsBattlesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetVsBattlesQuery(baseOptions?: Apollo.QueryHookOptions<GetVsBattlesQuery, GetVsBattlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVsBattlesQuery, GetVsBattlesQueryVariables>(GetVsBattlesDocument, options);
      }
export function useGetVsBattlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVsBattlesQuery, GetVsBattlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVsBattlesQuery, GetVsBattlesQueryVariables>(GetVsBattlesDocument, options);
        }
export type GetVsBattlesQueryHookResult = ReturnType<typeof useGetVsBattlesQuery>;
export type GetVsBattlesLazyQueryHookResult = ReturnType<typeof useGetVsBattlesLazyQuery>;
export type GetVsBattlesQueryResult = Apollo.QueryResult<GetVsBattlesQuery, GetVsBattlesQueryVariables>;
export type GetVsBattlesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetVsBattlesQuery = { __typename?: 'Query', vsBattles?: { __typename?: 'VsBattleEntityResponseCollection', data: Array<{ __typename?: 'VsBattleEntity', id?: string | null, attributes?: { __typename?: 'VsBattle', archived: boolean, title?: string | null, description?: string | null, option1?: string | null, option2?: string | null, option_1_voters?: { __typename?: 'UsersPermissionsUserRelationResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', email: string, username: string, firstname?: string | null, lastname?: string | null, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, hash: string, mime: string, name: string, provider: string, size: number } | null } | null } | null } | null }> } | null, option_2_voters?: { __typename?: 'UsersPermissionsUserRelationResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', email: string, username: string, firstname?: string | null, lastname?: string | null, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, hash: string, mime: string, name: string, provider: string, size: number } | null } | null } | null } | null }> } | null } | null }> } | null };
