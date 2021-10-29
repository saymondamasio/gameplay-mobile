import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Info = styled.View``

export const User = styled.View`
  flex-direction: row;
`

export const Greeting = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_medium};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.heading};

  margin-right: 6px;
`

export const Username = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_bold};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.heading};
`

export const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_regular};
  color: ${({ theme }) => theme.colors.highlight};
`
