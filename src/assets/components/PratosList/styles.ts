import styled from 'styled-components'

import { cores } from '../../../styles'
import { Card } from '../Product/styles'

export const Container = styled.section`
  padding: 32px 0;
  background-color: ${cores.branca};

  ${Card} {
    background-color: ${cores.branca};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  margin-top: 56px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
