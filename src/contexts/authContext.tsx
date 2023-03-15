// ** React Imports
import {
  Achievement,
  UsersPermissionsLoginPayload,
  UsersPermissionsMe,
} from 'cabServer/global/__generated__/types';
import { destroyCookie, setCookie } from 'nookies';
import { createContext, ReactNode, useEffect, useState } from 'react';

type User = UsersPermissionsMe | null;

export type AuthContextValue = {
  user: User;
  onLoginSucces: (
    login: UsersPermissionsLoginPayload,
    rememberMe: boolean,
  ) => void;
  logout: () => void;
};

const initialAuth: AuthContextValue = {
  user: null,
  onLoginSucces: () => {
    throw new Error('onLoginSucces not implemented.');
  },
  logout: () => {
    throw new Error('logout not implemented.');
  },
};

// ** Create Context
export const AuthContext = createContext<AuthContextValue>(initialAuth);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // ** State
  const [user, setUser] = useState<User>(initialAuth.user);

  useEffect(() => {
    getUser();
  }, []);

  // useEffect(() => {
  //   user && getAchievements();
  // }, [user]);

  const setSession = async (jwt: string) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ jwt }),
    };
    await fetch('/api/login', options);
  };

  const getUser = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await fetch('/api/user', options);
    const data = await res.json();
    const user: User = data.user;
    console.log('user', user);
    if (user) {
      setUser(user);
      console.log('user', user);
    }
  };

  const getAchievements = async () => {
    const options = {
      body: JSON.stringify({ userid: user?.id }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const res = await fetch('/api/unlockAchievements', options);
    const data = await res.json();
    console.log('data', data);
    const achievements: Achievement = data.unlockAchievements;
    if (achievements) {
      // setAchievements(achievements);
      console.log('achievements', achievements);
    }
  };

  const onLoginSucces = async (
    userPayload: UsersPermissionsLoginPayload,
    rememberMe: boolean,
  ) => {
    const { jwt, user } = userPayload;

    jwt &&
      setCookie(null, 'token', jwt, {
        // maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    getUser();
  };
  const logout = () => {
    setUser(null);
    destroyCookie(null, 'token', {
      path: '/',
    });
  };
  return (
    <AuthContext.Provider value={{ user, onLoginSucces, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
