import { useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import illustration from '../../assets/illustration.png'
import { Background } from '../../components/Background'
import { ButtonIcon } from '../../components/ButtonIcon'
import { RoutesStackParamList } from '../../routes/auth.routes'
import { Container, Content, Illustration, SubTitle, Title } from './styles'

export function SignIn() {
  const navigate =
    useNavigation<NativeStackNavigationProp<RoutesStackParamList>>()

  function handleSignIn() {
    navigate.navigate('Home')
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

          <ButtonIcon label="Entrar com Discord" onPress={handleSignIn} />
        </Content>
      </Container>
    </Background>
  )
}
