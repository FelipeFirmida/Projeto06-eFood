import styled from 'styled-components'
import { cores } from '../../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left; 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  color: ${cores.rosaClaro};

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;
`
