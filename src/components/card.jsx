import React from "react"
import { Paper } from "@material-ui/core"
import styled from "styled-components"

const MyPaper = styled(Paper)`
  padding: 2em 2em;
  background-color: var(--panel);
  display: flex;
  width: auto;
  align-items: center;
  @media (max-width: 800px) {
    padding: 1em 1em;
  }
`

export default function Card({ children }) {
  return <MyPaper elevation={3}>{children}</MyPaper>
}
