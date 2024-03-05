import {
  Collum,
  Container,
  Content,
  Icons,
  Link,
  Spacer,
  Title,
  Text,
  TextCopy
} from './style'
import { FiInstagram } from 'react-icons/fi'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <Container>
      <Spacer />
      <Content>
        <Collum>
          <Title>Nossa Loja</Title>
          <div>
            <Text>Rua Prates, 194 - Bom Retiro</Text>
            <Text>São Pualo - SP, 01121-000</Text>
          </div>
          <div>
            <Text>Segunda a Sexta: 11:00 às 22:00</Text>
            <Text>Sábado e Domingo: 11:00 às 00:00</Text>
          </div>
          <div>
            <Text>Tel: (11) 3456-7890</Text>
            <Text>E-mail: info@meusite.com</Text>
          </div>
        </Collum>

        <Collum>
          <Title>Compre</Title>
          <Link>Todos os produtos</Link>
          <Link>Novidades</Link>
          <Link>Mais vendidos</Link>
          <Link>Lábios</Link>
          <Link>Olhos</Link>
          <Link>Rosto</Link>
        </Collum>

        <Collum>
          <Title>Políticas</Title>
          <Link>Entregas e devoluções</Link>
          <Link>Política da loja</Link>
          <Link>Métodos de pagamento</Link>
          <Link>Política de Cookies</Link>
          <Link>FAQ</Link>
        </Collum>

        <Collum>
          <Title>Atendimento</Title>
          <div>
            <Text>Tel: (11) 3456-7890</Text>
            <Link>E-mail: info@meusite.com</Link>
          </div>

          <div>
            <Icons>
              <a href="">
                <FiInstagram className="icon" />
              </a>
              <a href="">
                <FaFacebookF className="icon" />
              </a>
              <a href="">
                <FaYoutube className="icon" />
              </a>
              <a href="">
                <FaTwitter className="icon" />
              </a>
            </Icons>
          </div>
        </Collum>
      </Content>
      <TextCopy> © 2024 Orgulhosamente criado por <span>Dev Partners</span></TextCopy>
    </Container>
  )
}

export default Footer
