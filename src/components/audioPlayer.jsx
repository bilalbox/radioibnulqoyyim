import React from 'react'
import './vime-player-dark.css'
import './vime-player-light.css'
import { VimePlayer, VimeAudio, VimeDefaultUi } from '@vime/react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  player: {
    boxShadow: 'none',
  },
}))

export default function AudioPlayer({ darkMode, audioSource }) {
  const classes = useStyles()

  return (
    <div>
      <VimePlayer
        theme={darkMode ? 'dark' : 'light'}
        className={classes.player}
      >
        <VimeAudio>
          <source src={audioSource} />
        </VimeAudio>
        <VimeDefaultUi noSkeleton />
      </VimePlayer>
    </div>
  )
}
