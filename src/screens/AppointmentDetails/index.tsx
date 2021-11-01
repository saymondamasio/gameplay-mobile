import React, { useEffect, useState } from 'react'
import { Fontisto } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Background } from '../../components/Background'
import { Header } from '../../components/Header'
import { ListHeader } from '../../components/ListHeader'
import { Member, MemberProps } from '../../components/Member'
import { ListSeparator } from '../../components/ListSeparator'
import { ButtonIcon } from '../../components/ButtonIcon'
import bannerImg from '../../assets/banner.png'
import { RoutesStackParamList } from '../../routes/app.routes'

import {
  ShareButton,
  Title,
  SubTitle,
  BannerContent,
  Banner,
  ListMembers,
  Footer,
} from './styles'
import { RouteProp, useRoute } from '@react-navigation/native'
import { api } from '../../services/api'
import { Alert, Platform, Share } from 'react-native'
import { Loading } from '../../components/Loading'
import * as Linking from 'expo-linking'

type GuildWidget = {
  id: string
  name: string
  instant_invite: string
  members: MemberProps[]
}

export function AppointmentDetails() {
  const theme = useTheme()
  const insets = useSafeAreaInsets()

  const [loading, setLoading] = useState(false)

  const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget)

  const routes =
    useRoute<RouteProp<RoutesStackParamList, 'AppointmentDetails'>>()

  const { appointment } = routes.params

  function handleShareInvitation() {
    const message =
      Platform.OS === 'ios'
        ? `Junte-se a ${appointment.guild.name}`
        : widget.instant_invite

    Share.share({
      message,
      url: widget.instant_invite,
    })
  }

  function handleOpenGuild() {
    Linking.openURL(widget.instant_invite)
  }

  async function fetchGuildWidget() {
    setLoading(true)
    try {
      const { data } = await api.get<GuildWidget>(
        `guilds/${appointment.guild.id}/widget.json`,
      )

      setWidget(data)
    } catch {
      Alert.alert(
        'Erro',
        'Verifique as configurações do servidor. Será que o widget está habilitado?',
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchGuildWidget()
  }, [])

  return (
    <Background styles={{ paddingBottom: insets.bottom }}>
      <Header
        title="Detalhes"
        action={
          appointment.guild.owner && (
            <ShareButton onPress={handleShareInvitation}>
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            </ShareButton>
          )
        }
      />

      <Banner source={bannerImg}>
        <BannerContent>
          <Title>{appointment.guild.name}</Title>
          <SubTitle>{appointment.description}</SubTitle>
        </BannerContent>
      </Banner>

      {loading ? (
        <Loading />
      ) : (
        <>
          <ListHeader
            title="Jogadores"
            subtitle={`Total ${widget.members?.length || 0}`}
          />

          <ListMembers
            data={widget.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Member data={item} />}
            ItemSeparatorComponent={() => <ListSeparator isCentered />}
          />
        </>
      )}

      {appointment.guild.owner && (
        <Footer>
          <ButtonIcon label="Entrar na partida" onPress={handleOpenGuild} />
        </Footer>
      )}
    </Background>
  )
}
