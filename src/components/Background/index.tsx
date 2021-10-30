import { ReactNode } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { useTheme } from 'styled-components'
import { Container } from './styles'

type Props = {
  children: ReactNode
  styles?: StyleProp<ViewStyle>
}

export function Background({ children, styles }: Props) {
  const theme = useTheme()
  return (
    <Container
      colors={[theme.colors.secondary80, theme.colors.secondary100]}
      style={styles}
    >
      {children}
    </Container>
  )
}
