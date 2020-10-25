import React from "react"
import Parser from "rss-parser"
import Paper from "@material-ui/core/Paper"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from '@material-ui/core/Avatar'
import ListItemText from "@material-ui/core/ListItemText"
import Typography from '@material-ui/core/Typography';
import RadioIcon from '@material-ui/icons/Radio';
import ListIcon from '@material-ui/icons/List';
import Switch from "@material-ui/core/Switch"
import store from "store/dist/store.modern"
import { styled, useTheme } from "@material-ui/core/styles"

import AudioContext from "../contexts/audioContext"
import AudioPlayer from "./audioPlayer"
import cfg from "../utils/config"
import { isUndefined } from "lodash"

const Container = styled('div')({
  padding: "0 2em",
  display: "flex",
  width: "100%",
  alignItems: "center",
  flexDirection: "column",
  "@media (max-width: 800px)": {
    padding: "0 1em",
  }
})


const ListControls = styled('div')({
  padding: "0 2em",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
})

let parser = new Parser()

export default function Archive () {
  const theme = useTheme();
  const { 
    radioMode,
    setRadioMode,
    audioSource, 
    setAudioSource, 
    audioTitle, 
    setAudioTitle, 
    audioImage, 
    setAudioImage } = React.useContext(AudioContext)
  const [podcasts, setPodcasts]= React.useState([])

  const stations = [
    {
      audioUrl: cfg.urls.radio1.audioUrl,
      title: "RADIO IQ - SALURAN 1",
      imageUrl: cfg.urls.radio1.imageUrl
    },
    {
      audioUrl: cfg.urls.radio2.audioUrl,
      title: "RADIO IQ - SALURAN 2",
      imageUrl: cfg.urls.radio2.imageUrl
    },
    {
      audioUrl: cfg.urls.radio2.audioUrl,
      title: "RADIO IQ - SALURAN 3",
      imageUrl: cfg.urls.radio2.imageUrl
    }
  ]

  React.useEffect(() => {
    if (isUndefined(store.get("podcasts"))) {
        parser.parseURL(cfg.urls.rss).then( feed => {
          const newPodcasts = feed.items.map((item) => ({
            id: item.link,
            title: item.title,
            audioUrl: item.enclosure.url,
            date: item.isoDate,
            imageUrl: item.itunes.image,
            duration: item.itunes.duration,
          }))
          store.set("podcasts", newPodcasts)
          setPodcasts(newPodcasts)
        })
    } else {
      setPodcasts(store.get("podcasts"))
    }
  }, [])
  
  return (
    <Container>
      <AudioPlayer 
        radioMode
        audioSource={audioSource}
        audioTitle={audioTitle}
        audioImage={audioImage}
      />
        <ListControls>
        
          <Tabs
            value={!radioMode * 1}
            indicatorColor="primary"
            textColor="primary"
            onChange={(e, v) => 
              setRadioMode(v == 0)
            }
            aria-label="tab"
          >
            <Tab label="RADIO" icon={<RadioIcon/>}/>
            <Tab label="ARSIP" icon={<ListIcon/>}/>
          </Tabs>
       
          </ListControls>
        <List dense >
        {!radioMode && podcasts.map(podcast => {
          return (
            <ListItem key={podcast.id} button onClick={() => {
              setAudioSource(podcast.audioUrl)
              setAudioTitle(podcast.title)
              setAudioImage(podcast.imageUrl)
              }}>
              <ListItemAvatar>
                <Avatar
                  alt="episode image"
                  src={podcast.imageUrl}
                />
              </ListItemAvatar>
              <ListItemText id={podcast.id} primary={podcast.title} />
            </ListItem>
          ); 
          })}
          {radioMode && stations.map(station => {
          return (
            <ListItem key={station.title} button onClick={() => {
              setAudioSource(station.audioUrl)
              setAudioTitle(station.title)
              setAudioImage(station.imageUrl)
              }}>
              <ListItemAvatar>
                <Avatar
                  alt="station image"
                  src={station.imageUrl}
                />
              </ListItemAvatar>
              <ListItemText id={station.title} primary={station.title} />
            </ListItem>
          ); 
          })}
        </List>
    </Container>
  )
}