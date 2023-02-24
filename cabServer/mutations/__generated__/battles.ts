import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const VoteVsBattleDocument = gql`
    mutation voteVsBattle($vsBattleId: ID!, $option: Int!) {
  voteVsBattle(id: $vsBattleId, option: $option) {
    title
    description
    archived
    option_1_voters {
      data {
        id
        attributes {
          email
          username
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
    option_2_voters {
      data {
        id
        attributes {
          email
          username
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
  }
}
    `;
export type VoteVsBattleMutationFn = Apollo.MutationFunction<VoteVsBattleMutation, VoteVsBattleMutationVariables>;

/**
 * __useVoteVsBattleMutation__
 *
 * To run a mutation, you first call `useVoteVsBattleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoteVsBattleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voteVsBattleMutation, { data, loading, error }] = useVoteVsBattleMutation({
 *   variables: {
 *      vsBattleId: // value for 'vsBattleId'
 *      option: // value for 'option'
 *   },
 * });
 */
export function useVoteVsBattleMutation(baseOptions?: Apollo.MutationHookOptions<VoteVsBattleMutation, VoteVsBattleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VoteVsBattleMutation, VoteVsBattleMutationVariables>(VoteVsBattleDocument, options);
      }
export type VoteVsBattleMutationHookResult = ReturnType<typeof useVoteVsBattleMutation>;
export type VoteVsBattleMutationResult = Apollo.MutationResult<VoteVsBattleMutation>;
export type VoteVsBattleMutationOptions = Apollo.BaseMutationOptions<VoteVsBattleMutation, VoteVsBattleMutationVariables>;
export type VoteVsBattleMutationVariables = Types.Exact<{
  vsBattleId: Types.Scalars['ID'];
  option: Types.Scalars['Int'];
}>;


export type VoteVsBattleMutation = { __typename?: 'Mutation', voteVsBattle?: { __typename?: 'VsBattle', title?: string | null, description?: string | null, archived: boolean, option_1_voters?: { __typename?: 'UsersPermissionsUserRelationResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', email: string, username: string, firstname?: string | null, lastname?: string | null, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null, option_2_voters?: { __typename?: 'UsersPermissionsUserRelationResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', email: string, username: string, firstname?: string | null, lastname?: string | null, avatar?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null }> } | null } | null };
