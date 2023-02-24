import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

import * as Types from '../../global/__generated__/types';
const defaultOptions = {} as const;

export const filterMentorByUserIdDocument = gql`
  query filterMentorByUserId($userId: ID) {
    mentors(filters: { user: { id: { eq: $userId } } }) {
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
 * __usefilterMentorByUserId__
 *
 * To run a query within a React component, call `usefilterMentorByUserId` and pass it any options that fit your needs.
 * When your component renders, `usefilterMentorByUserId` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usefilterMentorByUserId({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFilterMentorByUserId(
  baseOptions?: Apollo.QueryHookOptions<
    filterMentorByUserId,
    filterMentorByUserIdVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<filterMentorByUserId, filterMentorByUserIdVariables>(
    filterMentorByUserIdDocument,
    options,
  );
}
export function useFilterMentorByUserIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    filterMentorByUserId,
    filterMentorByUserIdVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    filterMentorByUserId,
    filterMentorByUserIdVariables
  >(filterMentorByUserIdDocument, options);
}
export type filterMentorByUserIdHookResult = ReturnType<
  typeof useFilterMentorByUserId
>;
export type filterMentorByUserIdLazyQueryHookResult = ReturnType<
  typeof useFilterMentorByUserIdLazyQuery
>;
export type filterMentorByUserIdResult = Apollo.QueryResult<
  filterMentorByUserId,
  filterMentorByUserIdVariables
>;
export type filterMentorByUserIdVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['ID']>;
}>;

export type filterMentorByUserId = {
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
              firstname?: string | null;
              lastname?: string | null;
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
