import React from 'react'

import { Container } from './styles'

type Props = {
  width?: string
}

export function ListSeparator({ width = '75%' }: Props) {
  return <Container style={{ width }} />
}
