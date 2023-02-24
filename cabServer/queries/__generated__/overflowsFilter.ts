import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const FilterCodacOverflowsDocument = gql`
    query filterCodacOverflows($title: String!) {
  codacOverflows(
    filters: {title: {contains: $title}}
    publicationState: LIVE
    pagination: {limit: 10}
    sort: "createdAt:desc"
  ) {
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
 * __useFilterCodacOverflowsQuery__
 *
 * To run a query within a React component, call `useFilterCodacOverflowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilterCodacOverflowsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilterCodacOverflowsQuery({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useFilterCodacOverflowsQuery(baseOptions: Apollo.QueryHookOptions<FilterCodacOverflowsQuery, FilterCodacOverflowsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilterCodacOverflowsQuery, FilterCodacOverflowsQueryVariables>(FilterCodacOverflowsDocument, options);
      }
export function useFilterCodacOverflowsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilterCodacOverflowsQuery, FilterCodacOverflowsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilterCodacOverflowsQuery, FilterCodacOverflowsQueryVariables>(FilterCodacOverflowsDocument, options);
        }
export type FilterCodacOverflowsQueryHookResult = ReturnType<typeof useFilterCodacOverflowsQuery>;
export type FilterCodacOverflowsLazyQueryHookResult = ReturnType<typeof useFilterCodacOverflowsLazyQuery>;
export type FilterCodacOverflowsQueryResult = Apollo.QueryResult<FilterCodacOverflowsQuery, FilterCodacOverflowsQueryVariables>;
export type FilterCodacOverflowsQueryVariables = Types.Exact<{
  title: Types.Scalars['String'];
}>;


export type FilterCodacOverflowsQuery = { __typename?: 'Query', codacOverflows?: { __typename?: 'CodacOverflowEntityResponseCollection', data: Array<{ __typename?: 'CodacOverflowEntity', id?: string | null, attributes?: { __typename?: 'CodacOverflow', title?: string | null, description?: string | null, course?: string | null } | null }> } | null };
