import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Illustration = styled.Image`
  width: 100%;
  height: 360px;
`

export const Content = styled.View`
  margin-top: -40px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.primary_bold};
  line-height: 40px;
  font-size: 40px;
  text-align: center;

  margin-bottom: 16px;
`

export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  font-family: ${({ theme }) => theme.fonts.primary_medium};
  font-size: 15px;
  text-align: center;
  line-height: 25px;

  margin-bottom: 64px;
`
