import { useRouter } from "next/router";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../graphql/queries';
import { UsersPermissionsUser } from "../generated";
// import Cookies from "js-cookie";

const AuthContext = React.createContext(
  {} as {
    user: UsersPermissionsUser | null;
    handlelogin: (email: string, password: string) => Promise<void>;
    // authenticate: (newToken: string) => Promise<void>;
    // logout: () => void;
    // isLoading: boolean;
    // isAuthenticated: boolean;
    // token: string;
  }
);


type Children = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Children) => {
  const [user, setUser] = useState<UsersPermissionsUser | null>(null);
  const [login, { data }] = useMutation(LOGIN_MUTATION)
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = !!user;

  // useEffect(() => {
  //   async function loadUserFromCookies() {
  //     const token = Cookies.get('token')
  //     if (token) {
  //       console.log("Got a token in the cookies, let's see if it is valid")
  //       api.defaults.headers.Authorization = `Bearer ${token}`
  //       const { data: user } = await api.get('users/me')
  //       if (user) setUser(user);
  //     }
  //     setIsLoading(false)
  //   }
  //   loadUserFromCookies()
  // }, [])

  const handlelogin = async (email: string, password: string) => {
    console.log('email', email)

    const res = await login({
      variables: {
        email,
        password
      },
    });
    if (res) {
      console.log(res)
      // Cookies.set('token', token, { expires: 60 })
      // api.defaults.headers.Authorization = `Bearer ${token.token}`
      // const { data: user } = await api.get('users/me')
      // setUser(user)
      // console.log("Got user", user)
    }
  }

  // const logout = (email: any, password: any) => {
  //   Cookies.remove('token')
  //   setUser(null)
  //   delete api.defaults.headers.Authorization
  //   window.location.pathname = '/login'
  // }
  return (
    <AuthContext.Provider value={{ user, handlelogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)
