import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const GetCohortsDocument = gql`
    query getCohorts {
  cohorts {
    data {
      attributes {
        name
        start_date
        logo {
          data {
            attributes {
              url
              alternativeText
              caption
              previewUrl
            }
          }
        }
        students {
          data {
            id
            attributes {
              start_date
              end_date
              main_course {
                data {
                  attributes {
                    name
                  }
                }
              }
              user {
                data {
                  id
                  attributes {
                    firstname
                    lastname
                    avatar {
                      data {
                        attributes {
                          url
                          alternativeText
                          name
                          caption
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetCohortsQuery__
 *
 * To run a query within a React component, call `useGetCohortsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCohortsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCohortsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCohortsQuery(baseOptions?: Apollo.QueryHookOptions<GetCohortsQuery, GetCohortsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCohortsQuery, GetCohortsQueryVariables>(GetCohortsDocument, options);
      }
export function useGetCohortsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCohortsQuery, GetCohortsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCohortsQuery, GetCohortsQueryVariables>(GetCohortsDocument, options);
        }
export type GetCohortsQueryHookResult = ReturnType<typeof useGetCohortsQuery>;
export type GetCohortsLazyQueryHookResult = ReturnType<typeof useGetCohortsLazyQuery>;
export type GetCohortsQueryResult = Apollo.QueryResult<GetCohortsQuery, GetCohortsQueryVariables>;
export const StudentCohortDocument = gql`
    query studentCohort($userId: ID) {
  students(filters: {user: {id: {eq: $userId}}}) {
    data {
      id
      attributes {
        cohort {
          data {
            attributes {
              name
              start_date
              students {
                data {
                  attributes {
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
      }
    }
  }
}
    `;

/**
 * __useStudentCohortQuery__
 *
 * To run a query within a React component, call `useStudentCohortQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentCohortQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentCohortQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useStudentCohortQuery(baseOptions?: Apollo.QueryHookOptions<StudentCohortQuery, StudentCohortQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StudentCohortQuery, StudentCohortQueryVariables>(StudentCohortDocument, options);
      }
export function useStudentCohortLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StudentCohortQuery, StudentCohortQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StudentCohortQuery, StudentCohortQueryVariables>(StudentCohortDocument, options);
        }
export type StudentCohortQueryHookResult = ReturnType<typeof useStudentCohortQuery>;
export type StudentCohortLazyQueryHookResult = ReturnType<typeof useStudentCohortLazyQuery>;
export type StudentCohortQueryResult = Apollo.QueryResult<StudentCohortQuery, StudentCohortQueryVariables>;
export type GetCohortsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCohortsQuery = { __typename?: 'Query', cohorts?: { __typename?: 'CohortEntityResponseCollection', data: Array<{ __typename?: 'CohortEntity', attributes?: { __typename?: 'Cohort', name?: string | null, start_date?: any | null, logo?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, caption?: string | null, previewUrl?: string | null } | null } | null } | null, students?: { __typename?: 'StudentRelationResponseCollection', data: Array<{ __typename?: 'StudentEntity', id?: string | null, attributes?: { __typename?: 'Student', start_date?: any | null, end_date?: any | null, main_course?: { __typename?: 'CourseEntityResponse', data?: { __typename?: 'CourseEntity', attributes?: { __typename?: 'Course', name?: string | null } | null } | null } | null, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', firstname?: string | null, lastname?: string | null, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, name: string, caption?: string | null } | null } | null } | null } | null } | null } | null } | null }> } | null } | null }> } | null };

export type StudentCohortQueryVariables = Types.Exact<{
  userId?: Types.InputMaybe<Types.Scalars['ID']>;
}>;


export type StudentCohortQuery = { __typename?: 'Query', students?: { __typename?: 'StudentEntityResponseCollection', data: Array<{ __typename?: 'StudentEntity', id?: string | null, attributes?: { __typename?: 'Student', cohort?: { __typename?: 'CohortEntityResponse', data?: { __typename?: 'CohortEntity', attributes?: { __typename?: 'Cohort', name?: string | null, start_date?: any | null, students?: { __typename?: 'StudentRelationResponseCollection', data: Array<{ __typename?: 'StudentEntity', attributes?: { __typename?: 'Student', main_course?: { __typename?: 'CourseEntityResponse', data?: { __typename?: 'CourseEntity', attributes?: { __typename?: 'Course', name?: string | null } | null } | null } | null } | null }> } | null } | null } | null } | null } | null }> } | null };
