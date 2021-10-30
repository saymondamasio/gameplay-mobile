import React from 'react'

import discord from '../../assets/discord.png'

import { Container } from './styles'

export function GuildIcon() {
  return (
    <Container
      source={{
        uri: 'https://pbs.twimg.com/media/DUL5XhCWsAAOrA4.jpg',
      }}
      resizeMode="cover"
    />
  )
}
