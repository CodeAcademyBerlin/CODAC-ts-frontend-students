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
