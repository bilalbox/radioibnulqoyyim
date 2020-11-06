import React from 'react'
import './vime-player-dark.css'
import './vime-player-light.css'
import { VimePlayer, VimeAudio, VimeDefaultUi } from '@vime/react'
import { makeStyles, withTheme } from '@material-ui/core/styles'

const useStyles = makeStyles({
  player: {
    boxShadow: 'none',
  },
})

function AudioPlayer({ theme, audioSource }) {
  const classes = useStyles()

  return (
    <VimePlayer className={classes.player} theme={theme.palette.type}>
      <VimeAudio>
        <source src={audioSource} />
      </VimeAudio>
      <VimeDefaultUi noSkeleton />
    </VimePlayer>
  )
}

export default withTheme(AudioPlayer)
