import React from 'react'
import { useTheme } from 'styled-components'
import { RectButtonProps } from 'react-native-gesture-handler'

import { categories } from '../../utils/categories'
import { GuildIcon } from '../GuildIcon'
import PlayerIcon from '../../assets/player.svg'
import CalendarIcon from '../../assets/calendar.svg'
import { GuildProps } from '../Guild'

import {
  Container,
  Content,
  Header,
  Title,
  Category,
  PlayersInfo,
  Footer,
  DateInfo,
  Date,
  Player,
  IconContainer,
} from './styles'

export type AppointmentProps = {
  id: string
  guild: GuildProps
  category: string
  date: string
  description: string
}

type Props = RectButtonProps & {
  data: AppointmentProps
}

export function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter(
    category => category.id === data.category,
  )

  const { name, owner } = data.guild

  const theme = useTheme()

  return (
    <Container {...rest}>
      <IconContainer
        colors={[theme.colors.secondary50, theme.colors.secondary70]}
      >
        <GuildIcon guildId={data.guild.id} iconId={data.guild.icon} />
      </IconContainer>

      <Content>
        <Header>
          <Title>{name}</Title>

          <Category>{category.title}</Category>
        </Header>

        <Footer>
          <DateInfo>
            <CalendarIcon />

            <Date>{data.date}</Date>
          </DateInfo>
          <PlayersInfo>
            <PlayerIcon fill={owner ? theme.colors.primary : theme.colors.on} />
            <Player owner={owner}>{owner ? 'Anfitrião' : 'Visitante'}</Player>
          </PlayersInfo>
        </Footer>
      </Content>
    </Container>
  )
}
