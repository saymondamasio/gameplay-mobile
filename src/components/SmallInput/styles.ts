import styled from 'styled-components/native'

export const Container = styled.TextInput`
  width: 48px;
  height: 48px;

  background-color: ${({ theme }) => theme.colors.secondary40};
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.secondary50};

  font-family: ${({ theme }) => theme.fonts.secondary_regular};
  font-size: 13px;
  text-align: center;
  color: ${({ theme }) => theme.colors.heading};

  margin-right: 4px;
`
