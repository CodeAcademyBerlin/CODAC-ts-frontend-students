import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const ProgressBarDocument = gql`
    query progressBar($userId: ID) {
  students(filters: {user: {id: {eq: $userId}}}) {
    data {
      attributes {
        start_date
        end_date
      }
    }
  }
}
    `;

/**
 * __useProgressBarQuery__
 *
 * To run a query within a React component, call `useProgressBarQuery` and pass it any options that fit your needs.
 * When your component renders, `useProgressBarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProgressBarQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useProgressBarQuery(baseOptions?: Apollo.QueryHookOptions<ProgressBarQuery, ProgressBarQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProgressBarQuery, ProgressBarQueryVariables>(ProgressBarDocument, options);
      }
export function useProgressBarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProgressBarQuery, ProgressBarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProgressBarQuery, ProgressBarQueryVariables>(ProgressBarDocument, options);
        }
export type ProgressBarQueryHookResult = ReturnType<typeof useProgressBarQuery>;
export type ProgressBarLazyQueryHookResult = ReturnType<typeof useProgressBarLazyQuery>;
export type ProgressBarQueryResult = Apollo.QueryResult<ProgressBarQuery, ProgressBarQueryVariables>;
export type ProgressBarQueryVariables = Types.Exact<{
  userId?: Types.InputMaybe<Types.Scalars['ID']>;
}>;


export type ProgressBarQuery = { __typename?: 'Query', students?: { __typename?: 'StudentEntityResponseCollection', data: Array<{ __typename?: 'StudentEntity', attributes?: { __typename?: 'Student', start_date?: any | null, end_date?: any | null } | null }> } | null };
