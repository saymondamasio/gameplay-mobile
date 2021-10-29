import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { categories } from '../../utils/categories'
import { GuildIcon } from '../GuildIcon'
import PlayerIcon from '../../assets/player.svg'
import CalendarIcon from '../../assets/calendar.svg'

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
} from './styles'
import { useTheme } from 'styled-components'
import { SvgProps } from 'react-native-svg'

export type GuildProps = {
  id: string
  name: string
  owner: boolean
  icon: string | null
}

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
      <GuildIcon />

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
