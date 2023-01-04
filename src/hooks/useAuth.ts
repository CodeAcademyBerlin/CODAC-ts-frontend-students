import { useContext } from 'react'
import { AuthContext, AuthContextValue } from '../contexts/authContext'

export const useAuth = (): AuthContextValue => useContext(AuthContext)
