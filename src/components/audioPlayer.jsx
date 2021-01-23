import React from 'react'

export default function AudioPlayer({ src }) {
  return (
    <div>
      {/* eslint-disable-next-line */}
      <audio src={src} controls autoPlay={false} preload="metadata" />
    </div>
  )
}
