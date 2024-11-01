import styled from 'styled-components'
import { cores } from '../../../styles'

export const Container = styled.footer`
  background-color: ${cores.rosaClaro};
  padding: 40px 0;
  font-size: 14px;
  text-align: center;
`

export const SectionTitle = styled.h4`
  color: ${cores.branca};
  font-weight: bold;
  font-size: 16px;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 32px;
  justify-content: center;
`

export const Link = styled.a`
  color: ${cores.vermelho};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 80px;
`
