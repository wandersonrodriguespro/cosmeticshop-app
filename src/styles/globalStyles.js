import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
}

body{
    -webkit-font-smoothing:antialiased;
    background-color: ${theme.colors.neutral};
    font-family: "Wix Madefor Text", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
}
`
