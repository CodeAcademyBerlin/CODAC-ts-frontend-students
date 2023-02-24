import { useStudentAchievementsQuery } from 'cabServer/queries/__generated__/achievements';
import React, { Suspense } from 'react';
import { useAuth } from 'src/hooks/useAuth';

import AchievementsComponent from '../achievements-page/AchievementsComponent';
import ProgressBar from './ProgressBar';

export default function AchievementsSuspense() {
  const { user } = useAuth();
  const { data, loading, error } = useStudentAchievementsQuery({
    variables: {
      userId: user?.id,
    },
  });
  const student = data?.students?.data[0]?.attributes;
  const achievements = (student && student?.achievements) || null;

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        {achievements && <AchievementsComponent achievements={achievements} />}
      </Suspense>
    </div>
  );
}
