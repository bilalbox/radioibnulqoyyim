import React from "react"
import AudioPlayer from "react-h5-audio-player"
import { Paper } from "@material-ui/core"
import styled from "styled-components"
import "react-h5-audio-player/lib/styles.css"

const Player = styled(AudioPlayer)`
  width: auto;
  display: flex;
  height: auto;
  margin-bottom: 2em;
  background-color: var(--panel);
  color: var(--textTitle);
  text-align: center;

  button {
    background-color: var(--panel);
    color: var(--textTitle);
  }

  .rhap_header {
    background-color: var(--panel);
  }

  .rhap_controls-section {
    background-color: var(--panel);
  }

  .rhap_progress-section {
    background-color: var(--panel);
  }

  .rhap_progress-container {
    background-color: var(--panel);
  }

  .rhap_progress-bar {
    background-color: var(--panel);
    color: var(--textLight);
  }

  .rhap_progress-indicator {
    background-color: var(--textTitle);
  }

  .rhap_main {
    background-color: var(--panel);
  }

  .rhap_main-controls {
    background-color: var(--panel);
  }

  .rhap_current-time {
    background-color: var(--panel);
    color: var(--textLight);
  }

  .rhap_total-time {
    background-color: var(--panel);
    color: var(--textLight);
  }
`

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
