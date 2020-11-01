import React from 'react'

const AudioContext = React.createContext(true)
AudioContext.displayName = 'AudioContext'

export const AudioProvider = AudioContext.Provider
export const AudioConsumer = AudioContext.Consumer
export default AudioContext
