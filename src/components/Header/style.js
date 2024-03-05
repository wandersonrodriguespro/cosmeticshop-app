import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const Container = styled.div`
  width: 100%;
  height: 12%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.colors.primary};
  padding: 0rem 3rem;

  h1 {
    font-size: 1.5rem;
    color: ${theme.colors.white};
    cursor: pointer;
  }

  span {
    color: ${theme.colors.secondary};
    font-style: italic;
  }
`

export const NavLink = styled.div`
  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
  }

  li {
    color: ${theme.colors.white};
    cursor: pointer;
    font-size: 1rem;
    font-weight: normal;
    transition: 0.3s ease-in-out;
    position: relative;
    letter-spacing: 0.03rem;

    &:hover {
      color: ${theme.colors.secondary};
    }

    &::after {
      content: '';
      width: 0%;
      height: 2px;
      background-color: ${theme.colors.secondary};
      position: absolute;
      bottom: -2px;
      left: 0;
      transition: 0.5s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
  }
`

export const Users = styled.div`
  display: flex;
  gap: 1.5rem;
  font-size: 1.75rem;
  color: ${theme.colors.white};
  align-items: center;

  h1 span {
    color: ${theme.colors.secondary};
    font-style: italic;
    font-size: 5rem;
    font-weight: 100;
  }

  div {
    display: flex;
    gap: 0.125rem;
    align-items: center;
    cursor: pointer;
    transition: 0.5s ease-in-out;

    &:hover {
      color: ${theme.colors.secondary};
    }
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.03rem;
  }

  .iconSearch {
    cursor: pointer;
    transition: 0.5s ease-in-out;

    &:hover {
      color: ${theme.colors.secondary};
    }
  }
`
