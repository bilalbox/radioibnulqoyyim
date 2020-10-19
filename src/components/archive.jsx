import React from "react"
import Parser from "rss-parser"
import Paper from "@material-ui/core/Paper"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Avatar from '@material-ui/core/Avatar'
import ListItemText from "@material-ui/core/ListItemText"
import Fab from "@material-ui/core/Fab"
import CachedIcon from "@material-ui/icons/Cached"
import ClearIcon from "@material-ui/icons/Clear"
import Tooltip from "@material-ui/core/Tooltip"
import store from "store/dist/store.modern"
import { styled } from "@material-ui/core/styles"

import AppContext from "./appContext"
import PodcastPlayer from "./podcastPlayer"
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

const ControlsContainer = styled('div')({
  padding: "0.2em",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "1em",
  width: "auto",
})

let parser = new Parser()

export default function Archive () {
  const appContext = React.useContext(AppContext)
  const [podcasts, setPodcasts]= React.useState([])

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

  const handleRefresh = () => {
    store.remove("podcasts")
    setPodcasts([])
    }
  
  return (
    <Container>
      <ControlsContainer>
        <Tooltip title="Cek untuk rekaman baru">
          <Fab color="primary" onClick={handleRefresh} size="small">
            <CachedIcon />
          </Fab>
        </Tooltip>
      </ControlsContainer>
      <div>
        <List dense >
        {podcasts.map(podcast => {
          return (
            <ListItem key={podcast.id} button onClick={() => {
              appContext.setAudioSource(podcast.audioUrl)
              appContext.setTrackName(podcast.title)
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
        </List>
      </div>
    </Container>
  )
}