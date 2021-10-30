import React, { ReactNode } from 'react'
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'

import { Container, BackButton, Title, Action } from './styles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/core'

type Props = {
  title: string
  action?: ReactNode
}

export function Header({ title, action }: Props) {
  const theme = useTheme()
  const insets = useSafeAreaInsets()
  const navigation = useNavigation()

  return (
    <Container
      style={{ paddingTop: insets.top }}
      colors={[theme.colors.secondary100, theme.colors.secondary40]}
    >
      <BackButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color={theme.colors.heading} />
      </BackButton>

      <Title>{title}</Title>

      {action && <Action>{action}</Action>}
    </Container>
  )
}
