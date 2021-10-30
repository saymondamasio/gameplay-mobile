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
import { GuildProps } from '../../components/Appointment'

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

export function AppointmentCreate() {
  const insets = useSafeAreaInsets()
  const theme = useTheme()

  const [openGuildsModal, setOpenGuildsModal] = useState(false)
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)
  const [category, setCategory] = useState('')

  function handleOpenGuilds() {
    setOpenGuildsModal(true)
  }

  function handleGuildSelect(guildSelect: GuildProps) {
    setGuild(guildSelect)
    setOpenGuildsModal(false)
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <Background styles={{ paddingBottom: insets.bottom }}>
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
                  <GuildIcon />
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
                <Label>Dia e mês</Label>

                <Column>
                  <SmallInput maxLength={2} />
                  <Divider>/</Divider>
                  <SmallInput maxLength={2} />
                </Column>
              </View>

              <View>
                <Label>Hora e minuto</Label>

                <Column>
                  <SmallInput maxLength={2} />
                  <Divider>:</Divider>
                  <SmallInput maxLength={2} />
                </Column>
              </View>
            </Field>

            <TextArea label="Descrição" info="Max 100 caracteres" />

            <Footer>
              <Button label="Agendar" />
            </Footer>
          </Form>
        </Background>
      </ScrollView>

      <Modal visible={openGuildsModal}>
        <Guilds handleGuildSelected={handleGuildSelect} />
      </Modal>
    </KeyboardAvoidingView>
  )
}
