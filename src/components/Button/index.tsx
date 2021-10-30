import { RectButtonProps } from 'react-native-gesture-handler'
import { Container, Label } from './styles'

interface Props extends RectButtonProps {
  label: string
}

export function Button({ label, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Label>{label}</Label>
    </Container>
  )
}
