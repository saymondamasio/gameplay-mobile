import { ActivityIndicator } from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'
import { useTheme } from 'styled-components'
import discord from '../../assets/discord.png'
import { Container, Icon, IconWrapper, Label } from './styles'

interface Props extends RectButtonProps {
  label: string
  loading?: boolean
}

export function ButtonIcon({ label, loading = false, ...rest }: Props) {
  const theme = useTheme()

  return loading ? (
    <ActivityIndicator color={theme.colors.primary} />
  ) : (
    <Container {...rest}>
      <IconWrapper>
        <Icon source={discord} />
      </IconWrapper>

      <Label>{label}</Label>
    </Container>
  )
}
