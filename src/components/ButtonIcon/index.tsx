import { TouchableOpacityProps } from 'react-native'
import { RectButtonProps } from 'react-native-gesture-handler'
import discord from '../../assets/discord.png'
import { Container, Icon, IconWrapper, Label } from './styles'

interface Props extends RectButtonProps {
  label: string
}

export function ButtonIcon({ label, ...rest }: Props) {
  return (
    <Container {...rest}>
      <IconWrapper>
        <Icon source={discord} />
      </IconWrapper>

      <Label>{label}</Label>
    </Container>
  )
}
