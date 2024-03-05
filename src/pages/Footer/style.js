import { styled } from 'styled-components'

import { theme } from '../../styles/theme'

export const Container = styled.div`
  background-color: ${theme.colors.black};
`

export const Spacer = styled.div`
  width: 100%;
  height: 6vh;
`

export const Content = styled.div`
  background-color: ${theme.colors.black};
  border-top: 1px solid ${theme.colors.neutral};
  border-bottom: 1px solid ${theme.colors.neutral};
  /* height: 60vh; */
  width: 100%;
  padding-bottom: 4rem;

  display: flex;
  gap: 1rem;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 7rem;
`

export const Collum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  div {
    padding-bottom: 1.23rem;

    a {
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
  }
`

export const Title = styled.h1`
  font-size: 2rem;
  color: ${theme.colors.white};
  padding-bottom: 2rem;
`

export const Link = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: ${theme.colors.light};
  cursor: pointer;
  line-height: 1.7rem;
  position: relative;

  &:hover {
    color: ${theme.colors.secondary};
  }

  &::after {
    content: '';
    width: 0%;
    height: 2px;
    background-color: ${theme.colors.secondary};
    position: absolute;
    bottom: 3px;
    left: 0;
    transition: 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`

export const Text = styled.p`
  font-size: 1rem;
  color: ${theme.colors.light};
`

export const Icons = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: ${theme.colors.white};
    font-size: 1.5rem;
    position: relative;
    transition: 0.3s ease-in-out;

    &:hover {
      color: ${theme.colors.secondary};
    }

    &::after {
      display: none;
    }
  }
`

export const TextCopy = styled.p`
  padding: 1rem;
  font-size: 1.1rem;
  line-height: 1.4rem;
  color: ${theme.colors.light};
  display: flex;
  justify-content: center;

  span {
    color: ${theme.colors.secondary};
    margin-left: 0.4rem;
  }
`
