import Button from '../../components/Button'
import Header from '../../components/Header'
import { Container, ContentBanner, Image } from './style'

function Home() {
  return (
    <Container>
      <Header />
      <Image>
        <ContentBanner>
          <h4>LANÇAMENTOS</h4>
          <h2>
            Metálicos <span>Brilhe</span> já
          </h2>
          <p>
            Conheça nossas novas sombras com acabamento brilhante, toque suave e
            leve com 10 horas de durabilidade
          </p>
          <Button title="Comprar" />
        </ContentBanner>
      </Image>
    </Container>
  )
}

export default Home
