import { FlatList } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.SafeAreaView`
  flex: 1;
`
export const Header = styled.View`
  flex-direction: row;
  padding: 0 24px;
  justify-content: space-between;
  margin-top: 26px;
  margin-bottom: 42px;
`
export const Content = styled.View`
  margin-top: 42px;
  flex: 1;
`

export const Appointments = styled(FlatList)`
  margin-top: 24px;
  padding-left: 24px;
`
