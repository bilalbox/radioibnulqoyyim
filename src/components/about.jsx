import React from "react"
import styled from "styled-components"
import {
  IoMdInformationCircle,
  IoMdMail,
  IoLogoYoutube,
  IoMdMic,
} from "react-icons/io"
import { FaTelegram } from "react-icons/fa"
import cfg from "../utils/config"

const IconLink = styled.a`
  color: var(--textTitle);
  font-size: calc(1.2em + 1vw);
  text-left: center;
  text-decoration: none;
  margin: 0.5rem;

  &:hover {
    color: var(--hover);
  }
`
const Container = styled.div`
  padding: 2em 6em;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  @media (max-width: 800px) {
    padding: 1em 2em;
  }
`

const Links = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin: 1em 0;
  text-align: center
  }
`

const Footer = styled.footer`
  padding: 2em;
  display: flex;
  width: 100%;
  align-items: center;
  position: absolute;
  bottom: 0;
`

const FooterText = styled.p`
  color: var(--textNormal);
  font-weight: 100;
  text-align: center;
  width: 100%;
`

export default function About() {
  return (
    <>
      <Container>
        <p>
          Ini adalah aplikasi web untuk Radio Ibnul Qoyyim Balikpapan Kalimantan
          Timur - Indonesia. Untuk informasi lebih lanjut, kunjungi website atau
          sosial media kami:
        </p>
        <Links>
          <IconLink href={cfg.urls.mainSite}>
            <IoMdInformationCircle />
          </IconLink>
          <IconLink href={cfg.urls.youtube}>
            <IoLogoYoutube />
          </IconLink>
          <IconLink href={cfg.urls.podcast}>
            <IoMdMic />
          </IconLink>
          <IconLink href={cfg.urls.telegram}>
            <FaTelegram />
          </IconLink>
          <IconLink href={cfg.urls.email}>
            <IoMdMail />
          </IconLink>
        </Links>
      </Container>
      <Footer>
        <FooterText>© {new Date().getFullYear()} Radio Ibnul Qoyyim</FooterText>
      </Footer>
    </>
  )
}
