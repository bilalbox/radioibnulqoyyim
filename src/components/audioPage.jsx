import React from 'react'
import Marquee from 'react-double-marquee'
import Loadable from 'react-loadable'
import axios from 'axios'
import {
  Avatar,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
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
    '@media (max-width: 1300px)': {
      width: '30vw',
      height: '30vw',
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
  const [audioImage, setAudioImage] = React.useState(cfg.urls.logo)

  const LoadableAudioPlayer = Loadable({
    loader: () => import('../components/audioPlayer'),
    loading() {
      return <div>Loading...</div>
    },
  })

  React.useEffect(() => {
    if (audioInfo)
      axios
        .get(audioInfo, { timeout: 10000, origin: 'anonymous' })
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
        {matches && <CardMedia className={classes.cover} image={audioImage} />}
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
            Listeners: {nowPlayingStats.currentlisteners}
          </Typography>
        </CardContent>
        <LoadableAudioPlayer audioSource={audioSource} />
      </div>
      <List dense>
        {cfg.urls.radio.map((station) => {
          return (
            <ListItem
              key={station.title}
              selected={station.audioUrl === audioSource}
              button
              onClick={() => {
                setAudioSource(station.audioUrl)
                setAudioTitle(station.title)
                setAudioImage(cfg.urls.logo)
                setAudioInfo(station.audioInfo)
              }}
            >
              <ListItemAvatar>
                <Avatar alt="station image" src={cfg.urls.logo} />
              </ListItemAvatar>
              <ListItemText id={station.title} primary={station.title} />
            </ListItem>
          )
        })}
      </List>
    </Container>
  )
}
