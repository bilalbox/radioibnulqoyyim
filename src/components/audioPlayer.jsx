import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  LinearProgress,
  CircularProgress,
} from '@material-ui/core'
import { PlayArrow, FastForward, FastRewind, Pause } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import AudioContext from '../contexts/audioContext'

const formatSeconds = (sec) => {
  const pad = (num) =>
    num.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
  const hours = Math.floor(sec / 3600)
  const minutes = Math.floor((sec - hours * 3600) / 60)
  const seconds = Math.floor(sec - hours * 3600 - minutes * 60)
  return `${hours ? `${hours}:` : ''}${pad(minutes)}:${pad(seconds)}`
}

class AudioPlayer extends React.Component {
  static contextType = AudioContext
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      isPlaying: false,
      currentTime: 0,
      currentTimePercent: 0,
      audioDuration: 0,
      audioDesc: '',
    }

    this.triggerPlayer = this.triggerPlayer.bind(this)
    this.onButtonJump = this.onButtonJump.bind(this)
    this.onPlay = this.onPlay.bind(this)
    this.onPause = this.onPause.bind(this)
    this.onSliderJump = this.onSliderJump.bind(this)
  }

  triggerPlayer() {
    this.state.isPlaying ? this.audioRef.pause() : this.audioRef.play()

    this.setState((prevState) => {
      return {
        isPlaying: !prevState.isPlaying,
      }
    })
  }

  onPlay(e) {
    this.props.onPlay && this.props.onPlay()
    this.setState({ isPlaying: true })

    this.playingInterval = setInterval(() => {
      this.setState(({ currentTime: prevTime }) => ({
        currentTime: this.audioRef.currentTime,
        currentTimePercent:
          (this.audioRef.currentTime / this.audioRef.duration) * 100,
        isLoading: this.audioRef.currentTime === prevTime,
      }))

      if (this.audioRef.currentTime >= this.audioRef.duration) {
        this.setState({ isPlaying: false, isLoading: false })

        clearInterval(this.playingInterval)
      }
    }, 100)
  }

  onPause() {
    this.props.onPause && this.props.onPause()
    this.setState({ isPlaying: false })
    clearInterval(this.playingInterval)
  }

  onButtonJump(t) {
    if (this.audioRef.duration) {
      this.audioRef.currentTime = this.state.currentTime + t
      this.setState({
        currentTime: this.audioRef.currentTime,
        currentTimePercent:
          (this.audioRef.currentTime / this.audioRef.duration) * 100,
      })
    }
  }

  onSliderJump(e) {
    if (this.audioRef.duration) {
      this.audioRef.currentTime =
        (e.nativeEvent.offsetX / this.sliderRef.clientWidth) *
        this.audioRef.duration
      this.setState({
        currentTime: this.audioRef.currentTime,
        currentTimePercent:
          (this.audioRef.currentTime / this.audioRef.duration) * 100,
      })
    }
  }

  componentDidMount() {
    if (this.context.radioMode) {
      fetch(this.context.audioInfo, {
        headers: new Headers({
          origin: 'anonymous',
        }),
      })
        .then((response) => response.text())
        .then((data) => {
          this.setState({ audioDesc: data })
        })
        .catch(() => this.setState({ audioDesc: 'OFFLINE' }))
    }
    if (this.audioRef.readyState > 0) {
      this.setState({
        audioDuration: this.audioRef.duration,
        isLoading: false,
      })
    }
  }

  render() {
    const {
      isLoading,
      isPlaying,
      currentTime,
      currentTimePercent,
      audioDuration,
      audioDesc,
    } = this.state

    const classes = makeStyles((theme) => ({
      root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '20vw',
        '@media (max-width: 1300px)': {
          width: '50vw',
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
          width: '50vw',
          height: '50vw',
        },
        '@media (max-width: 500px)': {
          width: '50vw',
          height: '50vw',
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

    return (
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={this.context.audioImage}
          title={this.context.audioTitle}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="h6">{this.context.audioTitle}</Typography>
            {!this.context.radioMode ? (
              <div>
                <LinearProgress
                  variant="determinate"
                  value={currentTimePercent}
                />
                <Typography variant="caption">
                  {formatSeconds(currentTime)}/{formatSeconds(audioDuration)}
                </Typography>
              </div>
            ) : (
              <Typography variant="caption">{audioDesc}</Typography>
            )}
          </CardContent>
          <div className={classes.controls}>
            <IconButton
              aria-label={'rewind'}
              onClick={() => this.onButtonJump(-10)}
            >
              <FastRewind />
            </IconButton>
            <IconButton
              aria-label={isPlaying ? 'play' : 'pause'}
              onClick={this.triggerPlayer}
            >
              {isLoading && !isPlaying && <CircularProgress />}
              {isPlaying && !isLoading && <Pause />}
              {!isPlaying && !isLoading && <PlayArrow />}
            </IconButton>
            <IconButton
              aria-label={'fast-forward'}
              onClick={() => this.onButtonJump(10)}
            >
              <FastForward />
            </IconButton>
          </div>
        </div>
        <audio
          ref={(x) => (this.audioRef = x)}
          src={this.context.audioSource}
          controls={false}
          preload="metadata"
          onPlay={this.onPlay}
          onPause={this.onPause}
          onLoadedMetadata={(e) => {
            this.setState({
              currentTimePercent: (currentTime / e.target.duration) * 100,
              audioDuration: e.target.duration,
              isLoading: false,
            })
          }}
          onTimeUpdate={(e) => {
            this.setState({
              audioDuration: e.target.duration,
              isLoading: false,
            })
          }}
        />
      </Card>
    )
  }
}
export default AudioPlayer
