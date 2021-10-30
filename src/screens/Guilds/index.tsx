import React from 'react'
import { Guild, GuildProps } from '../../components/Guild'
import { ListSeparator } from '../../components/ListSeparator'

import { Container, GuildsList } from './styles'

type Props = {
  handleGuildSelected: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelected }: Props) {
  const guilds = [
    {
      id: '1',
      name: 'Lendarios',
      icon: null,
      owner: true,
    },
    {
      id: '2',
      name: 'Lendarios',
      icon: null,
      owner: true,
    },
  ]

  return (
    <Container>
      <GuildsList
        data={guilds}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListSeparator />}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelected(item)} />
        )}
      />
    </Container>
  )
}
