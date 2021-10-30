import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled(RectButton)`
  height: 56px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
`

export const Label = styled.Text`
  flex: 1;

  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.secondary_medium};
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
`
