import { FlatList } from 'react-native-gesture-handler'
import styled from 'styled-components/native'
import { GuildProps } from '../../components/Guild'

export const Container = styled.View`
  flex: 1;
  align-items: center;

  padding-top: 24px;
`

export const GuildsList = styled(FlatList as new () => FlatList<GuildProps>)`
  width: 100%;
`
