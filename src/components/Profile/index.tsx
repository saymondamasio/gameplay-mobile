import { Avatar } from '../Avatar'
import { Container, Greeting, Info, Message, User, Username } from './styles'

export function Profile() {
  return (
    <Container>
      <Avatar urlImage="https://github.com/saymondamasio.png" />
      <Info>
        <User>
          <Greeting>Olá,</Greeting>

          <Username>Saymon</Username>
        </User>

        <Message>Hoje é dia de vitória!</Message>
      </Info>
    </Container>
  )
}
