import React from 'react'
import { Email, Info, Telegram } from '@material-ui/icons'
import { styled } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import cfg from '../utils/config'

const IconLink = styled('a')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 'calc(1.2em + 1vw)',
  textLeft: 'center',
  textDecoration: 'none',
  margin: '0.5rem',
  '&:hover': {
    color: theme.palette.primary.light,
  },
}))

const Container = styled('div')({
  padding: '2em 6em',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  flexDirection: 'column',
  '@media (max-width: 800px)': {
    padding: '1em 2em',
  },
})

const Links = styled('div')({
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  margin: '1em 0',
  textAlign: 'center',
})

const Footer = styled('footer')({
  padding: '2em',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  bottom: 0,
})

export default function About() {
  return (
    <>
      <Container>
        <Typography color="primary" variant="body1">
          Ini adalah aplikasi web untuk Radio Ibnul Qoyyim Balikpapan Kalimantan
          Timur - Indonesia. Untuk informasi lebih lanjut, kunjungi website atau
          sosial media kami:
        </Typography>
        <Links>
          <IconLink href={cfg.urls.mainSite}>
            <Info />
          </IconLink>
          <IconLink href={cfg.urls.telegram}>
            <Telegram />
          </IconLink>
          <IconLink href={cfg.urls.email}>
            <Email />
          </IconLink>
        </Links>
      </Container>
      <Footer>
        <Typography color="primary" variant="body2">
          © {new Date().getFullYear()} Radio Ibnul Qoyyim
        </Typography>
      </Footer>
    </>
  )
}
