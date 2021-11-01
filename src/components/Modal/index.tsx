import React from 'react'
import { ModalProps, TouchableWithoutFeedback } from 'react-native'
import { Background } from '../Background'

import { Container, Overlay, Content, Bar } from './styles'

type Props = ModalProps & {
  children: React.ReactNode
  onClose: () => void
}

export function Modal({ children, onClose, ...rest }: Props) {
  return (
    <Container statusBarTranslucent transparent animationType="slide" {...rest}>
      <TouchableWithoutFeedback onPress={onClose}>
        <Overlay>
          <TouchableWithoutFeedback onPress={e => e.preventDefault()}>
            <Content>
              <Background>
                <Bar />
                {children}
              </Background>
            </Content>
          </TouchableWithoutFeedback>
        </Overlay>
      </TouchableWithoutFeedback>
    </Container>
  )
}
