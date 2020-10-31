import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@material-ui/core'
import { PlayArrow, FastForward, FastRewind, Pause } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
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
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: theme.spacing(1),
  },
}))

const useAudio = (aS) => {
  if (typeof Audio !== 'undefined') {
    const [audio, setAudio] = React.useState(new Audio(aS))
    const [playing, setPlaying] = React.useState(false)
    const control = (command) => {
      switch (command) {
        case 'ff':
          audio.currentTime += 5
          break
        case 'rw':
          audio.currentTime -= 5
          break
        default:
          setPlaying(!playing)
      }
    }
    React.useEffect(() => {
      playing ? audio.play() : audio.pause()
    }, [playing])

    React.useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false))
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false))
      }
    }, [])

    React.useEffect(() => {
      audio.pause()
      setPlaying(false)
      setAudio(new Audio(aS))
    }, [aS])

    return [playing, control]
  } else return ['playing', () => console.log('gatsby hack')]
}

export default function AudioPlayer({
  audioSource,
  audioTitle,
  audioImage,
  trackInfo = false,
}) {
  const classes = useStyles()
  let [playing, control] = useAudio(audioSource)
  const [trackTitle, setTrackTitle] = React.useState('')

  React.useEffect(() => {
    if (trackInfo) {
      fetch(trackInfo, {
        headers: new Headers({
          origin: 'anonymous',
        }),
      })
        .then((response) => response.text())
        .then((data) => setTrackTitle(data))
        .catch(() => setTrackTitle('OFFLINE'))
    }
  }, [trackInfo])

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={audioImage}
        title={audioTitle}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h6">{audioTitle}</Typography>
          <Typography variant="caption">{trackTitle}</Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label={'rewind'} onClick={() => control('rw')}>
            <FastRewind />
          </IconButton>
          <IconButton
            aria-label={playing ? 'play' : 'pause'}
            onClick={() => control('pp')}
          >
            {playing ? <Pause /> : <PlayArrow />}
          </IconButton>
          <IconButton aria-label={'fast-forward'} onClick={() => control('ff')}>
            <FastForward />
          </IconButton>
        </div>
      </div>
    </Card>
  )
}
