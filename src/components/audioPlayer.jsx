import React from 'react'

export default function AudioPlayer({ audioSource }) {
  return (
    <div>
      {/* eslint-disable-next-line */}
      <audio src={audioSource} controls autoPlay={false} preload="metadata" />
    </div>
  )
}
