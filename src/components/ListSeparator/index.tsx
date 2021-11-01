import React from 'react'

import { Container } from './styles'

type Props = {
  width?: string
  isCentered?: boolean
}

export function ListSeparator({ width = '75%', isCentered }: Props) {
  return (
    <Container
      style={[
        { width },
        isCentered
          ? {
              marginVertical: 12,
            }
          : {
              marginTop: 0,
              marginBottom: 31,
            },
      ]}
    />
  )
}
