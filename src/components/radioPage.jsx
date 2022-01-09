import React from 'react'
import Marquee from 'react-double-marquee'
import axios from 'axios'
import useWebSocket, { ReadyState } from 'react-use-websocket'
import {
  Badge,
  CardContent,
  CardMedia,
  Chip,
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
  const audioSource = cfg.urls.radio[0].audioUrl
  const stationTitle = cfg.urls.radio[0].title
  const stationSocketUrl = cfg.urls.radio[0].wss
  const matches = useMediaQuery('(min-width: 600px)')
  const [nowPlayingStats, setNowPlayingStats] = React.useState({
    songtitle: 'LOADING...',
  })
  const { lastMessage } = useWebSocket(stationSocketUrl)

  React.useEffect(() => {
    if (lastMessage !== null) {
      const data = JSON.parse(lastMessage.data)
      setNowPlayingStats({
        songtitle: data.now_playing.song.title,
        currentlisteners: data.listeners.current,
        live: data.live.is_live,
      })
    }
  }, [lastMessage])

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
              {nowPlayingStats.songtitle || `${stationTitle} OFFLINE...`}
            </Marquee>
          </Typography>
          <Typography
            variant="caption"
            color="primary"
            align="center"
            component="p"
          >
            <Chip label={`PENDENGAR: ${nowPlayingStats.currentlisteners}`}>
              {' '}
            </Chip>
          </Typography>
        </CardContent>
        {nowPlayingStats.live ? (
          <Badge badgeContent={'LIVE'} color="primary">
            <LoadableAudioPlayer src={audioSource} />
          </Badge>
        ) : (
          <LoadableAudioPlayer src={audioSource} />
        )}
      </div>
    </Container>
  )
}
