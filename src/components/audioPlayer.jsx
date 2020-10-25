import React from 'react'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import IconButton from '@material-ui/core/IconButton'
import SkipNext from '@material-ui/icons/SkipNext'
import SkipPrevious from '@material-ui/icons/SkipPrevious'
import Typography from '@material-ui/core/Typography'
import Pause from '@material-ui/icons/Pause'
import { makeStyles } from '@material-ui/core/styles'
import { isUndefined } from 'lodash'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '20vw',
    '@media (max-width: 400px)': {
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
    '@media (max-width: 400px)': {
      width: '50vw',
      height: '50vw',
    },
  },
  content: {
    display: 'flex',
    height: 'auto',
    '@media (max-width: 400px)': {
      height: 'auto',
    },
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
  radioMode,
  audioSource,
  audioTitle,
  audioImage,
}) {
  const classes = useStyles()
  let [playing, control] = useAudio(audioSource)

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
          {radioMode && (
            <IconButton aria-label={'rewind'} onClick={() => control('rw')}>
              <SkipPrevious />
            </IconButton>
          )}
          <IconButton
            aria-label={playing ? 'play' : 'pause'}
            onClick={() => control('pp')}
          >
            {playing ? <Pause /> : <PlayArrowIcon />}
          </IconButton>
          {radioMode && (
            <IconButton
              aria-label={'fast-forward'}
              onClick={() => control('ff')}
            >
              <SkipNext />
            </IconButton>
          )}
        </div>
      </div>
    </Card>
  )
}
