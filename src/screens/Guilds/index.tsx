import React, { useEffect, useState } from 'react'
import { Guild, GuildProps } from '../../components/Guild'
import { ListSeparator } from '../../components/ListSeparator'
import { Loading } from '../../components/Loading'
import { api } from '../../services/api'

import { Container, GuildsList } from './styles'

type Props = {
  handleGuildSelected: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelected }: Props) {
  const [guilds, setGuilds] = useState<GuildProps>({} as GuildProps)
  const [loading, setLoading] = useState(false)

  async function loadGuilds() {
    setLoading(true)
    const response = await api.get('/users/@me/guilds')

    setGuilds(response.data)
    setLoading(false)
  }

  useEffect(() => {
    loadGuilds()
  }, [])

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <GuildsList
          data={guilds}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={() => <ListSeparator isCentered />}
          ItemSeparatorComponent={() => <ListSeparator isCentered />}
          contentContainerStyle={{ paddingBottom: 20, paddingTop: 104 }}
          renderItem={({ item }) => (
            <Guild data={item} onPress={() => handleGuildSelected(item)} />
          )}
        />
      )}
    </Container>
  )
}
