import { NavigationContainer } from '@react-navigation/native'
import { Background } from '../components/Background'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  )
}
