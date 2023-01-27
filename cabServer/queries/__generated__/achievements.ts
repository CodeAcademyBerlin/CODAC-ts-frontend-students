import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const GetAchievementsDocument = gql`
  query getAchievements {
    achievements(sort: "id:asc", pagination: { pageSize: 100 }) {
      data {
        id
        attributes {
          badge {
            data {
              attributes {
                url
              }
            }
          }
          name
          description
          points
          type
          course {
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
 * __useGetAchievementsQuery__
 *
 * To run a query within a React component, call `useGetAchievementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAchievementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAchievementsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAchievementsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAchievementsQuery,
    GetAchievementsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAchievementsQuery, GetAchievementsQueryVariables>(
    GetAchievementsDocument,
    options,
  );
}
export function useGetAchievementsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAchievementsQuery,
    GetAchievementsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetAchievementsQuery,
    GetAchievementsQueryVariables
  >(GetAchievementsDocument, options);
}
export type GetAchievementsQueryHookResult = ReturnType<
  typeof useGetAchievementsQuery
>;
export type GetAchievementsLazyQueryHookResult = ReturnType<
  typeof useGetAchievementsLazyQuery
>;
export type GetAchievementsQueryResult = Apollo.QueryResult<
  GetAchievementsQuery,
  GetAchievementsQueryVariables
>;
export const StudentachievementsDocument = gql`
  query studentachievements($userid: ID!) {
    students(filters: { user: { id: { eq: $userid } } }) {
      data {
        id
        attributes {
          start_date
          achievements {
            unlocked
            unlockedOn
            achievement {
              data {
                id
                attributes {
                  name
                  course_date
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
        }
      }
    }
  }
`;

/**
 * __useStudentachievementsQuery__
 *
 * To run a query within a React component, call `useStudentachievementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentachievementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentachievementsQuery({
 *   variables: {
 *      userid: // value for 'userid'
 *   },
 * });
 */
export function useStudentachievementsQuery(
  baseOptions: Apollo.QueryHookOptions<
    StudentachievementsQuery,
    StudentachievementsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    StudentachievementsQuery,
    StudentachievementsQueryVariables
  >(StudentachievementsDocument, options);
}
export function useStudentachievementsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StudentachievementsQuery,
    StudentachievementsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    StudentachievementsQuery,
    StudentachievementsQueryVariables
  >(StudentachievementsDocument, options);
}
export type StudentachievementsQueryHookResult = ReturnType<
  typeof useStudentachievementsQuery
>;
export type StudentachievementsLazyQueryHookResult = ReturnType<
  typeof useStudentachievementsLazyQuery
>;
export type StudentachievementsQueryResult = Apollo.QueryResult<
  StudentachievementsQuery,
  StudentachievementsQueryVariables
>;
export type GetAchievementsQueryVariables = Types.Exact<{
  [key: string]: never;
}>;

export type GetAchievementsQuery = {
  __typename?: 'Query';
  achievements?: {
    __typename?: 'AchievementEntityResponseCollection';
    data: Array<{
      __typename?: 'AchievementEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Achievement';
        name?: string | null;
        description?: string | null;
        points?: number | null;
        type?: Types.Enum_Achievement_Type | null;
        badge?: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            attributes?: { __typename?: 'UploadFile'; url: string } | null;
          } | null;
        } | null;
        course?: {
          __typename?: 'CourseEntityResponse';
          data?: {
            __typename?: 'CourseEntity';
            attributes?: { __typename?: 'Course'; name?: string | null } | null;
          } | null;
        } | null;
      } | null;
    }>;
  } | null;
};

export type StudentachievementsQueryVariables = Types.Exact<{
  userid: Types.Scalars['ID'];
}>;

export type StudentachievementsQuery = {
  __typename?: 'Query';
  students?: {
    __typename?: 'StudentEntityResponseCollection';
    data: Array<{
      __typename?: 'StudentEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Student';
        start_date?: any | null;
        achievements?: Array<{
          __typename?: 'ComponentAchievementAchievement';
          unlocked?: boolean | null;
          unlockedOn?: any | null;
          achievement?: {
            __typename?: 'AchievementEntityResponse';
            data?: {
              __typename?: 'AchievementEntity';
              id?: string | null;
              attributes?: {
                __typename?: 'Achievement';
                name?: string | null;
                course_date?: number | null;
                badge?: {
                  __typename?: 'UploadFileEntityResponse';
                  data?: {
                    __typename?: 'UploadFileEntity';
                    attributes?: {
                      __typename?: 'UploadFile';
                      url: string;
                    } | null;
                  } | null;
                } | null;
              } | null;
            } | null;
          } | null;
        } | null> | null;
      } | null;
    }>;
  } | null;
};
