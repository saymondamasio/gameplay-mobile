import styled from 'styled-components/native'

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingRight: 40,
  },
})`
  min-height: 120px;
  max-height: 120px;
  padding-left: 24px;
`
