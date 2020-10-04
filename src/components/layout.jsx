import React from "react"
import { createGlobalStyle } from "styled-components"

import Drawer from "./drawer"

const colors = {
  blueJeans: "#0AADFF",
  platinum: "#EBEBEB",
  gainsboro: "#E0E0E0",
  gray: "#B3B7BC",
  richBlack: "#131315",
  jet: "#2A2B2E",
  onyx: "#3A3C40",
  cinnabar: "#F24333",
  copper: "#B57F50",
  melon: "#F8A7A0",
}

const GlobalStyle = createGlobalStyle`
html 
body {
  --bg: ${colors.platinum};
  --panel: ${colors.gainsboro};
  --textNormal: ${colors.jet};
  --textLight: ${colors.onyx};
  --textTitle: ${colors.cinnabar};
  --textLink: ${colors.cinnabar};
  --hover: ${colors.copper};
  --hr: hsla(0, 0%, 0%, 0.2);

  background-color: var(--bg);
}

body.dark {
  -webkit-font-smoothing: antialiased;

  --bg: ${colors.richBlack};
  --panel: ${colors.jet};
  --textNormal: ${colors.platinum};
  --textLight: ${colors.gray};
  --textTitle: ${colors.blueJeans};
  --textLink: ${colors.blueJeans};
  --hover: ${colors.copper};
  --hr: hsla(0, 0%, 100%, 0.2);
}

footer {

}

* {
  box-sizing: border-box;
}

.label {
  color: var(--textNormal);
}

div {
  color: var(--textNormal);
  transition: color 0.2s ease-out, background 0.2s ease-out;
  text-align: center;
}

div.MuiToolbar-root {
  background-color: var(--panel);
}

h1 {
  margin: 0 0 0 0;
  color: var(--textTitle);
  text-align: center;
}

h2 {
  margin: 0 0 0.25em 0;
  color: var(--textTitle);
  text-align: center;
}

h3 {
  color: var(--textTitle);
  padding: 0 30px;
}

h4 {
  color: var(--textTitle);
  padding: 0 30px 30px 20px;
  a {
    color: white;
    text-decoration: none;
  }
}

p {
  color: var(--textNormal);
  font-weight: 400;
  text-align: center;
}
`

export default function Layout({ children }) {
  return (
    <div id="Layout">
      <GlobalStyle />
      <Drawer />
      {children}
    </div>
  )
}
