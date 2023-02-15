import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const CodacOverflowByIdDocument = gql`
    query CodacOverflowById($id: ID) {
  codacOverflow(id: $id) {
    data {
      id
      attributes {
        slug
        title
        description
        date
        author {
          data {
            id
            attributes {
              firstname
              lastname
              avatar {
                data {
                  id
                  attributes {
                    name
                    alternativeText
                    width
                    height
                    hash
                    mime
                    size
                    previewUrl
                    provider
                    url
                  }
                }
              }
            }
          }
        }
        comments {
          id
          message
          timestamp
          author {
            data {
              id
              attributes {
                firstname
                lastname
                avatar {
                  data {
                    id
                    attributes {
                      name
                      alternativeText
                      width
                      height
                      hash
                      mime
                      size
                      previewUrl
                      provider
                      url
                    }
                  }
                }
              }
            }
          }
        }
        course
        createdAt
        updatedAt
        publishedAt
      }
    }
  }
}
    `;

/**
 * __useCodacOverflowByIdQuery__
 *
 * To run a query within a React component, call `useCodacOverflowByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCodacOverflowByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCodacOverflowByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCodacOverflowByIdQuery(baseOptions?: Apollo.QueryHookOptions<CodacOverflowByIdQuery, CodacOverflowByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CodacOverflowByIdQuery, CodacOverflowByIdQueryVariables>(CodacOverflowByIdDocument, options);
      }
export function useCodacOverflowByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CodacOverflowByIdQuery, CodacOverflowByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CodacOverflowByIdQuery, CodacOverflowByIdQueryVariables>(CodacOverflowByIdDocument, options);
        }
export type CodacOverflowByIdQueryHookResult = ReturnType<typeof useCodacOverflowByIdQuery>;
export type CodacOverflowByIdLazyQueryHookResult = ReturnType<typeof useCodacOverflowByIdLazyQuery>;
export type CodacOverflowByIdQueryResult = Apollo.QueryResult<CodacOverflowByIdQuery, CodacOverflowByIdQueryVariables>;
export type CodacOverflowByIdQueryVariables = Types.Exact<{
  id?: Types.InputMaybe<Types.Scalars['ID']>;
}>;


export type CodacOverflowByIdQuery = { __typename?: 'Query', codacOverflow?: { __typename?: 'CodacOverflowEntityResponse', data?: { __typename?: 'CodacOverflowEntity', id?: string | null, attributes?: { __typename?: 'CodacOverflow', slug?: string | null, title?: string | null, description?: string | null, date?: any | null, course?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', firstname?: string | null, lastname?: string | null, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, width?: number | null, height?: number | null, hash: string, mime: string, size: number, previewUrl?: string | null, provider: string, url: string } | null } | null } | null } | null } | null } | null, comments?: Array<{ __typename?: 'ComponentCommentsComments', id: string, message?: string | null, timestamp?: any | null, author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', firstname?: string | null, lastname?: string | null, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, width?: number | null, height?: number | null, hash: string, mime: string, size: number, previewUrl?: string | null, provider: string, url: string } | null } | null } | null } | null } | null } | null } | null> | null } | null } | null } | null };
