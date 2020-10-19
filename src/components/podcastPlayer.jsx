import React from "react"
import AudioPlayer from "react-h5-audio-player"
import { Paper } from "@material-ui/core"
import { styled } from "@material-ui/core/styles"
import "react-h5-audio-player/lib/styles.css"

const Player = styled(AudioPlayer)(({theme}) => ({

  width: "auto",
  display: "flex",
  height: "auto",
  marginBottom: "2em",
  backgroundColor: "var(--panel)",
  color: "var(--textTitle)",
  textAlign: "center",

  button: {
    backgroundColor: "var(--panel)",
    color: "var(--textTitle)",
  },

  ".rhap_header": {
    backgroundColor: theme.palette.secondary.main,
  },

  ".rhap_controls-section": {
    backgroundColor: theme.palette.secondary.main,
  },

  ".rhap_progress-section": {
    backgroundColor: theme.palette.secondary.main,
  },

  ".rhap_progress-container": {
    backgroundColor: theme.palette.secondary.main,
  },

  ".rhap_progress-bar": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.light,
  },

  ".rhap_progress-indicator": {
    backgroundColor: theme.palette.primary.main,
  },

  ".rhap_main": {
    backgroundColor: theme.palette.secondary.main,
  },

  ".rhap_main-controls": {
    backgroundColor: theme.palette.secondary.main,
  },

  ".rhap_current-time": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.light,
  },

  ".rhap_total-time": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.light,
  },
}))


export default function PodcastPlayer({ title, audioUrl }) {
  return (
    <Paper elevation={3}>
      <Player
        header={title}
        src={audioUrl}
        customAdditionalControls={[]}
        customVolumeControls={[]}
        layout="stacked-reverse"
        preload="metadata"
      />
    </Paper>
  )
}
