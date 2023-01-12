import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import LandingPage from 'src/pages/index';

describe('LandingPage', () => {
  it('renders the page header', () => {
    render(<LandingPage />);
    expect(screen.getByText('CODAC')).toBeInTheDocument();
  });

  it('set loading state when click on start button', async () => {
    render(<LandingPage />);
    const button = screen.getByText('Start');
    fireEvent.click(button);
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });
});
