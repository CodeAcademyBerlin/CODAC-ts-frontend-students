import React from 'react';

// type ChallengeProps = {
//   title: string;
//   challenge: string;
// };

const ChallengeCard = (props) => {
  console.log('props', props.challenge.title);
  return <p>{props.challenge.title} </p>;
};

export default ChallengeCard;
