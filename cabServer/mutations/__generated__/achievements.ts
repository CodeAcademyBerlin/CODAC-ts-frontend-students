import * as Types from '../../global/__generated__/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const UnlockAchievementsDocument = gql`
    mutation unlockAchievements($studentId: ID!, $achievementIds: [ID!]) {
  unlockAchievements(studentId: $studentId, achievementIds: $achievementIds) {
    success
    message
  }
}
    `;
export type UnlockAchievementsMutationFn = Apollo.MutationFunction<UnlockAchievementsMutation, UnlockAchievementsMutationVariables>;

/**
 * __useUnlockAchievementsMutation__
 *
 * To run a mutation, you first call `useUnlockAchievementsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlockAchievementsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlockAchievementsMutation, { data, loading, error }] = useUnlockAchievementsMutation({
 *   variables: {
 *      studentId: // value for 'studentId'
 *      achievementIds: // value for 'achievementIds'
 *   },
 * });
 */
export function useUnlockAchievementsMutation(baseOptions?: Apollo.MutationHookOptions<UnlockAchievementsMutation, UnlockAchievementsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnlockAchievementsMutation, UnlockAchievementsMutationVariables>(UnlockAchievementsDocument, options);
      }
export type UnlockAchievementsMutationHookResult = ReturnType<typeof useUnlockAchievementsMutation>;
export type UnlockAchievementsMutationResult = Apollo.MutationResult<UnlockAchievementsMutation>;
export type UnlockAchievementsMutationOptions = Apollo.BaseMutationOptions<UnlockAchievementsMutation, UnlockAchievementsMutationVariables>;
export type UnlockAchievementsMutationVariables = Types.Exact<{
  studentId: Types.Scalars['ID'];
  achievementIds?: Types.InputMaybe<Array<Types.Scalars['ID']> | Types.Scalars['ID']>;
}>;


export type UnlockAchievementsMutation = { __typename?: 'Mutation', unlockAchievements?: { __typename?: 'GenericServerResponse', success?: boolean | null, message?: string | null } | null };
