import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Container } from './styles'
import { useTheme } from 'styled-components'

export function ButtonAdd({ ...rest }: RectButtonProps) {
  const theme = useTheme()
  return (
    <Container {...rest}>
      <MaterialCommunityIcons
        name="plus"
        size={24}
        color={theme.colors.heading}
      />
    </Container>
  )
}
