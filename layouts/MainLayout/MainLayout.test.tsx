import { render, screen } from '@testing-library/react';

import getLayout, { MainLayout } from './MainLayout';

describe('CommonLayout', () => {
  test.each([
    getLayout(<p>children</p>, false),
    <MainLayout loading={false} key="common">
      <p>children</p>
    </MainLayout>,
  ])('should render properly', (comp) => {
    render(comp);

    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveTextContent('Powered by');

    const logo = screen.getByAltText('Vercel Logo');
    expect(logo).toBeInTheDocument();

    const children = screen.getByText('children');
    expect(children).toBeInTheDocument();
  });
});
