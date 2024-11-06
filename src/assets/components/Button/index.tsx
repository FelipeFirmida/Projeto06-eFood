import { ButtonContainer, ButtonLink } from './style'

type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    children = 'Adicionar ao Carrinho'
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
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
