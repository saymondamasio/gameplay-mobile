import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled(RectButton)`
  height: 48px;
  width: 48px;

  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 8px;

  align-items: center;
  justify-content: center;
`
