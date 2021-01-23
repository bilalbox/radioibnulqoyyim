import React from 'react'
import Marquee from 'react-double-marquee'
import axios from 'axios'
import {
  Button,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from '@material-ui/core'
import { makeStyles, styled } from '@material-ui/core/styles'
import Loadable from 'react-loadable'

import cfg from '../utils/config'

const LoadableAudioPlayer = Loadable({
  loader: () => import('./audioPlayer'),
  loading() {
    return <div>Loading...</div>
  },
})

const useStyles = makeStyles((theme) => ({
  cover: {
    width: '20vw',
    height: '20vw',
    borderRadius: '10vw',
    '@media (max-width: 1300px)': {
      width: '30vw',
      height: '30vw',
      borderRadius: '15vw',
    },
    '@media (max-width: 600px)': {
      width: '60vw',
      height: '60vw',
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '20vw',
    backgroundColor: theme.palette.background.default,
    '@media (max-width: 1300px)': {
      width: '30vw',
    },
    '@media (max-width: 600px)': {
      width: '100vw',
    },
  },
}))

const Container = styled('div')({
  padding: '0 1em',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  flexDirection: 'column',
})

export default function AudioPage() {
  const classes = useStyles()
  const matches = useMediaQuery('(min-width: 600px)')
  const [nowPlayingStats, setNowPlayingStats] = React.useState({
    songtitle: 'LOADING...',
  })
  const [audioSource, setAudioSource] = React.useState(
    cfg.urls.radio[0].audioUrl
  )
  const [audioInfo, setAudioInfo] = React.useState(cfg.urls.radio[0].audioInfo)
  const [audioTitle, setAudioTitle] = React.useState(cfg.urls.radio[0].title)
  const [currentStation, setCurrentStation] = React.useState(1)

  React.useEffect(() => {
    if (audioInfo)
      axios
        .get(audioInfo, { timeout: 15000, origin: 'anonymous' })
        .then((res) => {
          setNowPlayingStats(res.data)
        })
        .catch((error) => {
          console.error('Error: ', error)
          setNowPlayingStats({
            songtitle: '',
            currentlisteners: 0,
          })
        })
  }, [audioInfo])

  return (
    <Container>
      <div className={classes.root}>
        {matches && (
          <CardMedia className={classes.cover} image={cfg.urls.logo} />
        )}
        <CardContent
          style={{
            width: '100%',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          <Typography
            variant={matches ? 'h6' : 'body1'}
            align="center"
            component="span"
          >
            <Marquee direction="left" delay={0} childMargin={50}>
              {nowPlayingStats.songtitle || `${audioTitle} OFFLINE...`}
            </Marquee>
          </Typography>
          <Typography
            variant="caption"
            color="primary"
            align="center"
            component="p"
          >
            PENDENGAR: {nowPlayingStats.currentlisteners}
          </Typography>
        </CardContent>
        <LoadableAudioPlayer src={audioSource} />
      </div>
      <div className={classes.root}>
        <Button
          variant="contained"
          color={currentStation === 1 ? 'primary' : 'secondary'}
          style={{ marginTop: 5 }}
          onClick={() => {
            setCurrentStation(1)
            setAudioSource(cfg.urls.radio[0].audioUrl)
            setAudioTitle(cfg.urls.radio[0].title)
            setAudioInfo(cfg.urls.radio[0].audioInfo)
          }}
        >
          SALURAN 1
        </Button>
        <Button
          variant="contained"
          color={currentStation === 2 ? 'primary' : 'secondary'}
          style={{ marginTop: 5 }}
          onClick={() => {
            setCurrentStation(2)
            setAudioSource(cfg.urls.radio[1].audioUrl)
            setAudioTitle(cfg.urls.radio[1].title)
            setAudioInfo(cfg.urls.radio[1].audioInfo)
          }}
        >
          SALURAN 2
        </Button>
        <Button
          variant="contained"
          color={currentStation === 3 ? 'primary' : 'secondary'}
          style={{ marginTop: 5 }}
          onClick={() => {
            setCurrentStation(3)
            setAudioSource(cfg.urls.radio[2].audioUrl)
            setAudioTitle(cfg.urls.radio[2].title)
            setAudioInfo(cfg.urls.radio[2].audioInfo)
          }}
        >
          SALURAN 3
        </Button>
      </div>
    </Container>
  )
}
