import { useProgressBarQuery } from 'cabServer/queries/__generated__/dashboard';
import React, { Suspense } from 'react';
import { useAuth } from 'src/hooks/useAuth';

import ProgressBar from './ProgressBar';

export default function ProgressBarSuspense() {
  const { user } = useAuth();
  const { data, loading, error } = useProgressBarQuery({
    variables: {
      userId: user?.id,
    },
  });
  const student = data?.students?.data[0]?.attributes;
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        {student && <ProgressBar student={student} />}
      </Suspense>
    </div>
  );
}
