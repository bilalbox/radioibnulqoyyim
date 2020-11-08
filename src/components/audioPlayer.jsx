import React from 'react'
import { VimePlayer, VimeAudio, VimeDefaultUi } from '@vime/react'
import '@vime/core/themes/default.css'

export default function AudioPlayer({ audioSource }) {
  return (
    <div>
      <VimePlayer>
        <VimeAudio>
          <source src={audioSource} />
        </VimeAudio>
        <VimeDefaultUi noSkeleton style={{ width: '100%' }} />
      </VimePlayer>
    </div>
  )
}
