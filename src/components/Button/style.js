import { styled } from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.button`
  background-color: transparent;
  border: 1px solid ${theme.colors.white};
  width: 9rem;
  height: 3rem;
  color: ${theme.colors.white};
  font-size: 1.025rem;
  transition: 0.28s ease-in-out;
  letter-spacing: 0.03rem;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.secondary};
    transform: scale(1.07);
    font-weight: 500;
  }

  &:active {
    /* opacity: 0.7; */
    transform: scale(1.04);
    box-shadow: 0 0 10px ${theme.colors.secondary};
  }
`
