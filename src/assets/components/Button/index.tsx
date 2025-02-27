import { ButtonContainer, ButtonLink } from './style'

type Props = {
  type: 'button' | 'link' | 'cart'
  title: string
  to?: string
  onClick?: () => void
  children?: string
}

const Button = ({ type, title, onClick, children }: Props) => {
  if (type === 'button') {
    children = 'Mais detalhes'
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  if (type === 'cart') {
    children = 'Adicionar ao carrinho - R$ 60,90'
    return (
      <ButtonContainer title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  children = 'Saiba mais'
  return (
    <ButtonLink to="/categories" title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
