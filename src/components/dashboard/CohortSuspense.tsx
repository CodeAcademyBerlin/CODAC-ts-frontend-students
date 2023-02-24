import { useStudentCohortQuery } from 'cabServer/queries/__generated__/cohorts';
import React, { Suspense } from 'react';
import { useAuth } from 'src/hooks/useAuth';

import CohortCard from '../cohort/CohortCard';

export default function CohortSuspense() {
  const { user } = useAuth();
  const { data, loading, error } = useStudentCohortQuery({
    variables: {
      userId: user?.id,
    },
  });
  const student = data?.students?.data[0]?.attributes;
  const cohort = (student && student?.cohort) || null;
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        {cohort?.data?.attributes && (
          <CohortCard cohort={cohort.data?.attributes} />
        )}
      </Suspense>
    </div>
  );
}
