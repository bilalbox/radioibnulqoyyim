import React from 'react'

export default function AudioPlayer({ audioSource }) {
  return (
    <div>
      <audio src={audioSource} controls autoPlay={false} preload="metadata" />
    </div>
  )
}
