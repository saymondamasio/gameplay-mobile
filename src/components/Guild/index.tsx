import React from 'react'
import { TouchableOpacityProps, View } from 'react-native'
import { GuildIcon } from '../GuildIcon'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'

import { Container, Content, Name, Type } from './styles'

export type GuildProps = {
  id: string
  name: string
  icon: string | null
  owner: boolean
}

type Props = TouchableOpacityProps & {
  data: GuildProps
}

export function Guild({ data, ...rest }: Props) {
  const theme = useTheme()

  return (
    <Container activeOpacity={0.7} {...rest}>
      <GuildIcon guildId={data.id} iconId={data.icon} />

      <Content>
        <View>
          <Name>{data.name}</Name>

          <Type>{data.owner ? 'Administrador' : 'Convidado'}</Type>
        </View>
      </Content>

      <Feather name="chevron-right" size={24} color={theme.colors.heading} />
    </Container>
  )
}
