import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { SignIn } from '../screens/SignIn'

export type RoutesStackParamList = {
  Home: undefined
  SignIn: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<RoutesStackParamList>()

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'transparent',
        },
      }}
      initialRouteName="SignIn"
    >
      <Screen name="Home" component={Home} />
      <Screen name="SignIn" component={SignIn} />
    </Navigator>
  )
}
