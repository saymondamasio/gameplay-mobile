import { ReactNode } from 'react'
import { useTheme } from 'styled-components'
import { Container } from './styles'

type Props = {
  children: ReactNode
}

export function Background({ children }: Props) {
  const theme = useTheme()
  return (
    <Container colors={[theme.colors.secondary80, theme.colors.secondary100]}>
      {children}
    </Container>
  )
}
