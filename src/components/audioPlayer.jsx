import React from 'react'
import 'react-h5-audio-player/lib/styles.css'
import Loadable from 'react-loadable'

const LoadableAudioPlayer = Loadable({
  loader: () => import('react-h5-audio-player'),
  loading() {
    return <div>Loading...</div>
  },
})

export default function AudioPlayer({ audioSource }) {
  return (
    <div>
      {/* eslint-disable-next-line */}
      <LoadableAudioPlayer
        src={audioSource}
        controls
        autoPlay={false}
        preload="metadata"
      />
    </div>
  )
}
