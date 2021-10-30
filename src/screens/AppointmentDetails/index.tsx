import React from 'react'
import { Fontisto } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Background } from '../../components/Background'
import { Header } from '../../components/Header'
import { ListHeader } from '../../components/ListHeader'
import { Member } from '../../components/Member'
import { ListSeparator } from '../../components/ListSeparator'
import { ButtonIcon } from '../../components/ButtonIcon'
import bannerImg from '../../assets/banner.png'

import {
  ShareButton,
  Title,
  SubTitle,
  BannerContent,
  Banner,
  ListMembers,
  Footer,
} from './styles'

export function AppointmentDetails() {
  const theme = useTheme()
  const insets = useSafeAreaInsets()

  const members = [
    {
      id: '1',
      username: 'Saymon',
      avatar_url: 'https://github.com/saymondamasio.png',
      status: 'online',
    },
    {
      id: '',
      username: 'Saymon',
      avatar_url: 'https://github.com/saymondamasio.png',
      status: 'offline',
    },
  ]

  return (
    <Background styles={{ paddingBottom: insets.bottom }}>
      <Header
        title="Detalhes"
        action={
          <ShareButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </ShareButton>
        }
      />

      <Banner source={bannerImg}>
        <BannerContent>
          <Title>Lendários</Title>
          <SubTitle>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </SubTitle>
        </BannerContent>
      </Banner>

      <ListHeader title="Jogadores" subtitle="Total 2" />

      <ListMembers
        data={members}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListSeparator />}
      />

      <Footer>
        <ButtonIcon label="Entrar na partida" />
      </Footer>
    </Background>
  )
}
