import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import * as AuthSession from 'expo-auth-session'
import { api } from '../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_USERS } from '../configs/database'

const { CDN_IMAGE } = process.env
const { CLIENT_ID } = process.env
const { REDIRECT_URI } = process.env
const { RESPONSE_TYPE } = process.env
const { SCOPE } = process.env

type AuthContextData = {
  user: User
  signIn: () => Promise<void>
  signOut: () => Promise<void>
  loading: boolean
}

type User = {
  id: string
  username: string
  firstName: string
  avatar: string
  email: string
  token: string
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string
    error?: string
  }
}

type AuthProviderProps = {
  children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const [loading, setLoading] = useState(false)

  async function loadUser() {
    const user = JSON.parse(await AsyncStorage.getItem(COLLECTION_USERS))

    api.defaults.headers['Authorization'] = `Bearer ${user.token}`

    setUser(user)
  }

  useEffect(() => {
    loadUser()
  }, [])

  async function signOut() {
    await AsyncStorage.removeItem(COLLECTION_USERS)
    setUser({} as User)
  }

  async function signIn() {
    try {
      setLoading(true)

      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse

      if (type === 'success' && !params.error) {
        api.defaults.headers['Authorization'] = `Bearer ${params.access_token}`

        const { data: userInfo } = await api.get('/users/@me')

        const firstName = userInfo.username.split(' ')[0]
        userInfo.avatar = `${CDN_IMAGE}/avatars/${userInfo.id}/${userInfo.avatar}.png`

        const user = {
          ...userInfo,
          firstName,
          token: params.access_token,
        }

        await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(user))
        setUser(user)
      }
    } catch (error) {
      throw new Error('Não foi possivel autenticar')
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export { useAuth, AuthProvider }
