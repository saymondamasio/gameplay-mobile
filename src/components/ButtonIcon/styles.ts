import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled(RectButton)`
  height: 56px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;

  flex-direction: row;
  align-items: center;
`

export const Icon = styled.Image`
  width: 24px;
  height: 18px;
`

export const IconWrapper = styled.View`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.colors.line};
`

export const Label = styled.Text`
  flex: 1;

  font-size: 15px;
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
`
