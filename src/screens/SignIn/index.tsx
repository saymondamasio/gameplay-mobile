import { Alert } from 'react-native'

import illustration from '../../assets/illustration.png'
import { Background } from '../../components/Background'
import { ButtonIcon } from '../../components/ButtonIcon'
import { useAuth } from '../../hooks/auth'

import { Container, Content, Illustration, SubTitle, Title } from './styles'

export function SignIn() {
  const { user, signIn, loading } = useAuth()

  async function handleSignIn() {
    try {
      await signIn()
    } catch (error) {
      Alert.alert('Erro', error.message)
    }
  }

  return (
    <Background>
      <Container>
        <Illustration source={illustration} resizeMode="stretch" />

        <Content>
          <Title>
            Organize{'\n'}
            suas jogatinas{'\n'}
            facilmente
          </Title>

          <SubTitle>
            Crie grupos para jogar seus games{'\n'}
            favoritos com seus amigos.
          </SubTitle>

          <ButtonIcon
            label="Entrar com Discord"
            onPress={handleSignIn}
            loading={loading}
          />
        </Content>
      </Container>
    </Background>
  )
}
