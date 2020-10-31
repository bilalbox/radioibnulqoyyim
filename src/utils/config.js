import Logo from '../images/logo.svg'
import DarkLogo from '../images/logo-dark.svg'
const cfg = {
  urls: {
    email: 'mailto:salafybpp@gmail.com',
    mainSite: 'https://raihsurga.com',
    podcast: 'https://anchor.fm/radioibnulqoyyim',
    radio1: {
      trackInfo:
        'https://cors-anywhere.herokuapp.com/https://ssg.streamingmurah.com:8286/currentsong?sid=1',
      audioUrl: 'https://ssg.streamingmurah.com:8286/stream',
      imageUrl: [Logo, DarkLogo],
    },
    radio2: {
      trackInfo:
        'https://cors-anywhere.herokuapp.com/https://ssg.streamingmurah.com:8256/currentsong?sid=1',
      audioUrl: 'https://ssg.streamingmurah.com:8256/stream',
      imageUrl: [Logo, DarkLogo],
    },
    radio3: {
      trackInfo:
        'https://cors-anywhere.herokuapp.com/https://ssg.streamingmurah.com:8126/currentsong?sid=1',
      audioUrl: 'https://ssg.streamingmurah.com:8126/stream',
      imageUrl: [Logo, DarkLogo],
    },
    radio4: {
      trackInfo:
        'https://cors-anywhere.herokuapp.com/https://ssg.streamingmurah.com:8134/currentsong?sid=1',
      audioUrl: 'https://ssg.streamingmurah.com:8134/stream',
      imageUrl: [Logo, DarkLogo],
    },
    rss: 'https://anchor.fm/s/3770c8bc/podcast/rss',
    telegram: 'https://t.me/AudioThalabIlmuSyar_i',
    youtube: 'https://www.youtube.com/raihsurga',
  },
}

export default cfg
