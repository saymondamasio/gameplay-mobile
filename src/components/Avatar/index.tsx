import { useTheme } from 'styled-components'
import { AvatarImage, Container } from './styles'

type Props = {
  urlImage: string
}

export function Avatar({ urlImage }: Props) {
  const theme = useTheme()
  return (
    <Container colors={[theme.colors.secondary50, theme.colors.secondary70]}>
      <AvatarImage source={{ uri: urlImage }} />
    </Container>
  )
}
