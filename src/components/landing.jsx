import React from "react"
import { GoRadioTower } from "react-icons/go"
import { styled, withTheme } from "@material-ui/core/styles"

import RadioPlayer from "./radioPlayer"


const RadioTower = styled(GoRadioTower)(({
  theme
}) => ({
  color: theme.palette.primary.main,
  fontSize: theme.typography.h1,
  width: "5em",
  height: "5em",
  }))

const Container = styled('div')({
  padding: "0 4em",
  display: "flex",
  width: "100%",
  alignItems: "center",
  flexDirection: "column",
  })

const Body = styled('div')({
  height: "auto",
  minHeight: "100%",
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "top",
  position: "relative",
  textAlign: "center",
  flexDirection: "column",
 })


function Landing({ theme }) {
  return (
    <Body>
      <Container>
          <RadioTower color={theme.palette.primary.main}/>
      </Container>
      <RadioPlayer />
    </Body>
  )
}

export default withTheme(Landing);