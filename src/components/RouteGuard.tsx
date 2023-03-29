import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useAuth } from 'src/hooks/useAuth';

export { RouteGuard };

function RouteGuard({ children }: { children: any }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const { user } = useAuth();
  console.log('user', user);
  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.asPath);

    // on route change start - hide page content by setting authorized to false
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);

    // on route change complete - run auth check
    router.events.on('routeChangeComplete', authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  function authCheck(url: string) {
    // redirect to login page if accessing a private page and not logged in
    const publicPaths = [
      '/login',
      '/register',
      '/forgot-password',
      '/',
      '/404',
      '/500',
    ];
    const path = url.split('?')[0];

    if (!user && !publicPaths.includes(path)) {
      setAuthorized(false);
      console.log('path', path);
      router.push('/login');

      // router.push({
      //   pathname: '/login',
      //   // query: { returnUrl: router.asPath },
      // });
    } else {
      setAuthorized(true);
      if (path === '/login') {
        router.push('/lms/welcome');
      }
    }
  }

  return authorized && children;
}
