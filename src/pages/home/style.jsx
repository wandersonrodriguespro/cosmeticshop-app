import styled from 'styled-components'
import { theme } from '../../styles/theme'
import HomeBg from '../../assets/img/bg-home.jpg'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-weight: 600;
  color: ${theme.colors.dark};
`

export const Image = styled.div`
  width: 100%;
  height: 90%;
  background-image: url(${HomeBg});
  border: none;
  background-size: cover;

  display: flex;
  padding: 0 50px;
`

export const ContentBanner = styled.div`
  max-width: 45rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-direction: column;
  color: ${theme.colors.white};
  margin-left: 5rem;

  h4 {
    font-size: 1.3rem;
    letter-spacing: 0.14rem;
  }

  h2 {
    line-height: 1.1em;
    font-size: 5rem;
  }

  span {
    color: ${theme.colors.secondary};
    font-style: italic;
    font-size: 5rem;
    font-weight: 100;
  }

  p {
    font-size: 1.125rem;
    letter-spacing: 0.03rem;
  }
`
