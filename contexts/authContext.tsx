// ** React Imports
import { destroyCookie, setCookie } from "nookies";
import {
  createContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { UsersPermissionsMe, UsersPermissionsLoginPayload } from "../cabServer/global/__generated__/types";


type User = UsersPermissionsMe | null;

export type AuthContextValue = {
  user: User;
  onLoginSucces: (login: UsersPermissionsLoginPayload, rememberMe: boolean) => void;
  logout: () => void;
};

const initialAuth: AuthContextValue = {
  user: null,
  onLoginSucces: () => {
    throw new Error("onLoginSucces not implemented.");
  },
  logout: () => {
    throw new Error("logout not implemented.");
  },
};

// ** Create Context
export const AuthContext = createContext<AuthContextValue>(initialAuth);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // ** State
  const [user, setUser] = useState<User>(initialAuth.user);

  useEffect(() => {
    getUser()
  }, [])


  const setSession = async (jwt: string) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ jwt }),
    };
    await fetch("/api/login", options);
  };

  const getUser = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch("/api/user", options);
    const data = await res.json();
    const user: User = data.user
    if (user) {
      setUser(user);
    }
  };

  const onLoginSucces = async (userPayload: UsersPermissionsLoginPayload, rememberMe: boolean) => {
    const { jwt, user } = userPayload
    setUser(user);
    jwt &&
      setCookie(
        null,
        "token",
        jwt
        , {
          // maxAge: 30 * 24 * 60 * 60,
          path: '/',
        }
      )
  }
  const logout = () => {
    setUser(null)
    destroyCookie(null, "token", {
      path: '/',
    })
  }
  return <AuthContext.Provider value={{ user, onLoginSucces, logout }}>{children}</AuthContext.Provider>
}

