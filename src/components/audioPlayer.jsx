import React from 'react'
import { VimePlayer, VimeAudio, VimeDefaultUi } from '@vime/react'
import './vime-player-dark.css'
import './vime-player-light.css'

export default function AudioPlayer({ audioSource }) {
  return (
    <div>
      <VimePlayer>
        <VimeAudio>
          <source src={audioSource} />
        </VimeAudio>
        <VimeDefaultUi noSkeleton />
      </VimePlayer>
    </div>
  )
}
