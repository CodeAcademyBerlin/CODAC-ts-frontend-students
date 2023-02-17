import { getByText, render, screen } from '@testing-library/react';
import { CodingChallengeEntity } from 'cabServer/global/__generated__/types';

import ChallengeCard from '../../components/coding-challenges-page/ChallengeCard';

// Use CodingChallengeEntity to make sure we build the mock data in the correct format

jest.mock('next/router', () => require('next-router-mock'));
// This is needed for mocking 'next/link':
jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('Codingchallenge card content', () => {
  test('renders content', () => {
    const challenge: CodingChallengeEntity = {
      attributes: {
        title: 'test',
        challenge: 'test body',
      },
    };

    render(<ChallengeCard challenge={challenge} />);

    const challengeCardElement = screen.getByText(/see challenge/i, {
      selector: 'button',
    });

    expect(challengeCardElement).toBeInTheDocument();

    const title = screen.getByText(challenge?.attributes?.title!);
    const challengeElement = screen.getByText(
      challenge?.attributes?.challenge!,
    );

    expect(title).toHaveTextContent(challenge?.attributes?.title!);
    expect(challengeElement).toHaveTextContent(
      challenge?.attributes?.challenge!,
    );
  });
  test.todo('Check that contributor is rendered');
});
