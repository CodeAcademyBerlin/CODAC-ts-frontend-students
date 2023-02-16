import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

import * as Types from '../../global/__generated__/types';
const defaultOptions = {} as const;

export const GetKanbanBoardDocument = gql`
  query getKanbanBoard {
    usersData {
      data {
        id
        attributes {
          kanban {
            id
            columns {
              id
              title
              order
              cards {
                id
                task
                description
                category
                deadline
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useGetKanbanBoardQuery__
 *
 * To run a query within a React component, call `useGetKanbanBoardQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetKanbanBoardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetKanbanBoardQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetKanbanBoardQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetKanbanBoardQuery,
    GetKanbanBoardQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetKanbanBoardQuery, GetKanbanBoardQueryVariables>(
    GetKanbanBoardDocument,
    options,
  );
}
export function useGetKanbanBoardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetKanbanBoardQuery,
    GetKanbanBoardQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetKanbanBoardQuery, GetKanbanBoardQueryVariables>(
    GetKanbanBoardDocument,
    options,
  );
}
export type GetKanbanBoardQueryHookResult = ReturnType<
  typeof useGetKanbanBoardQuery
>;
export type GetKanbanBoardLazyQueryHookResult = ReturnType<
  typeof useGetKanbanBoardLazyQuery
>;
export type GetKanbanBoardQueryResult = Apollo.QueryResult<
  GetKanbanBoardQuery,
  GetKanbanBoardQueryVariables
>;
export const GetKanbanByUserDocument = gql`
  query getKanbanByUser($id: ID) {
    usersPermissionsUser(id: $id) {
      data {
        attributes {
          kanban {
            columns {
              title
              order
              done
              cards {
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
export function useGetKanbanByUserQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetKanbanByUserQuery,
    GetKanbanByUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetKanbanByUserQuery, GetKanbanByUserQueryVariables>(
    GetKanbanByUserDocument,
    options,
  );
}
export function useGetKanbanByUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetKanbanByUserQuery,
    GetKanbanByUserQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetKanbanByUserQuery,
    GetKanbanByUserQueryVariables
  >(GetKanbanByUserDocument, options);
}
export type GetKanbanByUserQueryHookResult = ReturnType<
  typeof useGetKanbanByUserQuery
>;
export type GetKanbanByUserLazyQueryHookResult = ReturnType<
  typeof useGetKanbanByUserLazyQuery
>;
export type GetKanbanByUserQueryResult = Apollo.QueryResult<
  GetKanbanByUserQuery,
  GetKanbanByUserQueryVariables
>;
export type GetKanbanBoardQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetKanbanBoardQuery = {
  __typename?: 'Query';
  usersData?: {
    __typename?: 'UserDataEntityResponseCollection';
    data: Array<{
      __typename?: 'UserDataEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'UserData';
        kanban?: {
          __typename?: 'ComponentKanbanBoard';
          id: string;
          columns?: Array<{
            __typename?: 'ComponentKanbanColumn';
            id: string;
            title?: string | null;
            order?: number | null;
            cards?: Array<{
              __typename?: 'ComponentKanbanCard';
              id: string;
              task?: string | null;
              description?: string | null;
              category?: Types.Enum_Componentkanbancard_Category | null;
              deadline?: any | null;
            } | null> | null;
          } | null> | null;
        } | null;
      } | null;
    }>;
  } | null;
};

export type GetKanbanByUserQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['ID']>;
}>;

export type GetKanbanByUserQuery = {
  __typename?: 'Query';
  usersPermissionsUser?: {
    __typename?: 'UsersPermissionsUserEntityResponse';
    data?: {
      __typename?: 'UsersPermissionsUserEntity';
      attributes?: {
        __typename?: 'UsersPermissionsUser';
        kanban?: {
          __typename?: 'ComponentKanbanBoard';
          columns?: Array<{
            __typename?: 'ComponentKanbanColumn';
            title?: string | null;
            order?: number | null;
            done?: boolean | null;
            cards?: Array<{
              __typename?: 'ComponentKanbanCard';
              task?: string | null;
              description?: string | null;
              deadline?: any | null;
              category?: Types.Enum_Componentkanbancard_Category | null;
              done?: boolean | null;
            } | null> | null;
          } | null> | null;
        } | null;
      } | null;
    } | null;
  } | null;
};
