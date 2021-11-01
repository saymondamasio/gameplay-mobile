import { BorderlessButton, FlatList } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const ShareButton = styled(BorderlessButton)``

export const Banner = styled.ImageBackground`
  height: 234px;
`

export const BannerContent = styled.View`
  flex: 1;

  justify-content: flex-end;

  padding: 0 24px 30px;
`

export const Title = styled.Text`
  font-size: 28px;
  font-family: ${({ theme }) => theme.fonts.primary_bold};
  color: ${({ theme }) => theme.colors.heading};
`

export const SubTitle = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.secondary_regular};
  color: ${({ theme }) => theme.colors.heading};

  line-height: 21px;
`

export const ListMembers = styled(FlatList)`
  margin: 0 24px;
`

export const Footer = styled.View`
  padding: 20px 24px;
`
