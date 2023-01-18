import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const MentorsDocument = gql`
  query mentors {
    mentors {
      data {
        attributes {
          user {
            data {
              attributes {
                firstname
                lastname
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
          courses {
            data {
              attributes {
                name
                description
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useMentorsQuery__
 *
 * To run a query within a React component, call `useMentorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMentorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMentorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMentorsQuery(
  baseOptions?: Apollo.QueryHookOptions<MentorsQuery, MentorsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MentorsQuery, MentorsQueryVariables>(
    MentorsDocument,
    options,
  );
}
export function useMentorsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MentorsQuery,
    MentorsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MentorsQuery, MentorsQueryVariables>(
    MentorsDocument,
    options,
  );
}
export type MentorsQueryHookResult = ReturnType<typeof useMentorsQuery>;
export type MentorsLazyQueryHookResult = ReturnType<typeof useMentorsLazyQuery>;
export type MentorsQueryResult = Apollo.QueryResult<
  MentorsQuery,
  MentorsQueryVariables
>;
export type MentorsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type MentorsQuery = {
  __typename?: 'Query';
  mentors?: {
    __typename?: 'MentorEntityResponseCollection';
    data: Array<{
      __typename?: 'MentorEntity';
      attributes?: {
        __typename?: 'Mentor';
        user?: {
          __typename?: 'UsersPermissionsUserEntityResponse';
          data?: {
            __typename?: 'UsersPermissionsUserEntity';
            attributes?: {
              __typename?: 'UsersPermissionsUser';
              firstname: string;
              lastname: string;
              avatar?: {
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
        courses?: {
          __typename?: 'CourseRelationResponseCollection';
          data: Array<{
            __typename?: 'CourseEntity';
            attributes?: {
              __typename?: 'Course';
              name?: string | null;
              description?: string | null;
            } | null;
          }>;
        } | null;
      } | null;
    }>;
  } | null;
};
