import { ButtonContainer, ButtonLink } from './style'

type Props = {
  type: 'button' | 'link' | 'cart' | 'deliver'
  title: string
  preco?: string
  to?: string
  onClick?: () => void
  children?: string
  disabled?: boolean
}

const Button = ({ type, title, preco, to, onClick, children }: Props) => {
  if (type === 'button') {
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

  if (type === 'deliver') {
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
