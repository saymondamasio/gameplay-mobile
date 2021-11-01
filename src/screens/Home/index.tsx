import { useCallback, useEffect, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/core'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { Appointment, AppointmentProps } from '../../components/Appointment'
import { Background } from '../../components/Background'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader'
import { ListSeparator } from '../../components/ListSeparator'
import { Profile } from '../../components/Profile'
import { RoutesStackParamList } from '../../routes/app.routes'
import { useAuth } from '../../hooks/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Container, Header, Appointments } from './styles'
import { COLLECTION_APPOINTMENTS } from '../../configs/database'
import { Loading } from '../../components/Loading'

export function Home() {
  const [category, setCategory] = useState('')
  const [loading, setLoading] = useState(false)
  const [appointments, setAppointments] = useState<AppointmentProps[]>([])

  const navigate =
    useNavigation<NativeStackNavigationProp<RoutesStackParamList>>()

  function handleAppointmentDetails(appointment: AppointmentProps) {
    navigate.navigate('AppointmentDetails', { appointment })
  }

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  async function loadAppointments() {
    setLoading(true)

    const appointmentsStorage: AppointmentProps[] =
      JSON.parse(await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)) || []

    if (category) {
      setAppointments(
        appointmentsStorage.filter(
          appointment => appointment.category === category,
        ),
      )
    } else {
      setAppointments(appointmentsStorage)
    }

    setLoading(false)
  }

  useFocusEffect(
    useCallback(() => {
      loadAppointments()
    }, [category]),
  )

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

        {loading ? (
          <Loading />
        ) : (
          <>
            <ListHeader
              title="Partidas agendadas"
              subtitle={`Total ${appointments.length}`}
            />
            <Appointments
              data={appointments}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              ItemSeparatorComponent={() => <ListSeparator width="80%" />}
              contentContainerStyle={{ paddingBottom: 20 }}
              renderItem={({ item }) => (
                <Appointment
                  data={item}
                  onPress={() => handleAppointmentDetails(item)}
                />
              )}
            />
          </>
        )}
      </Container>
    </Background>
  )
}
