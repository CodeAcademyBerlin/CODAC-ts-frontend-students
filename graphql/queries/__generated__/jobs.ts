import * as Types from '../../global/ __generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const GetJobsDocument = gql`
    query getJobs($date: DateTime) {
  jobPosts(filters: {updatedAt: {gte: $date}}) {
    data {
      attributes {
        url
        position
        company
        field
        createdAt
        updatedAt
        description
      }
    }
  }
}
    `;

/**
 * __useGetJobsQuery__
 *
 * To run a query within a React component, call `useGetJobsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetJobsQuery({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useGetJobsQuery(baseOptions?: Apollo.QueryHookOptions<GetJobsQuery, GetJobsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetJobsQuery, GetJobsQueryVariables>(GetJobsDocument, options);
      }
export function useGetJobsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetJobsQuery, GetJobsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetJobsQuery, GetJobsQueryVariables>(GetJobsDocument, options);
        }
export type GetJobsQueryHookResult = ReturnType<typeof useGetJobsQuery>;
export type GetJobsLazyQueryHookResult = ReturnType<typeof useGetJobsLazyQuery>;
export type GetJobsQueryResult = Apollo.QueryResult<GetJobsQuery, GetJobsQueryVariables>;
export type GetJobsQueryVariables = Types.Exact<{
  date?: Types.InputMaybe<Types.Scalars['DateTime']>;
}>;


export type GetJobsQuery = { __typename?: 'Query', jobPosts?: { __typename?: 'JobPostEntityResponseCollection', data: Array<{ __typename?: 'JobPostEntity', attributes?: { __typename?: 'JobPost', url?: string | null, position?: string | null, company?: string | null, field?: Types.Enum_Jobpost_Field | null, createdAt?: any | null, updatedAt?: any | null, description?: string | null } | null }> } | null };
