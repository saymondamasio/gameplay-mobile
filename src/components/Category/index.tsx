import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'
import { useTheme } from 'styled-components'

import { Container, Content, Checked, Title, Background } from './styles'

type Props = RectButtonProps & {
  title: string
  icon: React.FC<SvgProps>
  checked?: boolean
}

export function Category({
  icon: Icon,
  title,
  checked = false,
  ...rest
}: Props) {
  const theme = useTheme()

  return (
    <Container {...rest}>
      <Background colors={[theme.colors.secondary50, theme.colors.secondary70]}>
        <Content checked={checked}>
          <Checked checked={checked} />
          <Icon width={48} height={48} />

          <Title>{title}</Title>
        </Content>
      </Background>
    </Container>
  )
}
