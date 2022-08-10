import React from 'react'
import axios from 'axios'
import {
  CardContent,
  CardMedia,
  Chip,
  Typography,
  useMediaQuery,
} from '@material-ui/core'
import { makeStyles, styled } from '@material-ui/core/styles'
import Loadable from 'react-loadable'
import useInterval from '../hooks/useInterval'
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
  const delay = 10000 // milliseconds
  const audioSource = cfg.urls.radio[0].audioUrl
  const audioInfo = cfg.urls.radio[0].audioInfo
  const [nowPlayingStats, setNowPlayingStats] = React.useState({
    songtitle: 'LOADING...',
    currentlisteners: 0,
    live: false,
  })

  React.useEffect(() => {
    axios
      .get(audioInfo, { timeout: 5000, origin: 'anonymous' })
      .then((res) => {
        setNowPlayingStats({
          songtitle: res.data.icestats.source[0].title,
          currentlisteners: res.data.icestats.source[0].listeners,
          live: false,
        })
      })
      .catch((error) => console.error('Error: ', error))
  }, [audioInfo])

  useInterval(() => {
    axios
      .get(audioInfo, { timeout: 15000, origin: 'anonymous' })
      .then((res) => {
        setNowPlayingStats({
          songtitle: res.data.icestats.source[0].title,
          currentlisteners: res.data.icestats.source[0].listeners,
          live: false,
        })
      })
      .catch((error) => console.error('Error: ', error))
  }, delay)

  return (
    <Container>
      <div className={classes.root}>
        {matches && (
          <CardMedia className={classes.cover} image={cfg.urls.logo} />
        )}
        <CardContent
          style={{
            width: '100%',
          }}
        >
          <Typography
            variant={matches ? 'h6' : 'body1'}
            align="center"
            component="p"
          >
            {nowPlayingStats.songtitle}
          </Typography>
          <Typography
            variant="caption"
            color="primary"
            align="center"
            component="p"
          >
            <Chip label={`PENDENGAR: ${nowPlayingStats.currentlisteners}`} />
            {nowPlayingStats.live && <Chip label="LIVE" color="primary" />}
          </Typography>
        </CardContent>
        <LoadableAudioPlayer src={audioSource} />
      </div>
    </Container>
  )
}
