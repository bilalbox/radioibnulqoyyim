import Logo from '../images/logo.svg'
import DarkLogo from '../images/logo-dark.svg'
const cfg = {
  urls: {
    email: 'mailto:salafybpp@gmail.com',
    mainSite: 'https://raihsurga.com',
    podcast: 'https://anchor.fm/radioibnulqoyyim',
    logo: [Logo, DarkLogo],
    radio: [
      {
        title: 'RADIO IQ - SALURAN 1',
        trackInfo:
          'https://cors-anywhere.herokuapp.com/https://ssg.streamingmurah.com:8286/currentsong?sid=1',
        audioUrl: 'https://ssg.streamingmurah.com:8286/stream',
      },
      {
        title: 'RADIO IQ - SALURAN 2',
        trackInfo:
          'https://cors-anywhere.herokuapp.com/https://ssg.streamingmurah.com:8256/currentsong?sid=1',
        audioUrl: 'https://ssg.streamingmurah.com:8256/stream',
      },
      {
        title: 'RADIO IQ - SALURAN 3',
        trackInfo:
          'https://cors-anywhere.herokuapp.com/https://ssg.streamingmurah.com:8126/currentsong?sid=1',
        audioUrl: 'https://ssg.streamingmurah.com:8126/stream',
      },
      {
        title: 'RADIO IQ - SALURAN 4',
        trackInfo:
          'https://cors-anywhere.herokuapp.com/https://ssg.streamingmurah.com:8134/currentsong?sid=1',
        audioUrl: 'https://ssg.streamingmurah.com:8134/stream',
      },
    ],
    rss: 'https://anchor.fm/s/3770c8bc/podcast/rss',
    telegram: 'https://t.me/AudioThalabIlmuSyar_i',
    youtube: 'https://www.youtube.com/raihsurga',
  },
}

export default cfg
