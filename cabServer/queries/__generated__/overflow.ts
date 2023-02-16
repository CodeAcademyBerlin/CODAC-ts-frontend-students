import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const GetCodacOverflowsDocument = gql`
    query getCodacOverflows {
  codacOverflows(sort: "createdAt:desc") {
    data {
      id
      attributes {
        title
        description
        course
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
export function useGetCodacOverflowsQuery(baseOptions?: Apollo.QueryHookOptions<GetCodacOverflowsQuery, GetCodacOverflowsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCodacOverflowsQuery, GetCodacOverflowsQueryVariables>(GetCodacOverflowsDocument, options);
      }
export function useGetCodacOverflowsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCodacOverflowsQuery, GetCodacOverflowsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCodacOverflowsQuery, GetCodacOverflowsQueryVariables>(GetCodacOverflowsDocument, options);
        }
export type GetCodacOverflowsQueryHookResult = ReturnType<typeof useGetCodacOverflowsQuery>;
export type GetCodacOverflowsLazyQueryHookResult = ReturnType<typeof useGetCodacOverflowsLazyQuery>;
export type GetCodacOverflowsQueryResult = Apollo.QueryResult<GetCodacOverflowsQuery, GetCodacOverflowsQueryVariables>;
export type GetCodacOverflowsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCodacOverflowsQuery = { __typename?: 'Query', codacOverflows?: { __typename?: 'CodacOverflowEntityResponseCollection', data: Array<{ __typename?: 'CodacOverflowEntity', id?: string | null, attributes?: { __typename?: 'CodacOverflow', title?: string | null, description?: string | null, course?: string | null } | null }> } | null };
