import * as Types from '../../global/ __generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const GetStudentsDocument = gql`
    query getStudents {
  students {
    data {
      attributes {
        email
      }
    }
  }
}
    `;

/**
 * __useGetStudentsQuery__
 *
 * To run a query within a React component, call `useGetStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStudentsQuery(baseOptions?: Apollo.QueryHookOptions<GetStudentsQuery, GetStudentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStudentsQuery, GetStudentsQueryVariables>(GetStudentsDocument, options);
      }
export function useGetStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStudentsQuery, GetStudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStudentsQuery, GetStudentsQueryVariables>(GetStudentsDocument, options);
        }
export type GetStudentsQueryHookResult = ReturnType<typeof useGetStudentsQuery>;
export type GetStudentsLazyQueryHookResult = ReturnType<typeof useGetStudentsLazyQuery>;
export type GetStudentsQueryResult = Apollo.QueryResult<GetStudentsQuery, GetStudentsQueryVariables>;
export const FilterStudentByUserIdDocument = gql`
    query filterStudentByUserId($userId: ID) {
  students(filters: {user: {id: {eq: $userId}}}) {
    data {
      attributes {
        firstname
        lastname
        start_date
        end_date
        cohort {
          data {
            attributes {
              name
              start_date
              students {
                data {
                  attributes {
                    firstname
                    lastname
                    main_course {
                      data {
                        attributes {
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        main_course {
          data {
            attributes {
              name
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useFilterStudentByUserIdQuery__
 *
 * To run a query within a React component, call `useFilterStudentByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilterStudentByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilterStudentByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFilterStudentByUserIdQuery(baseOptions?: Apollo.QueryHookOptions<FilterStudentByUserIdQuery, FilterStudentByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilterStudentByUserIdQuery, FilterStudentByUserIdQueryVariables>(FilterStudentByUserIdDocument, options);
      }
export function useFilterStudentByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilterStudentByUserIdQuery, FilterStudentByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilterStudentByUserIdQuery, FilterStudentByUserIdQueryVariables>(FilterStudentByUserIdDocument, options);
        }
export type FilterStudentByUserIdQueryHookResult = ReturnType<typeof useFilterStudentByUserIdQuery>;
export type FilterStudentByUserIdLazyQueryHookResult = ReturnType<typeof useFilterStudentByUserIdLazyQuery>;
export type FilterStudentByUserIdQueryResult = Apollo.QueryResult<FilterStudentByUserIdQuery, FilterStudentByUserIdQueryVariables>;
export type GetStudentsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetStudentsQuery = { __typename?: 'Query', students?: { __typename?: 'StudentEntityResponseCollection', data: Array<{ __typename?: 'StudentEntity', attributes?: { __typename?: 'Student', email?: string | null } | null }> } | null };

export type FilterStudentByUserIdQueryVariables = Types.Exact<{
  userId?: Types.InputMaybe<Types.Scalars['ID']>;
}>;


export type FilterStudentByUserIdQuery = { __typename?: 'Query', students?: { __typename?: 'StudentEntityResponseCollection', data: Array<{ __typename?: 'StudentEntity', attributes?: { __typename?: 'Student', firstname?: string | null, lastname?: string | null, start_date?: any | null, end_date?: any | null, cohort?: { __typename?: 'CohortEntityResponse', data?: { __typename?: 'CohortEntity', attributes?: { __typename?: 'Cohort', name?: string | null, start_date?: any | null, students?: { __typename?: 'StudentRelationResponseCollection', data: Array<{ __typename?: 'StudentEntity', attributes?: { __typename?: 'Student', firstname?: string | null, lastname?: string | null, main_course?: { __typename?: 'CourseEntityResponse', data?: { __typename?: 'CourseEntity', attributes?: { __typename?: 'Course', name?: string | null } | null } | null } | null } | null }> } | null } | null } | null } | null, main_course?: { __typename?: 'CourseEntityResponse', data?: { __typename?: 'CourseEntity', attributes?: { __typename?: 'Course', name?: string | null } | null } | null } | null } | null }> } | null };
