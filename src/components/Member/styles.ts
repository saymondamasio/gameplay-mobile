import styled from 'styled-components/native'

type StatusProps = {
  status: boolean
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Content = styled.View``

export const Status = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.primary_bold};
  color: ${({ theme }) => theme.colors.heading};
`

export const BulletStatus = styled.View<StatusProps>`
  width: 8px;
  height: 8px;
  margin-right: 9px;

  border-radius: 4px;

  background-color: ${({ theme, status }) =>
    status ? theme.colors.on : theme.colors.primary};
`

export const StatusName = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.secondary_regular};
  color: ${({ theme }) => theme.colors.highlight};
`
