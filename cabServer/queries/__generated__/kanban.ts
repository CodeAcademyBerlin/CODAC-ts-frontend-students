import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const GetKanbanByUserDocument = gql`
    query getKanbanByUser($id: ID) {
  usersPermissionsUser(id: $id) {
    data {
      attributes {
        kanban {
          columns {
            id
            title
            order
            done
            cards {
              id
              task
              description
              deadline
              category
              done
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetKanbanByUserQuery__
 *
 * To run a query within a React component, call `useGetKanbanByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetKanbanByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetKanbanByUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetKanbanByUserQuery(baseOptions?: Apollo.QueryHookOptions<GetKanbanByUserQuery, GetKanbanByUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetKanbanByUserQuery, GetKanbanByUserQueryVariables>(GetKanbanByUserDocument, options);
      }
export function useGetKanbanByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetKanbanByUserQuery, GetKanbanByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetKanbanByUserQuery, GetKanbanByUserQueryVariables>(GetKanbanByUserDocument, options);
        }
export type GetKanbanByUserQueryHookResult = ReturnType<typeof useGetKanbanByUserQuery>;
export type GetKanbanByUserLazyQueryHookResult = ReturnType<typeof useGetKanbanByUserLazyQuery>;
export type GetKanbanByUserQueryResult = Apollo.QueryResult<GetKanbanByUserQuery, GetKanbanByUserQueryVariables>;
export type GetKanbanByUserQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['ID']>;
}>;


export type GetKanbanByUserQuery = { __typename?: 'Query', usersPermissionsUser?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', kanban?: { __typename?: 'ComponentKanbanBoard', columns?: Array<{ __typename?: 'ComponentKanbanColumn', id: string, title?: string | null, order?: number | null, done?: boolean | null, cards?: Array<{ __typename?: 'ComponentKanbanCard', id: string, task?: string | null, description?: string | null, deadline?: any | null, category?: Types.Enum_Componentkanbancard_Category | null, done?: boolean | null } | null> | null } | null> | null } | null } | null } | null } | null };
