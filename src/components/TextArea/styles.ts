import styled from 'styled-components/native'

export const Container = styled.TextInput`
  height: 95px;

  background-color: ${({ theme }) => theme.colors.secondary40};
  border-radius: 8px;

  font-family: ${({ theme }) => theme.fonts.secondary_regular};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.heading};

  padding: 16px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.secondary50};

  margin-right: 4px;
`

export const ContainerWrapper = styled.View``

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_bold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.heading};
`

export const Info = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_regular};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.highlight};
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 12px;
`
