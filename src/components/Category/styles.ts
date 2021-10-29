import { LinearGradient } from 'expo-linear-gradient'
import { RectButton } from 'react-native-gesture-handler'
import styled, { css } from 'styled-components/native'

type CheckedProps = {
  checked: boolean
}

export const Background = styled(LinearGradient)`
  width: 104px;
  height: 120px;

  justify-content: center;
  align-items: center;

  border-radius: 8px;
  margin-right: 8px;
`

export const Container = styled(RectButton)`
  flex: 1;
`

export const Content = styled.View<CheckedProps>`
  width: 100px;
  height: 116px;

  background-color: ${({ theme }) => theme.colors.secondary40};
  border-radius: 8px;

  justify-content: space-between;
  align-items: center;

  padding: 7px 0;

  opacity: ${({ checked }) => (checked ? 1 : 0.4)};
`

export const Checked = styled.View<CheckedProps>`
  ${({ theme, checked }) =>
    checked
      ? css`
          width: 8px;
          height: 8px;

          background-color: ${theme.colors.primary};

          align-self: flex-end;

          margin-right: 7px;
        `
      : css`
          width: 8px;
          height: 8px;

          background-color: ${theme.colors.secondary100};

          align-self: flex-end;

          margin-right: 7px;

          border-color: ${({ theme }) => theme.colors.secondary50};
          border-width: 1px;
          border-radius: 2px;
        `}
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_medium};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 15px;
`
