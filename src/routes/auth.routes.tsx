import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from 'styled-components'
import { AppointmentCreate } from '../screens/AppointmentCreate'
import { AppointmentDetails } from '../screens/AppointmentDetails'
import { Home } from '../screens/Home'
import { SignIn } from '../screens/SignIn'

export type RoutesStackParamList = {
  Home: undefined
  SignIn: undefined
  AppointmentDetails: undefined
  AppointmentCreate: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<RoutesStackParamList>()

export function AuthRoutes() {
  const theme = useTheme()
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
      initialRouteName="SignIn"
    >
      <Screen name="Home" component={Home} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="AppointmentDetails" component={AppointmentDetails} />
      <Screen name="AppointmentCreate" component={AppointmentCreate} />
    </Navigator>
  )
}
