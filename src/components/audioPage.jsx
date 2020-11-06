import React from 'react'
import Parser from 'rss-parser'
import Marquee from 'react-double-marquee'
import { isUndefined } from 'lodash'
import axios from 'axios'
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from '@material-ui/core'
import { Radio as RadioIcon, List as ListIcon } from '@material-ui/icons'
import store from 'store/dist/store.modern'
import { makeStyles, styled } from '@material-ui/core/styles'

import AudioPlayer from './audioPlayer'
import cfg from '../utils/config'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '60vw',
    '@media (max-width: 800px)': {
      width: '100vw',
      backgroundColor: theme.palette.background.default,
    },
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  cover: {
    width: '10vw',
    height: '10vw',
    marginBottom: '3vw',
    '@media (max-width: 800px)': {
      width: '20vw',
      height: '20vw',
      marginBottom: '1vw',
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
  const [podcasts, setPodcasts] = React.useState([])
  const [currentTab, setCurrentTab] = React.useState(0)
  const [nowPlayingName, setNowPlayingName] = React.useState('')
  const [audioSource, setAudioSource] = React.useState(
    cfg.urls.radio[0].audioUrl
  )
  const [audioInfo, setAudioInfo] = React.useState(cfg.urls.radio[0].audioInfo)
  const [audioTitle, setAudioTitle] = React.useState(cfg.urls.radio[0].title)
  const [audioImage, setAudioImage] = React.useState(cfg.urls.logo)

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
        .get(audioInfo)
        .then((res) => setNowPlayingName(res.data))
        .catch((err) => console.error('Error: ', err))
  }, [audioInfo])

  return (
    <Container>
      <CardMedia className={classes.cover} image={audioImage} />

      <Card className={classes.root}>
        {audioInfo && (
          <>
            <CardContent>
              <Typography variant="h6" align="center">
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
              <Marquee direction="left" delay={0} speed={0.02}>
                <Typography variant="h6" component="span">
                  {nowPlayingName}
                </Typography>
              </Marquee>
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
              <Marquee direction="left" delay={0} speed={0.02}>
                <Typography variant="h6" component="span">
                  {audioTitle}
                </Typography>
              </Marquee>
            </CardContent>
          </>
        )}
        <AudioPlayer audioSource={audioSource} />
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
