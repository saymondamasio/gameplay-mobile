import styled from 'styled-components/native'

export const Container = styled.Modal``

export const Overlay = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.overlay};
`

export const Content = styled.View`
  flex: 1;
  margin-top: 100px;
`

export const Bar = styled.View`
  width: 39px;
  height: 2px;
  margin-top: 13px;

  border-radius: 2px;

  background-color: ${({ theme }) => theme.colors.secondary30};

  align-self: center;
`
