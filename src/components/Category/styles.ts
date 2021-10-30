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

export const Content = styled(LinearGradient)<CheckedProps>`
  width: 100px;
  height: 116px;

  border-radius: 8px;

  align-items: center;
  justify-content: space-between;

  padding: 15px 0;

  opacity: ${({ checked }) => (checked ? 1 : 0.5)};
`

export const Checked = styled.View<CheckedProps>`
  ${({ theme, checked }) =>
    checked
      ? css`
          position: absolute;
          top: 7px;
          right: 7px;

          width: 8px;
          height: 8px;

          background-color: ${theme.colors.primary};
        `
      : css`
          position: absolute;
          top: 7px;
          right: 7px;

          width: 10px;
          height: 10px;

          background-color: ${theme.colors.secondary100};

          border-color: ${({ theme }) => theme.colors.secondary50};
          border-width: 1px;
          border-radius: 2px;
        `}
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_bold};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 15px;
`
