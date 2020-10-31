import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import FastForward from '@material-ui/icons/FastForward'
import FastRewind from '@material-ui/icons/FastRewind'
import Pause from '@material-ui/icons/Pause'
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

        // // TODO: Playback progress bar
        // case 'get_current_time':
        //   return audio.currentTime
        // case 'get_duration':
        //   return audio.duration
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

export default function AudioPlayer({ audioSource, audioTitle, audioImage }) {
  const classes = useStyles()
  let [playing, control] = useAudio(audioSource)

  // // TODO: Playback progress bar
  // React.useEffect(() => {
  //   const progressBar = setTimeout(() => {
  //     setTimeLeft(calculateTimeLeft())
  //   }, 1000)
  //   return () => clearTimeout(timer)
  // })

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
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label={'rewind'} onClick={() => control('rw')}>
            <FastRewind />
          </IconButton>
          <IconButton
            aria-label={playing ? 'play' : 'pause'}
            onClick={() => control('pp')}
          >
            {playing ? <Pause /> : <PlayArrowIcon />}
          </IconButton>
          <IconButton aria-label={'fast-forward'} onClick={() => control('ff')}>
            <FastForward />
          </IconButton>
        </div>
      </div>
    </Card>
  )
}
