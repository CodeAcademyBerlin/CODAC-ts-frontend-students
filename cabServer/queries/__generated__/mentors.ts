import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const MentorsDocument = gql`
    query mentors {
  mentors {
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
export function useMentorsQuery(baseOptions?: Apollo.QueryHookOptions<MentorsQuery, MentorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MentorsQuery, MentorsQueryVariables>(MentorsDocument, options);
      }
export function useMentorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MentorsQuery, MentorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MentorsQuery, MentorsQueryVariables>(MentorsDocument, options);
        }
export type MentorsQueryHookResult = ReturnType<typeof useMentorsQuery>;
export type MentorsLazyQueryHookResult = ReturnType<typeof useMentorsLazyQuery>;
export type MentorsQueryResult = Apollo.QueryResult<MentorsQuery, MentorsQueryVariables>;
export const FilterMentorByUserIdDocument = gql`
    query filterMentorByUserId($userId: ID) {
  mentors(filters: {user: {id: {eq: $userId}}}) {
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
      }
    }
  }
}
    `;

/**
 * __useFilterMentorByUserIdQuery__
 *
 * To run a query within a React component, call `useFilterMentorByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilterMentorByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilterMentorByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFilterMentorByUserIdQuery(baseOptions?: Apollo.QueryHookOptions<FilterMentorByUserIdQuery, FilterMentorByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FilterMentorByUserIdQuery, FilterMentorByUserIdQueryVariables>(FilterMentorByUserIdDocument, options);
      }
export function useFilterMentorByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FilterMentorByUserIdQuery, FilterMentorByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FilterMentorByUserIdQuery, FilterMentorByUserIdQueryVariables>(FilterMentorByUserIdDocument, options);
        }
export type FilterMentorByUserIdQueryHookResult = ReturnType<typeof useFilterMentorByUserIdQuery>;
export type FilterMentorByUserIdLazyQueryHookResult = ReturnType<typeof useFilterMentorByUserIdLazyQuery>;
export type FilterMentorByUserIdQueryResult = Apollo.QueryResult<FilterMentorByUserIdQuery, FilterMentorByUserIdQueryVariables>;
export type MentorsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type MentorsQuery = { __typename?: 'Query', mentors?: { __typename?: 'MentorEntityResponseCollection', data: Array<{ __typename?: 'MentorEntity', id?: string | null, attributes?: { __typename?: 'Mentor', user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', firstname?: string | null, lastname?: string | null, email: string, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null } | null } | null } | null }> } | null };

export type FilterMentorByUserIdQueryVariables = Types.Exact<{
  userId?: Types.InputMaybe<Types.Scalars['ID']>;
}>;


export type FilterMentorByUserIdQuery = { __typename?: 'Query', mentors?: { __typename?: 'MentorEntityResponseCollection', data: Array<{ __typename?: 'MentorEntity', id?: string | null, attributes?: { __typename?: 'Mentor', user?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', firstname?: string | null, lastname?: string | null, email: string, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null } | null } | null } | null }> } | null };
