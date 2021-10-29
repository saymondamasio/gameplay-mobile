import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
`
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_bold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.heading};
`

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_regular};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.highlight};
`
