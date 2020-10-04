import React from "react"
import styled from "styled-components"
import { GoRadioTower } from "react-icons/go"
import RadioPlayer from "./radioPlayer"

const RadioTower = styled(GoRadioTower)`
  color: var(--textTitle);
  font-size: 5em;
  @media (max-width: 800px) {
    font-size: 3em;
  }
`

const Container = styled.div`
  padding: 0 4em;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  @media (max-width: 800px) {
    padding: 0em 2em;
  }
`

const Body = styled.div`
  height: auto;
  min-height: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: top;
  position: relative;
  text-align: center;
  flex-direction: column;
  }

  .page-wrap {
    overflow: auto;
  }
`

export default function Landing() {
  return (
    <Body>
      <Container>
        <RadioTower />
      </Container>
      <RadioPlayer />
    </Body>
  )
}
