import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

type OwnerProps = {
  owner: boolean
}

export const Container = styled(RectButton)`
  flex-direction: row;
  align-self: center;
`

export const Content = styled.View`
  flex: 1;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 12px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_bold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.heading};
`

export const Category = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_regular};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.highlight};

  margin-right: 24px;
`

export const PlayersInfo = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Player = styled.Text<OwnerProps>`
  font-family: ${({ theme }) => theme.fonts.secondary_medium};
  font-size: 13px;
  color: ${({ owner, theme }) =>
    owner ? theme.colors.primary : theme.colors.on};

  margin: 0 24px 0 7px;
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const DateInfo = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_medium};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.heading};

  margin-left: 7px;
`
