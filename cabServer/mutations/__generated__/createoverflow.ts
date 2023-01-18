import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const CreateCodacOverflowDocument = gql`
    mutation createCodacOverflow($slug: String!, $title: String!, $description: String!, $data: Date!, $author: ID!, $course: String!, $publishedAt: DateTime!) {
  createCodacOverflow(
    data: {slug: $slug, title: $title, description: $description, data: $data, author: $author, course: $course, publishedAt: $publishedAt}
  ) {
    data {
      id
      attributes {
        slug
        title
        description
        data
        author {
          data {
            id
            attributes {
              student {
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
export type CreateCodacOverflowMutationFn = Apollo.MutationFunction<CreateCodacOverflowMutation, CreateCodacOverflowMutationVariables>;

/**
 * __useCreateCodacOverflowMutation__
 *
 * To run a mutation, you first call `useCreateCodacOverflowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCodacOverflowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCodacOverflowMutation, { data, loading, error }] = useCreateCodacOverflowMutation({
 *   variables: {
 *      slug: // value for 'slug'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      data: // value for 'data'
 *      author: // value for 'author'
 *      course: // value for 'course'
 *      publishedAt: // value for 'publishedAt'
 *   },
 * });
 */
export function useCreateCodacOverflowMutation(baseOptions?: Apollo.MutationHookOptions<CreateCodacOverflowMutation, CreateCodacOverflowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCodacOverflowMutation, CreateCodacOverflowMutationVariables>(CreateCodacOverflowDocument, options);
      }
export type CreateCodacOverflowMutationHookResult = ReturnType<typeof useCreateCodacOverflowMutation>;
export type CreateCodacOverflowMutationResult = Apollo.MutationResult<CreateCodacOverflowMutation>;
export type CreateCodacOverflowMutationOptions = Apollo.BaseMutationOptions<CreateCodacOverflowMutation, CreateCodacOverflowMutationVariables>;
export type CreateCodacOverflowMutationVariables = Types.Exact<{
  slug: Types.Scalars['String'];
  title: Types.Scalars['String'];
  description: Types.Scalars['String'];
  data: Types.Scalars['Date'];
  author: Types.Scalars['ID'];
  course: Types.Scalars['String'];
  publishedAt: Types.Scalars['DateTime'];
}>;


export type CreateCodacOverflowMutation = { __typename?: 'Mutation', createCodacOverflow?: { __typename?: 'CodacOverflowEntityResponse', data?: { __typename?: 'CodacOverflowEntity', id?: string | null, attributes?: { __typename?: 'CodacOverflow', slug?: string | null, title?: string | null, description?: string | null, data?: any | null, course?: string | null, createdAt?: any | null, updatedAt?: any | null, publishedAt?: any | null, author?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', student?: { __typename?: 'StudentEntityResponse', data?: { __typename?: 'StudentEntity', id?: string | null, attributes?: { __typename?: 'Student', firstname?: string | null, lastname?: string | null, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null, width?: number | null, height?: number | null, hash: string, mime: string, size: number, previewUrl?: string | null, provider: string, url: string } | null } | null } | null } | null } | null } | null } | null } | null } | null } | null } | null } | null };
