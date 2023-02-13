import { getByText, render, screen } from '@testing-library/react';
import { CodingChallengeEntity } from 'cabServer/global/__generated__/types';

import ChallengeCard from '../../components/coding-challenges-page/ChallengeCard';

// use entity to make sure its the right shape

describe('Codingchallenge card content', () => {
  test('renders content', () => {
    const challenge: CodingChallengeEntity = {
      attributes: {
        title: 'test',
        challenge: 'test body',
        // random: 'hi',
      },
    };

    render(<ChallengeCard challenge={challenge} />);
    const challengeCardElement = screen.getByTestId('example');
    expect(challengeCardElement).toBeInTheDocument();
    expect(challengeCardElement).toHaveTextContent('See challenge');

    // other
    const title = screen.getByText(challenge?.attributes?.title!);
    expect(title).toHaveTextContent(challenge?.attributes?.title!);
  });
});
