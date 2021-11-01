import React from 'react'

import DiscordIcon from '../../assets/discord.svg'

import { Container, Icon } from './styles'

const { CDN_IMAGE } = process.env

type Props = {
  guildId: string
  iconId: string
}

export function GuildIcon({ guildId, iconId }: Props) {
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}`

  return (
    <Container>
      {iconId ? (
        <Icon
          source={{
            uri,
          }}
          resizeMode="cover"
        />
      ) : (
        <DiscordIcon width={40} height={40} />
      )}
    </Container>
  )
}
