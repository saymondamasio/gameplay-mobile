import { useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { View } from 'react-native'
import { Appointment } from '../../components/Appointment'
import { Background } from '../../components/Background'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader'
import { ListSeparator } from '../../components/ListSeparator'
import { Profile } from '../../components/Profile'
import { RoutesStackParamList } from '../../routes/auth.routes'
import { Container, Content, Header, Appointments } from './styles'

export function Home() {
  const [category, setCategory] = useState('')

  const navigate =
    useNavigation<NativeStackNavigationProp<RoutesStackParamList>>()

  function handleAppointmentDetails() {
    navigate.navigate('AppointmentDetails')
  }

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendarios',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendarios',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
  ]

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  return (
    <Background>
      <Container>
        <Header>
          <Profile />
          <ButtonAdd onPress={() => navigate.navigate('AppointmentCreate')} />
        </Header>

        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <Content>
          <ListHeader title="Partidas agendadas" subtitle="Total 6" />

          <Appointments
            data={appointments}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <ListSeparator width="80%" />}
            renderItem={({ item }) => (
              <Appointment data={item} onPress={handleAppointmentDetails} />
            )}
          />
        </Content>
      </Container>
    </Background>
  )
}
