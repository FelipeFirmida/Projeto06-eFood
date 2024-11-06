import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../../styles'

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 2px solid ${cores.vermelho};
  color: ${cores.vermelho};
  background-color: ${cores.branca};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 0px;
  text-decoration: none;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.branca};
  color: ${cores.branca};
  background-color: ${cores.vermelho};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  text-decoration: none;
  margin-left: 8px;
`
