import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

:root {
  --color-white: hsl(0, 0%, 100%);
  --color-black: hsl(0, 0%, 0%);
  --color-dark-gray: hsl(0, 0%, 55%);
  --color-very-dark-gray: hsl(0, 0%, 41%);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Alata", "Josefin Sans", sans-serif;
  color: var(--color-very-dark-gray);
  line-height: 1.5;
  font-size: 1.5rem;
}

button{
  font: inherit;
  color: inherit;
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}
`

export default GlobalStyles
