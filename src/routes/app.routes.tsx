import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useTheme } from 'styled-components'
import { AppointmentProps } from '../components/Appointment'
import { AppointmentCreate } from '../screens/AppointmentCreate'
import { AppointmentDetails } from '../screens/AppointmentDetails'
import { Home } from '../screens/Home'

export type RoutesStackParamList = {
  Home: undefined
  AppointmentDetails: {
    appointment: AppointmentProps
  }
  AppointmentCreate: undefined
}

const { Navigator, Screen } = createNativeStackNavigator<RoutesStackParamList>()

export function AppRoutes() {
  const theme = useTheme()
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.secondary100,
        },
      }}
      initialRouteName="Home"
    >
      <Screen name="Home" component={Home} />
      <Screen name="AppointmentDetails" component={AppointmentDetails} />
      <Screen name="AppointmentCreate" component={AppointmentCreate} />
    </Navigator>
  )
}
