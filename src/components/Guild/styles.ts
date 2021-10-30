import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  padding: 0 24px;
`
export const Content = styled.View`
  flex: 1;
  justify-content: center;
`

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_bold};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 18px;

  margin-bottom: 11px;
`

export const Type = styled.Text`
  font-family: ${({ theme }) => theme.fonts.secondary_regular};
  color: ${({ theme }) => theme.colors.heading};
  font-size: 13px;

  margin-bottom: 24px;
`
