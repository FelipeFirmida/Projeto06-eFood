import styled from 'styled-components'

import { breakpoints, cores } from '../../../styles'
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

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    margin: 0 16px;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    content: '';
  }
`

export const ModalContent = styled.div`
  max-width: 1024px;
  position: relative;
  z-index: 1;
  background-color: ${cores.vermelho};
  display: flex;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 80%;
    padding: 8px;
  }

  header {
    > img {
      position: absolute;
      top: 8px;
      right: 8px;
      cursor: pointer;
    }
  }

  > img {
    width: 280px;
    height: 280px;
    margin: 32px 24px 32px 32px;
    object-fit: fill;

    @media (max-width: ${breakpoints.tablet}) {
      width: 170px;
      height: auto;
      margin: 24px 0 0 56px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 32px;
    margin-left: 0;
    width: auto;

    h4 {
      font-size: 18px;
      font-weight: 900;
      color: ${cores.branca};
      margin-bottom: 16px;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      color: ${cores.branca};
      margin-bottom: 16px;
    }

    button {
      display: flex;
      white-space: nowrap;
      width: auto;
      padding: 4px 7px;
      cursor: pointer;
    }
  }
`
