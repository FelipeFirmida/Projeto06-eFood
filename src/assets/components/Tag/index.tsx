import { TagContainer } from './styles'

export type Props = {
  children: string | number
}

const Tag = ({ children }: Props) => <TagContainer>{children}</TagContainer>

export default Tag
