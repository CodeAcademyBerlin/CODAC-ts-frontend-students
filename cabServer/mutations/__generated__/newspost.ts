import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

import * as Types from '../../global/__generated__/types';
const defaultOptions = {} as const;

export const CreateNewsPostDocument = gql`
  mutation createNewsPost(
    $title: String!
    $post: String!
    $author: ID!
    $tags: ENUM_NEWSPOST_TAGS!
    $image: ID!
    $publishedAt: DateTime!
  ) {
    createNewsPost(
      data: {
        title: $title
        post: $post
        image: $image
        author: $author
        tags: $tags
        publishedAt: $publishedAt
      }
    ) {
      data {
        id
        attributes {
          title
          post
          author {
            data {
              id
              attributes {
                username
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
          tags
          publishedAt
          image {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
export type CreateNewsPostMutationFn = Apollo.MutationFunction<
  CreateNewsPostMutation,
  CreateNewsPostMutationVariables
>;

/**
 * __useCreateNewsPostMutation__
 *
 * To run a mutation, you first call `useCreateNewsPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateNewsPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createNewsPostMutation, { data, loading, error }] = useCreateNewsPostMutation({
 *   variables: {
 *      title: // value for 'title'
 *      post: // value for 'post'
 *      author: // value for 'author'
 *      tags: // value for 'tags'
 *      image: // value for 'image'
 *      publishedAt: // value for 'publishedAt'
 *   },
 * });
 */
export function useCreateNewsPostMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateNewsPostMutation,
    CreateNewsPostMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateNewsPostMutation,
    CreateNewsPostMutationVariables
  >(CreateNewsPostDocument, options);
}
export type CreateNewsPostMutationHookResult = ReturnType<
  typeof useCreateNewsPostMutation
>;
export type CreateNewsPostMutationResult =
  Apollo.MutationResult<CreateNewsPostMutation>;
export type CreateNewsPostMutationOptions = Apollo.BaseMutationOptions<
  CreateNewsPostMutation,
  CreateNewsPostMutationVariables
>;
export type CreateNewsPostMutationVariables = Types.Exact<{
  title: Types.Scalars['String'];
  post: Types.Scalars['String'];
  author: Types.Scalars['ID'];
  tags: Types.Enum_Newspost_Tags;
  image: Types.Scalars['ID'];
  publishedAt: Types.Scalars['DateTime'];
}>;

export type CreateNewsPostMutation = {
  __typename?: 'Mutation';
  createNewsPost?: {
    __typename?: 'NewsPostEntityResponse';
    data?: {
      __typename?: 'NewsPostEntity';
      id?: string | null;
      attributes?: {
        __typename?: 'NewsPost';
        title?: string | null;
        post?: string | null;
        tags?: Types.Enum_Newspost_Tags | null;
        publishedAt?: any | null;
        author?: {
          __typename?: 'UsersPermissionsUserEntityResponse';
          data?: {
            __typename?: 'UsersPermissionsUserEntity';
            id?: string | null;
            attributes?: {
              __typename?: 'UsersPermissionsUser';
              username: string;
              avatar?: {
                __typename?: 'UploadFileEntityResponse';
                data?: {
                  __typename?: 'UploadFileEntity';
                  id?: string | null;
                  attributes?: {
                    __typename?: 'UploadFile';
                    name: string;
                    alternativeText?: string | null;
                    width?: number | null;
                    height?: number | null;
                    hash: string;
                    mime: string;
                    size: number;
                    previewUrl?: string | null;
                    provider: string;
                    url: string;
                  } | null;
                } | null;
              } | null;
            } | null;
          } | null;
        } | null;
        image?: {
          __typename?: 'UploadFileEntityResponse';
          data?: {
            __typename?: 'UploadFileEntity';
            id?: string | null;
            attributes?: { __typename?: 'UploadFile'; url: string } | null;
          } | null;
        } | null;
      } | null;
    } | null;
  } | null;
};
