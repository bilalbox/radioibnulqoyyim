import React from 'react'
import '@vime/core/themes/default.css'
import '@vime/core/themes/light.css'
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
        <VimeDefaultUi noSkeleton noSettings />
      </VimePlayer>
    </div>
  )
}
