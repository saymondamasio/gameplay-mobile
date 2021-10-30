import { LinearGradient } from 'expo-linear-gradient'
import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled(LinearGradient)`
  height: 104px;

  padding: 0 24px;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const BackButton = styled(RectButton)``

export const Title = styled.Text`
  flex: 1;

  font-family: ${({ theme }) => theme.fonts.primary_bold};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
`

export const Action = styled.View``
