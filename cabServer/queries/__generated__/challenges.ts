import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const GetChallengesDocument = gql`
    query getChallenges {
  codingChallenges {
    data {
      id
      attributes {
        title
      }
    }
  }
}
    `;

/**
 * __useGetChallengesQuery__
 *
 * To run a query within a React component, call `useGetChallengesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChallengesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChallengesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetChallengesQuery(baseOptions?: Apollo.QueryHookOptions<GetChallengesQuery, GetChallengesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChallengesQuery, GetChallengesQueryVariables>(GetChallengesDocument, options);
      }
export function useGetChallengesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChallengesQuery, GetChallengesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChallengesQuery, GetChallengesQueryVariables>(GetChallengesDocument, options);
        }
export type GetChallengesQueryHookResult = ReturnType<typeof useGetChallengesQuery>;
export type GetChallengesLazyQueryHookResult = ReturnType<typeof useGetChallengesLazyQuery>;
export type GetChallengesQueryResult = Apollo.QueryResult<GetChallengesQuery, GetChallengesQueryVariables>;
export const GetChallengesExtendedDocument = gql`
    query getChallengesExtended {
  codingChallenges(pagination: {pageSize: 100}) {
    data {
      id
      attributes {
        title
        challenge
        difficulty
        tags
        comments {
          message
        }
        author {
          data {
            id
            attributes {
              username
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetChallengesExtendedQuery__
 *
 * To run a query within a React component, call `useGetChallengesExtendedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChallengesExtendedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChallengesExtendedQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetChallengesExtendedQuery(baseOptions?: Apollo.QueryHookOptions<GetChallengesExtendedQuery, GetChallengesExtendedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChallengesExtendedQuery, GetChallengesExtendedQueryVariables>(GetChallengesExtendedDocument, options);
      }
export function useGetChallengesExtendedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChallengesExtendedQuery, GetChallengesExtendedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChallengesExtendedQuery, GetChallengesExtendedQueryVariables>(GetChallengesExtendedDocument, options);
        }
export type GetChallengesExtendedQueryHookResult = ReturnType<typeof useGetChallengesExtendedQuery>;
export type GetChallengesExtendedLazyQueryHookResult = ReturnType<typeof useGetChallengesExtendedLazyQuery>;
export type GetChallengesExtendedQueryResult = Apollo.QueryResult<GetChallengesExtendedQuery, GetChallengesExtendedQueryVariables>;
export const GetChallengeByIdDocument = gql`
    query getChallengeById($id: ID) {
  codingChallenge(id: $id) {
    data {
      id
      attributes {
        title
        challenge
        difficulty
        tags
        comments {
          message
        }
        author {
          data {
            id
            attributes {
              username
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetChallengeByIdQuery__
 *
 * To run a query within a React component, call `useGetChallengeByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChallengeByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChallengeByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetChallengeByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetChallengeByIdQuery, GetChallengeByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChallengeByIdQuery, GetChallengeByIdQueryVariables>(GetChallengeByIdDocument, options);
      }
export function useGetChallengeByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChallengeByIdQuery, GetChallengeByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChallengeByIdQuery, GetChallengeByIdQueryVariables>(GetChallengeByIdDocument, options);
        }
export type GetChallengeByIdQueryHookResult = ReturnType<typeof useGetChallengeByIdQuery>;
export type GetChallengeByIdLazyQueryHookResult = ReturnType<typeof useGetChallengeByIdLazyQuery>;
export type GetChallengeByIdQueryResult = Apollo.QueryResult<GetChallengeByIdQuery, GetChallengeByIdQueryVariables>;
export type GetChallengesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetChallengesQuery = { __typename?: 'Query', codingChallenges?: { __typename?: 'CodingChallengeEntityResponseCollection', data: Array<{ __typename?: 'CodingChallengeEntity', id?: string | null, attributes?: { __typename?: 'CodingChallenge', title?: string | null } | null }> } | null };

export type GetChallengesExtendedQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetChallengesExtendedQuery = { __typename?: 'Query', codingChallenges?: { __typename?: 'CodingChallengeEntityResponseCollection', data: Array<{ __typename?: 'CodingChallengeEntity', id?: string | null, attributes?: { __typename?: 'CodingChallenge', title?: string | null, challenge?: string | null, difficulty?: number | null, tags?: Types.Enum_Codingchallenge_Tags | null, comments?: Array<{ __typename?: 'ComponentCommentsComments', message?: string | null } | null> | null, author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null } | null } | null }> } | null };

export type GetChallengeByIdQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['ID']>;
}>;


export type GetChallengeByIdQuery = { __typename?: 'Query', codingChallenge?: { __typename?: 'CodingChallengeEntityResponse', data?: { __typename?: 'CodingChallengeEntity', id?: string | null, attributes?: { __typename?: 'CodingChallenge', title?: string | null, challenge?: string | null, difficulty?: number | null, tags?: Types.Enum_Codingchallenge_Tags | null, comments?: Array<{ __typename?: 'ComponentCommentsComments', message?: string | null } | null> | null, author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string } | null } | null } | null } | null } | null } | null };
