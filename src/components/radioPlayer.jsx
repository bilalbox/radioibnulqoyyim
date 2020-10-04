import React, { useEffect, useState } from "react"
import Fab from "@material-ui/core/Fab"
import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import AudioSpectrum from "react-audio-spectrum"
import Pause from "@material-ui/icons/Pause"
import styled from "styled-components"
import cfg from "../utils/config"

const Wrapper = styled.div`
  margin: 1em;
  display: flex;
  flex-direction: column;
  background-color: var(--bg);
  justify-contents: "center";
  align-items: "center";
  align-self: "center";
`

const PlayFab = styled(Fab)`
  margin-top: 0.5em;
  background-color: var(--panel);
  color: var(--textTitle);
  text-align: center;

  .MuiFab-extended {
    background-color: var(--panel);
  }
`

const Visualizer = styled(AudioSpectrum)`
  margin-bottom: 1em;
`

const TrackName = styled.h6`
  margin-top: 0.5em;
  color: var(--textTitle);
`

export default function RadioPlayer() {
  const [trackInfo, setTrackInfo] = useState("")
  const [playing, setPlayingStatus] = useState(false)

  useEffect(() => {
    fetch(cfg.urls.currentTrackInfo, {
      headers: new Headers({
        origin: "anonymous",
      }),
    })
      .then((response) => response.text())
      .then((data) => setTrackInfo(data))
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

  function PlayButton(props) {
    return (
      <PlayFab variant="extended" aria-label="play" onClick={() => playPause()}>
        <PlayArrowIcon />
        Play
      </PlayFab>
    )
  }

  function PauseButton(props) {
    return (
      <PlayFab
        variant="extended"
        aria-label="pause"
        onClick={() => playPause()}
      >
        <Pause />
        Pause
      </PlayFab>
    )
  }

  const [capColor, meterColor1, meterColor2] = ["#F24333", "#777", "#FFF"]
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
      <div>
        {playing && <PauseButton />}
        {!playing && <PlayButton />}
      </div>
      <TrackName>{trackInfo}</TrackName>
    </Wrapper>
  )
}
