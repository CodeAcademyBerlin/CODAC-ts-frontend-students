// ** React Imports
import { createContext, useState, ReactNode, useContext } from 'react'
import { UsersPermissionsMe } from '../generated';

type User = UsersPermissionsMe | null;

export type AuthContextValue = {
  user: User
  updateUser: (user: User) => void
}

const initialAuth: AuthContextValue = {
  user: null,
  updateUser: () => null
}

// ** Create Context
export const AuthContext = createContext<AuthContextValue>(initialAuth)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  // ** State
  const [user, setUser] = useState<User>(initialAuth.user)


  const updateUser = (updatedUser: User) => {
    setUser(updatedUser)
  }
  console.log('users', user)

  return <AuthContext.Provider value={{ user, updateUser }}>{children}</AuthContext.Provider>
}


export const useAuth = () => useContext(AuthContext);
export const AuthConsumer = AuthContext.Consumer;
