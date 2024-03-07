import { styled } from 'styled-components'

import { theme } from '../../styles/theme'

export const Container = styled.div`
  background-color: ${theme.colors.black};
`
export const Subscribe = styled.div`
  width: 100%;
  height: 33.438rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
    line-height: 3.5rem;
    color: ${theme.colors.white};
    text-align: center;
    font-weight: 700;
  }
  span {
    font-weight: 300;
    font-style: italic;
    color: ${theme.colors.secondary};
  }

  h6 {
    font-size: 2rem;
    line-height: 2.5rem;
    letter-spacing: 0.09rem;
    margin-top: 1.5rem;
    color: ${theme.colors.white};
    text-align: center;
  }
`
export const InputList = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;

  label {
    font-size: 1.15rem;
    color: ${theme.colors.white};
  }

  div {
    display: flex;
    height: 6rem;
    width: 100%;
    padding-top: 0.75rem;
  }

  input {
    border: 2px solid ${theme.colors.white};
    height: 3rem;
    border-right: none;
    background-color: transparent;
    outline: none;
    min-width: 700px;
    font-size: 1.5rem;
    color: ${theme.colors.white};
    padding-left: 1rem;

    &::placeholder {
      color: ${theme.colors.white};
      padding-left: 1rem;
    }

    &:hover {
      border: 1px solid ${theme.colors.secondary};
      border-right: none;
    }
  }
`

export const Content = styled.div`
  background-color: ${theme.colors.black};
  border-top: 1px solid ${theme.colors.neutral};
  border-bottom: 1px solid ${theme.colors.neutral};
  height: 50vh;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`

export const MainFooter = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  align-items: flex-start;
  /* padding-top: 7rem; */
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
    bottom: 1px;
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
    font-weight: 700;
  }
`
