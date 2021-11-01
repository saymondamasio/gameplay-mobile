import { useAuth } from '../../hooks/auth'
import { Avatar } from '../Avatar'
import { Container, Greeting, Info, Message, User, Username } from './styles'

export function Profile() {
  const { user } = useAuth()

  return (
    <Container>
      <Avatar urlImage={user.avatar} />
      <Info>
        <User>
          <Greeting>Olá,</Greeting>

          <Username>{user.firstName}</Username>
        </User>

        <Message>Hoje é dia de vitória!</Message>
      </Info>
    </Container>
  )
}
