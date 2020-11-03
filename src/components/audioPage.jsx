import React from 'react'
import Parser from 'rss-parser'
import {
  Avatar,
  Card,
  CardMedia,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tab,
  Tabs,
} from '@material-ui/core'
import { Radio as RadioIcon, List as ListIcon } from '@material-ui/icons'
import store from 'store/dist/store.modern'
import { makeStyles, styled } from '@material-ui/core/styles'

import AudioContext from '../contexts/audioContext'
import AudioPlayer from './audioPlayer'
import cfg from '../utils/config'
import { isUndefined } from 'lodash'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '20vw',
    '@media (max-width: 1300px)': {
      width: '30vw',
    },
    '@media (max-width: 500px)': {
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
    '@media (max-width: 500px)': {
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
  padding: '0 2em',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  flexDirection: 'column',
  '@media (max-width: 800px)': {
    padding: '0 1em',
  },
})

let parser = new Parser()

export default function AudioPage() {
  const classes = useStyles()
  const {
    audioSource,
    setAudioSource,
    setAudioTitle,
    audioImage,
    setAudioImage,
    setAudioInfo,
    darkMode,
  } = React.useContext(AudioContext)
  const [podcasts, setPodcasts] = React.useState([])
  const [currentTab, setCurrentTab] = React.useState(0)
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

  return (
    <Container>
      <Card className={classes.root}>
        <CardMedia className={classes.cover} image={audioImage} />
        <AudioPlayer audioSource={audioSource} darkMode={darkMode} />
      </Card>
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
        {currentTab == 0 &&
          cfg.urls.radio.map((station) => {
            return (
              <ListItem
                key={station.title}
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
        {currentTab == 1 &&
          podcasts.map((podcast) => {
            return (
              <ListItem
                key={podcast.id}
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
