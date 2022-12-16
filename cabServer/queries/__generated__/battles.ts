import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const GetVsBattlesDocument = gql`
    query getVSBattles {
  vsBattles {
    data {
      attributes {
        title
        description
        option1
        option2
        option_1_voters {
          data {
            attributes {
              username
              email
            }
          }
        }
        option_2_voters {
          data {
            attributes {
              username
              email
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


export type GetVsBattlesQuery = { __typename?: 'Query', vsBattles?: { __typename?: 'VsBattleEntityResponseCollection', data: Array<{ __typename?: 'VsBattleEntity', attributes?: { __typename?: 'VsBattle', title?: string | null, description?: string | null, option1?: string | null, option2?: string | null, option_1_voters?: { __typename?: 'UsersPermissionsUserRelationResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string, email: string } | null }> } | null, option_2_voters?: { __typename?: 'UsersPermissionsUserRelationResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string, email: string } | null }> } | null } | null }> } | null };
