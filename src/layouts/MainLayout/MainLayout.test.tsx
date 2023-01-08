import { fireEvent, getByText, render, screen } from '@testing-library/react';
import singletonRouter, { useRouter } from 'next/router';
import mockRouter from 'next-router-mock';
import { initialSettings } from 'src/contexts/settingsContext';
import ThemeComponent from 'src/theme/ThemeComponent';

import getLayout, { MainLayout } from './MainLayout';

jest.mock('next/router', () => require('next-router-mock'));
// This is needed for mocking 'next/link':
jest.mock('next/dist/client/router', () => require('next-router-mock'));

describe('test main layout routing', () => {
  // beforeEach(() => {
  //   mockRouter.setCurrentUrl('/dashboard');

  it('should render successfully - base', async () => {
    render(
      <ThemeComponent settings={initialSettings()}>
        <MainLayout loading={false} key="common">
          <p>Testing Layout</p>
        </MainLayout>
      </ThemeComponent>,
    );
    const dashBoardLink = screen.getByRole('link', { name: 'Dashboard' });
    expect(dashBoardLink).toBeInTheDocument();
    expect(dashBoardLink).toHaveAttribute('href', '/dashboard');

    // fireEvent.click(dashBoardLink);
    // expect(singletonRouter).toMatchObject({ asPath: '/dashboard' });

    // const loginButton = screen.getByRole('button', { href: '/login' });
    // expect(loginButton).toBeInTheDocument();
    // fireEvent.click(loginButton);
    // expect(singletonRouter).toMatchObject({ asPath: '/login' });
  });
  // });
});
