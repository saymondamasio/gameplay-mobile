import React from 'react'
import { TextInputProps } from 'react-native'

import { Container, ContainerWrapper, Label, Info, Header } from './styles'

type Props = TextInputProps & {
  label: string
  info?: string
}

export function TextArea({ label, info, ...rest }: Props) {
  return (
    <ContainerWrapper>
      <Header>
        <Label>{label}</Label>
        <Info>{info}</Info>
      </Header>
      <Container
        multiline
        textAlignVertical="top"
        maxLength={100}
        numberOfLines={5}
        autoCorrect={false}
        {...rest}
      />
    </ContainerWrapper>
  )
}
