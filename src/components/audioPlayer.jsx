import React from 'react'
import '@vime/core/themes/default.css'
import { VimePlayer, VimeAudio, VimeDefaultUi } from '@vime/react'
import { makeStyles } from '@material-ui/core/styles'

import AudioContext from '../contexts/audioContext'

export default function AudioPlayer() {
  const { audioInfo, audioSource, audioTitle, radioMode } = React.useContext(
    AudioContext
  )
  return (
    <div>
      <VimePlayer>
        <VimeAudio id="dont8">
          <source src={audioSource} type="audio/mp3" />
        </VimeAudio>
        <VimeDefaultUi />
      </VimePlayer>
    </div>
  )
}
