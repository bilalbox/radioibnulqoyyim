import React from 'react'
import Parser from 'rss-parser'
import Marquee from 'react-double-marquee'
import Loadable from 'react-loadable'
import { isUndefined } from 'lodash'
import axios from 'axios'
import {
  Avatar,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from '@material-ui/core'
import { Radio as RadioIcon, List as ListIcon } from '@material-ui/icons'
import store from 'store/dist/store.modern'
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
      backgroundColor: theme.palette.background.default,
    },
    '@media (max-width: 600px)': {
      width: '100vw',
      backgroundColor: theme.palette.background.default,
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
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: theme.spacing(1),
  },
}))

const Container = styled('div')({
  padding: '0 1em',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  flexDirection: 'column',
})

let parser = new Parser()

export default function AudioPage() {
  const classes = useStyles()
  const matches = useMediaQuery('(min-width: 600px)')
  const [podcasts, setPodcasts] = React.useState([])
  const [currentTab, setCurrentTab] = React.useState(0)
  const [nowPlayingName, setNowPlayingName] = React.useState('')
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
    if (isUndefined(store.get('podcasts'))) {
      parser.parseURL(cfg.urls.rss).then((feed) => {
        const newPodcasts = feed.items.map((item) => ({
          id: item.link,
          title: item.title,
          audioUrl: item.enclosure.url,
          date: item.isoDate,
          imageUrl: item.itunes.image,
          duration: item.itunes.duration,
        }))
        store.set('podcasts', newPodcasts)
        setPodcasts(newPodcasts)
      })
    } else {
      setPodcasts(store.get('podcasts'))
    }
  }, [])

  React.useEffect(() => {
    if (audioInfo)
      axios
        .get(audioInfo, { timeout: 10000 })
        .then((res) => setNowPlayingName(res.data))
        .catch((err) => console.error('Error: ', err))
  }, [audioInfo])

  return (
    <Container>
      <div className={classes.root}>
        {matches && <CardMedia className={classes.cover} image={audioImage} />}
        {audioInfo && (
          <>
            <CardContent>
              <Typography variant={matches ? 'h6' : 'body1'} align="center">
                {audioTitle}
              </Typography>
            </CardContent>
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
                <Marquee direction="left" delay={0}>
                  {nowPlayingName}
                </Marquee>
              </Typography>
            </CardContent>
          </>
        )}

        {!audioInfo && (
          <>
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
                <Marquee direction="left" delay={0}>
                  {audioTitle}
                </Marquee>
              </Typography>
            </CardContent>
          </>
        )}
        <LoadableAudioPlayer audioSource={audioSource} />
      </div>
      <div className={classes.controls}>
        <Tabs
          value={currentTab}
          indicatorColor="primary"
          textColor="primary"
          onChange={(e, v) => setCurrentTab(v)}
          aria-label="tab"
        >
          <Tab label="RADIO" icon={<RadioIcon />} />
          <Tab label="ARSIP" icon={<ListIcon />} />
        </Tabs>
      </div>
      <List dense>
        {currentTab === 0 &&
          cfg.urls.radio.map((station) => {
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
        {currentTab === 1 &&
          podcasts.map((podcast) => {
            return (
              <ListItem
                key={podcast.id}
                selected={podcast.audioUrl === audioSource}
                button
                onClick={() => {
                  setAudioSource(podcast.audioUrl)
                  setAudioTitle(podcast.title)
                  setAudioImage(podcast.imageUrl)
                  setAudioInfo(null)
                }}
              >
                <ListItemAvatar>
                  <Avatar alt="episode image" src={podcast.imageUrl} />
                </ListItemAvatar>
                <ListItemText id={podcast.id} primary={podcast.title} />
              </ListItem>
            )
          })}
      </List>
    </Container>
  )
}
