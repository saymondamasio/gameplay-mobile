import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import {
  Rajdhani_500Medium,
  Rajdhani_700Bold,
} from '@expo-google-fonts/rajdhani'
import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { Background } from './src/components/Background'
import { theme } from './src/global/styles/theme'
import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Background>
        <StatusBar style="light" translucent />
        <Routes />
      </Background>
    </ThemeProvider>
  )
}
