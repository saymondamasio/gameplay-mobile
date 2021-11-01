import { LinearGradient } from 'expo-linear-gradient'
import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`
export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_bold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.heading};
`

export const Form = styled.View`
  padding: 0 24px;
  margin-top: 32px;
`

export const SelectButtonWrapper = styled.View`
  height: 68px;

  border-color: ${({ theme }) => theme.colors.secondary50};
  border-width: 1px;
  border-radius: 8px;

  overflow: hidden;
  align-items: center;
  flex-direction: row;

  padding-right: 25px;
`

export const SelectButton = styled(RectButton)``

export const Image = styled(LinearGradient)`
  width: 64px;
  height: 68px;

  background-color: ${({ theme }) => theme.colors.secondary40};

  border-color: ${({ theme }) => theme.colors.secondary50};
  border-right-width: 1px;
  border-radius: 8px;
`

export const SelectContent = styled.View`
  flex: 1;
  align-items: center;
`

export const Field = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin: 30px 0;
`

export const Column = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Divider = styled.Text`
  margin-right: 4px;
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.secondary_medium};
  color: ${({ theme }) => theme.colors.highlight};
`

export const Footer = styled.View`
  margin: 20px 0;
  align-items: center;
`
