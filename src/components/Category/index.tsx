import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { RectButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'
import { useTheme } from 'styled-components'

import { Container, Content, Checked, Title, Background } from './styles'

type Props = RectButtonProps & {
  title: string
  icon: React.FC<SvgProps>
  hasCheckBox?: boolean
  checked?: boolean
}

export function Category({
  icon: Icon,
  title,
  hasCheckBox = false,
  checked = false,
  ...rest
}: Props) {
  const theme = useTheme()

  return (
    <Container {...rest}>
      <Background colors={[theme.colors.secondary50, theme.colors.secondary70]}>
        <Content
          colors={[
            checked ? theme.colors.secondary85 : theme.colors.secondary50,
            theme.colors.secondary40,
          ]}
          checked={checked}
        >
          {hasCheckBox && <Checked checked={checked} />}
          <Icon width={48} height={48} />

          <Title>{title}</Title>
        </Content>
      </Background>
    </Container>
  )
}
