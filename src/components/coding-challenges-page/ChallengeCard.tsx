import { CodingChallengeEntity } from 'cabServer/global/__generated__/types';
import React from 'react';

// describes the object that it will recive

type ChallengeProps = {
  challenge: CodingChallengeEntity;
  // title: string
};

// isolate what you recive

const ChallengeCard = (props: ChallengeProps) => {
  console.log('props', props?.challenge);
  return <p>{props?.challenge?.attributes?.title} </p>;
};

export default ChallengeCard;
