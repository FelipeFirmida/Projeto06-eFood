import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

import logo from '../../images/logo.png'
import insta from '../../images/insta-logo.png'
import face from '../../images/face-logo.png'
import twit from '../../images/twitter-logo.png'

// const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>
          <img src={logo} alt="EFOOD" />
        </SectionTitle>
        <Links>
          <li>
            <Link>
              <img src={insta} alt="Instagram" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={face} alt="Facebook" />
            </Link>
          </li>
          <li>
            <Link>
              <img src={twit} alt="Twitter" />
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br />
        dos produtos é toda do estabelecimento contratado.
      </p>
    </div>
  </Container>
)

export default Footer
