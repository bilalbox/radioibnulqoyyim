import React from 'react'
import { VimePlayer, VimeAudio, VimeDefaultUi } from '@vime/react'
import './vime-player-dark.css'
import './vime-player-light.css'

export default function AudioPlayer({ audioSource }) {
  return (
    <div>
      <audio src={audioSource} controls autoPlay={false} preload="metadata" />
    </div>
  )
}
