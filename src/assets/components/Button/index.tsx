import { ButtonContainer, ButtonLink } from './style'

type Props = {
  type: 'button' | 'link' | 'cart'
  title: string
  preco?: string
  to?: string
  onClick?: () => void
  children?: string
}

const Button = ({ type, title, preco, to, onClick, children }: Props) => {
  if (type === 'button') {
    children = 'Mais detalhes'
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  if (type === 'cart') {
    children = `Adicionar ao carrinho - ${preco}`
    return (
      <ButtonContainer title={children} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  children = 'Saiba mais'
  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
