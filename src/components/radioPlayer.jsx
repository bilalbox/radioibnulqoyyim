import React from "react"
import axios from "axios"
import Fab from "@material-ui/core/Fab"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import AudioSpectrum from "react-audio-spectrum"
import Pause from "@material-ui/icons/Pause"
import { styled, useTheme } from "@material-ui/core/styles"
import Typography from '@material-ui/core/Typography'

import AppContext from './appContext'
import cfg from "../utils/config"

const Wrapper = styled('div')({
  margin: "1em",
  display: "flex",
  flexDirection: "column",
  justifyContents: "center",
  alignItems: "center",
  alignSelf: "center",
})

const Visualizer = styled(AudioSpectrum)({
  marginBottom: "1em",
})

export default function RadioPlayer() {
  const theme = useTheme()
  const appContext = React.useContext(AppContext)
  const [trackInfo, setTrackInfo] = React.useState("")
  const [playing, setPlayingStatus] = React.useState(false)
  
  let source = axios.CancelToken.source()
  React.useEffect(() => {
    axios.get(
        cfg.urls.currentTrackInfo,
        {cancelToken: source.token}
      ).then((response) => setTrackInfo(response.data))
      .catch(error => console.log(error))
    return () => source.cancel("Cancelled request to shoutcast track info service")
  }, [])

  const playPause = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    if (audioEl.paused) {
      audioEl.play()
      setPlayingStatus(true)
    } else {
      audioEl.pause()
      setPlayingStatus(false)
    }
  }

  function MediaButton(status) {
    return (
      <Fab color="primary" aria-label={status ? "pause" : "play"} onClick={() => playPause()}>
      {!status && <PlayArrowIcon />}
      {status && <Pause />}
      </Fab>
    )
  }

  const [capColor, meterColor1, meterColor2] = [theme.palette.primary.main, "#777", "#FFF"]
  return (
    <Wrapper>
      <div>
        <audio
          className="audio-element"
          id="radio-stream"
          crossOrigin="anonymous"
        >
          <source src={cfg.urls.radio}></source>
        </audio>
        <Visualizer
          id="radio-canvas"
          audioId={"radio-stream"}
          capColor={capColor}
          width={300}
          height={100}
          capHeight={5}
          meterWidth={3}
          meterCount={512}
          meterColor={[
            { stop: 0, color: meterColor1 },
            { stop: 0.5, color: meterColor2 },
          ]}
          gap={1}
        />
      </div>
        <MediaButton playing={playing} />
      <Typography variant="h6" color="primary">{trackInfo}</Typography>
    </Wrapper>
  )
}
