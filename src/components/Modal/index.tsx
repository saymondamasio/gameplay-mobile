import React from 'react'
import { ModalProps } from 'react-native'
import { Background } from '../Background'

import { Container, Overlay, Content, Bar } from './styles'

type Props = ModalProps & {
  children: React.ReactNode
}

export function Modal({ children, ...rest }: Props) {
  return (
    <Container transparent animationType="slide" {...rest}>
      <Overlay>
        <Content>
          <Background>
            <Bar />
            {children}
          </Background>
        </Content>
      </Overlay>
    </Container>
  )
}
