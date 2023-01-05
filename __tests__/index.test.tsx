import LandingPage from 'src/pages/index'
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'


describe('LandingPage', () => {
  it('renders the page header', () => {
    const { getByText } = render(<LandingPage />);
    expect(getByText('CODAC')).toBeInTheDocument();
  });


  it('set loading state when click on start button', async () => {
    const { getByText } = render(<LandingPage />);
    const button = getByText('Start');
    fireEvent.click(button);
    expect(getByText('Loading')).toBeInTheDocument();
  });
});
