import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

import * as Types from '../../global/__generated__/types';
const defaultOptions = {} as const;

export const GetMentorByIdDocument = gql`
  query getMentorByID($id: ID) {
    mentor(id: $id) {
      data {
        id
        attributes {
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
 * __useGetMentorByIdQuery__
 *
 * To run a query within a React component, call `useGetMentorByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMentorByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMentorByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMentorByIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetMentorByIdQuery,
    GetMentorByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetMentorByIdQuery, GetMentorByIdQueryVariables>(
    GetMentorByIdDocument,
    options,
  );
}
export function useGetMentorByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetMentorByIdQuery,
    GetMentorByIdQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetMentorByIdQuery, GetMentorByIdQueryVariables>(
    GetMentorByIdDocument,
    options,
  );
}
export type GetMentorByIdQueryHookResult = ReturnType<
  typeof useGetMentorByIdQuery
>;
export type GetMentorByIdLazyQueryHookResult = ReturnType<
  typeof useGetMentorByIdLazyQuery
>;
export type GetMentorByIdQueryResult = Apollo.QueryResult<
  GetMentorByIdQuery,
  GetMentorByIdQueryVariables
>;
export type GetMentorByIdQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['ID']>;
}>;

export type GetMentorByIdQuery = {
  __typename?: 'Query';
  mentor?: {
    __typename?: 'MentorEntityResponse';
    data?: {
      __typename?: 'MentorEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'Mentor';
        user?: {
          __typename?: 'UsersPermissionsUserEntityResponse';
          data?: {
            __typename?: 'UsersPermissionsUserEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'UsersPermissionsUser';
              firstname: string;
              lastname: string;
              email: string;
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
    } | null;
  } | null;
};
