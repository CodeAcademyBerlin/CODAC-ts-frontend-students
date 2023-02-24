import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const FilterStudentByUserIdDocument = gql`
    query filterStudentByUserId($userId: ID) {
  students(filters: {user: {id: {eq: $userId}}}) {
    data {
      attributes {
        achievements {
          unlocked
          unlockedOn
          achievement {
            data {
              attributes {
                name
                course_date
                points
                badge {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
        user {
          data {
            id
            attributes {
              firstname
              lastname
              email
              avatar {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
        github
        linkedin
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
export const AllStudentsDocument = gql`
    query allStudents {
  students {
    data {
      attributes {
        achievements {
          unlocked
          unlockedOn
          achievement {
            data {
              attributes {
                name
                course_date
                points
                badge {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
        user {
          data {
            id
            attributes {
              firstname
              lastname
              email
              avatar {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
        github
        linkedin
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
 * __useAllStudentsQuery__
 *
 * To run a query within a React component, call `useAllStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllStudentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllStudentsQuery(baseOptions?: Apollo.QueryHookOptions<AllStudentsQuery, AllStudentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllStudentsQuery, AllStudentsQueryVariables>(AllStudentsDocument, options);
      }
export function useAllStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllStudentsQuery, AllStudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllStudentsQuery, AllStudentsQueryVariables>(AllStudentsDocument, options);
        }
export type AllStudentsQueryHookResult = ReturnType<typeof useAllStudentsQuery>;
export type AllStudentsLazyQueryHookResult = ReturnType<typeof useAllStudentsLazyQuery>;
export type AllStudentsQueryResult = Apollo.QueryResult<AllStudentsQuery, AllStudentsQueryVariables>;
export type FilterStudentByUserIdQueryVariables = Types.Exact<{
  userId?: Types.InputMaybe<Types.Scalars['ID']>;
}>;


export type FilterStudentByUserIdQuery = { __typename?: 'Query', students?: { __typename?: 'StudentEntityResponseCollection', data: Array<{ __typename?: 'StudentEntity', attributes?: { __typename?: 'Student', github?: string | null, linkedin?: string | null, start_date?: any | null, end_date?: any | null, achievements?: Array<{ __typename?: 'ComponentAchievementAchievement', unlocked?: boolean | null, unlockedOn?: any | null, achievement?: { __typename?: 'AchievementEntityResponse', data?: { __typename?: 'AchievementEntity', attributes?: { __typename?: 'Achievement', name?: string | null, course_date?: number | null, points?: number | null, badge?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null } | null } | null } | null> | null, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', firstname?: string | null, lastname?: string | null, email: string, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null } | null } | null, cohort?: { __typename?: 'CohortEntityResponse', data?: { __typename?: 'CohortEntity', attributes?: { __typename?: 'Cohort', name?: string | null, start_date?: any | null, students?: { __typename?: 'StudentRelationResponseCollection', data: Array<{ __typename?: 'StudentEntity', attributes?: { __typename?: 'Student', main_course?: { __typename?: 'CourseEntityResponse', data?: { __typename?: 'CourseEntity', attributes?: { __typename?: 'Course', name?: string | null } | null } | null } | null } | null }> } | null } | null } | null } | null, main_course?: { __typename?: 'CourseEntityResponse', data?: { __typename?: 'CourseEntity', attributes?: { __typename?: 'Course', name?: string | null } | null } | null } | null } | null }> } | null };

export type AllStudentsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllStudentsQuery = { __typename?: 'Query', students?: { __typename?: 'StudentEntityResponseCollection', data: Array<{ __typename?: 'StudentEntity', attributes?: { __typename?: 'Student', github?: string | null, linkedin?: string | null, start_date?: any | null, end_date?: any | null, achievements?: Array<{ __typename?: 'ComponentAchievementAchievement', unlocked?: boolean | null, unlockedOn?: any | null, achievement?: { __typename?: 'AchievementEntityResponse', data?: { __typename?: 'AchievementEntity', attributes?: { __typename?: 'Achievement', name?: string | null, course_date?: number | null, points?: number | null, badge?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null } | null } | null } | null> | null, user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', firstname?: string | null, lastname?: string | null, email: string, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null } | null } | null, cohort?: { __typename?: 'CohortEntityResponse', data?: { __typename?: 'CohortEntity', attributes?: { __typename?: 'Cohort', name?: string | null, start_date?: any | null, students?: { __typename?: 'StudentRelationResponseCollection', data: Array<{ __typename?: 'StudentEntity', attributes?: { __typename?: 'Student', main_course?: { __typename?: 'CourseEntityResponse', data?: { __typename?: 'CourseEntity', attributes?: { __typename?: 'Course', name?: string | null } | null } | null } | null } | null }> } | null } | null } | null } | null, main_course?: { __typename?: 'CourseEntityResponse', data?: { __typename?: 'CourseEntity', attributes?: { __typename?: 'Course', name?: string | null } | null } | null } | null } | null }> } | null };
