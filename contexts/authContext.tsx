// ** React Imports
import { setCookie } from "nookies";
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { UsersPermissionsMe, UsersPermissionsLoginPayload } from "../graphql/global/ __generated__/types";


type User = UsersPermissionsMe | null;

export type AuthContextValue = {
  user: User;
  onLoginSucces: (login: UsersPermissionsLoginPayload) => void;
};

const initialAuth: AuthContextValue = {
  user: null,
  onLoginSucces: () => {
    throw new Error("onLoginSucces not implemented.");
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
    const { user } = await res.json();
    if (user) {
      setUser(user);
    }
  };

  const onLoginSucces = async ({ jwt, user }: UsersPermissionsLoginPayload) => {
    console.log("login", user);
    setUser(user);
    jwt &&
      setCookie(
        null,
        "token",
        jwt
        // , {
        // maxAge: 30 * 24 * 60 * 60,
        // path: '/',
        // }
      )
  }
  return <AuthContext.Provider value={{ user, onLoginSucces }}>{children}</AuthContext.Provider>
}

