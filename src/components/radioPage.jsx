import React from 'react'
import Marquee from 'react-double-marquee'
import Loadable from 'react-loadable'
import axios from 'axios'
import {
  CardContent,
  CardMedia,
  Fab,
  Typography,
  useMediaQuery,
} from '@material-ui/core'
import { makeStyles, styled } from '@material-ui/core/styles'

import cfg from '../utils/config'

const useStyles = makeStyles((theme) => ({
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
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
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
  content: {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    alignItems: 'center',
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

  const LoadableAudioPlayer = Loadable({
    loader: () => import('./audioPlayer'),
    loading() {
      return <div>Loading...</div>
    },
  })

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
        <LoadableAudioPlayer audioSource={audioSource} />
      </div>
      <div>
        <Typography variant="h6" component="span">
          SALURAN:
        </Typography>
        <Fab
          size="small"
          color="primary"
          aria-label="Saluran 1"
          style={{ marginInline: 2 }}
          onClick={() => {
            setAudioSource(cfg.urls.radio[0].audioUrl)
            setAudioTitle(cfg.urls.radio[0].title)
            setAudioInfo(cfg.urls.radio[0].audioInfo)
          }}
        >
          <Typography variant="h6">1</Typography>
        </Fab>
        <Fab
          size="small"
          color="primary"
          aria-label="Saluran 2"
          style={{ marginInline: 2 }}
          onClick={() => {
            setAudioSource(cfg.urls.radio[1].audioUrl)
            setAudioTitle(cfg.urls.radio[1].title)
            setAudioInfo(cfg.urls.radio[1].audioInfo)
          }}
        >
          <Typography variant="h6">2</Typography>
        </Fab>
        <Fab
          size="small"
          color="primary"
          aria-label="Saluran 3"
          style={{ marginInline: 2 }}
          onClick={() => {
            setAudioSource(cfg.urls.radio[2].audioUrl)
            setAudioTitle(cfg.urls.radio[2].title)
            setAudioInfo(cfg.urls.radio[2].audioInfo)
          }}
        >
          <Typography variant="h6">3</Typography>
        </Fab>
      </div>
    </Container>
  )
}
