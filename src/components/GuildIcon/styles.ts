import styled from 'styled-components/native'

export const Container = styled.View`
  width: 62px;
  height: 66px;

  align-items: center;
  justify-content: center;

  overflow: hidden;

  border-radius: 8px;

  background-color: ${props => props.theme.colors.discord};
`
export const Icon = styled.Image`
  width: 62px;
  height: 66px;

  border-radius: 8px;
`
