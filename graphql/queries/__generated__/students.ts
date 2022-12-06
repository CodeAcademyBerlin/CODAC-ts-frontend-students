import * as Types from '../../global/ __generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

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
export const GetStudentByIdDocument = gql`
    query getStudentById($studentId: ID) {
  student(id: $studentId) {
    data {
      attributes {
        firstname
        avatar {
          data {
            attributes {
              url
            }
          }
        }
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
 * __useGetStudentByIdQuery__
 *
 * To run a query within a React component, call `useGetStudentByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudentByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudentByIdQuery({
 *   variables: {
 *      studentId: // value for 'studentId'
 *   },
 * });
 */
export function useGetStudentByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetStudentByIdQuery, GetStudentByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStudentByIdQuery, GetStudentByIdQueryVariables>(GetStudentByIdDocument, options);
      }
export function useGetStudentByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStudentByIdQuery, GetStudentByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStudentByIdQuery, GetStudentByIdQueryVariables>(GetStudentByIdDocument, options);
        }
export type GetStudentByIdQueryHookResult = ReturnType<typeof useGetStudentByIdQuery>;
export type GetStudentByIdLazyQueryHookResult = ReturnType<typeof useGetStudentByIdLazyQuery>;
export type GetStudentByIdQueryResult = Apollo.QueryResult<GetStudentByIdQuery, GetStudentByIdQueryVariables>;
export type FilterStudentByUserIdQueryVariables = Types.Exact<{
  userId?: Types.InputMaybe<Types.Scalars['ID']>;
}>;


export type FilterStudentByUserIdQuery = { __typename?: 'Query', students?: { __typename?: 'StudentEntityResponseCollection', data: Array<{ __typename?: 'StudentEntity', attributes?: { __typename?: 'Student', firstname?: string | null, lastname?: string | null, start_date?: any | null, end_date?: any | null, cohort?: { __typename?: 'CohortEntityResponse', data?: { __typename?: 'CohortEntity', attributes?: { __typename?: 'Cohort', name?: string | null, start_date?: any | null, students?: { __typename?: 'StudentRelationResponseCollection', data: Array<{ __typename?: 'StudentEntity', attributes?: { __typename?: 'Student', firstname?: string | null, lastname?: string | null, main_course?: { __typename?: 'CourseEntityResponse', data?: { __typename?: 'CourseEntity', attributes?: { __typename?: 'Course', name?: string | null } | null } | null } | null } | null }> } | null } | null } | null } | null, main_course?: { __typename?: 'CourseEntityResponse', data?: { __typename?: 'CourseEntity', attributes?: { __typename?: 'Course', name?: string | null } | null } | null } | null } | null }> } | null };

export type GetStudentByIdQueryVariables = Types.Exact<{
  studentId?: Types.InputMaybe<Types.Scalars['ID']>;
}>;


export type GetStudentByIdQuery = { __typename?: 'Query', student?: { __typename?: 'StudentEntityResponse', data?: { __typename?: 'StudentEntity', attributes?: { __typename?: 'Student', firstname?: string | null, lastname?: string | null, start_date?: any | null, end_date?: any | null, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null, cohort?: { __typename?: 'CohortEntityResponse', data?: { __typename?: 'CohortEntity', attributes?: { __typename?: 'Cohort', name?: string | null, start_date?: any | null, students?: { __typename?: 'StudentRelationResponseCollection', data: Array<{ __typename?: 'StudentEntity', attributes?: { __typename?: 'Student', firstname?: string | null, lastname?: string | null, main_course?: { __typename?: 'CourseEntityResponse', data?: { __typename?: 'CourseEntity', attributes?: { __typename?: 'Course', name?: string | null } | null } | null } | null } | null }> } | null } | null } | null } | null, main_course?: { __typename?: 'CourseEntityResponse', data?: { __typename?: 'CourseEntity', attributes?: { __typename?: 'Course', name?: string | null } | null } | null } | null } | null } | null } | null };
