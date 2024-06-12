import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

body {
  margin: 0;
  box-sizing: border-box;
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: var(--font-family-main); 
}

:root {
  --text-color-primary: #FFFFFF;
  --text-color-secondary: #FFEDD8;
  --headline-color: #FFFFFF;
  --background-color: #030401;
  --textbox-background: #161822;
  --button-color: #CF4B14;
  --menu-active-color: #CF4B14;
  --menu-hover-color: #CF4B14;
  --font-family-headlines: "Space mono", sans-serif;
  --font-family-text: "Roboto mono", monospace;

  --font-size-h1-desktop: 64px;
  --font-size-h2-desktop: 26px;
  --font-size-h3-desktop: 24px;
  --font-size-small: 16px;
  --font-size-medium: 18px;
  --font-size-large: 20px;

  --font-size-h1-mob: 36px;
  --font-size-h2-mob: 20px;
  --font-size-h3-mob: 18px;
  --font-size-text-mob: 16px;
}
`

export default GlobalStyles
