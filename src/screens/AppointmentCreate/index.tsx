import React, { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons'
import { KeyboardAvoidingView, Platform, View } from 'react-native'

import { Background } from '../../components/Background'
import { Header } from '../../components/Header'
import { CategorySelect } from '../../components/CategorySelect'
import { useTheme } from 'styled-components'
import { GuildIcon } from '../../components/GuildIcon'
import { SmallInput } from '../../components/SmallInput'
import { TextArea } from '../../components/TextArea'
import { ScrollView } from 'react-native-gesture-handler'
import { Button } from '../../components/Button'
import { Modal } from '../../components/Modal'
import { Guilds } from '../Guilds'
import uuid from 'react-native-uuid'

import {
  Label,
  Form,
  SelectButton,
  Field,
  Column,
  Divider,
  SelectContent,
  SelectButtonWrapper,
  Footer,
  Image,
} from './styles'
import { GuildProps } from '../../components/Guild'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLLECTION_APPOINTMENTS } from '../../configs/database'
import { useNavigation } from '@react-navigation/core'

export function AppointmentCreate() {
  const insets = useSafeAreaInsets()
  const theme = useTheme()
  const navigate = useNavigation()

  const [openGuildsModal, setOpenGuildsModal] = useState(false)
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  function handleOpenGuilds() {
    setOpenGuildsModal(true)
  }

  function handleCloseGuilds() {
    setOpenGuildsModal(false)
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect)
    setOpenGuildsModal(false)
  }

  async function handleCreateAppointment() {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hour}:${minute}`,
      description,
    }

    const appointments =
      JSON.parse(await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)) || []
    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment]),
    )

    navigate.goBack()
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <Background styles={{ paddingBottom: insets.bottom }}>
        <ScrollView>
          <Header title="Agendar partida" />

          <Label style={{ marginLeft: 24, marginTop: 36, marginBottom: 18 }}>
            Categoria
          </Label>

          <CategorySelect
            setCategory={setCategory}
            categorySelected={category}
            hasCheckBox
          />

          <Form>
            <SelectButton onPress={handleOpenGuilds}>
              <SelectButtonWrapper>
                {guild ? (
                  <GuildIcon guildId={guild.id} iconId={guild.icon} />
                ) : (
                  <Image
                    colors={[
                      theme.colors.secondary60,
                      theme.colors.secondary50,
                    ]}
                  />
                )}

                <SelectContent>
                  <Label>{guild.name || 'Selecione um servidor'}</Label>
                </SelectContent>

                <Feather
                  name="chevron-right"
                  size={18}
                  color={theme.colors.heading}
                />
              </SelectButtonWrapper>
            </SelectButton>

            <Field>
              <View>
                <Label style={{ marginBottom: 12 }}>Dia e mês</Label>

                <Column>
                  <SmallInput maxLength={2} onChangeText={setDay} />
                  <Divider>/</Divider>
                  <SmallInput maxLength={2} onChangeText={setMonth} />
                </Column>
              </View>

              <View>
                <Label style={{ marginBottom: 12 }}>Hora e minuto</Label>

                <Column>
                  <SmallInput maxLength={2} onChangeText={setHour} />
                  <Divider>:</Divider>
                  <SmallInput maxLength={2} onChangeText={setMinute} />
                </Column>
              </View>
            </Field>

            <TextArea
              label="Descrição"
              info="Max 100 caracteres"
              onChangeText={setDescription}
            />

            <Footer>
              <Button label="Agendar" onPress={handleCreateAppointment} />
            </Footer>
          </Form>
        </ScrollView>
      </Background>

      <Modal visible={openGuildsModal} onClose={handleCloseGuilds}>
        <Guilds handleGuildSelected={handleGuildSelect} />
      </Modal>
    </KeyboardAvoidingView>
  )
}
