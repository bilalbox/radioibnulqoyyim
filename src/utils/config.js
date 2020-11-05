import Logo from '../images/logo.svg'
const cfg = {
  urls: {
    email: 'mailto:salafybpp@gmail.com',
    mainSite: 'https://raihsurga.com',
    podcast: 'https://anchor.fm/radioibnulqoyyim',
    logo: Logo,
    radio: [
      {
        title: 'RADIO IQ - SALURAN 1',
        audioInfo:
          'https://cors-anywhere.herokuapp.com/https://ssg.streamingmurah.com:8286/currentsong',
        audioUrl: 'https://ssg.streamingmurah.com:8286/stream',
      },
      {
        title: 'RADIO IQ - SALURAN 2',
        audioInfo:
          'https://cors-anywhere.herokuapp.com/https://ssg.streamingmurah.com:8256/currentsong',
        audioUrl: 'https://ssg.streamingmurah.com:8256/stream',
      },
      {
        title: 'RADIO IQ - SALURAN 3',
        audioInfo:
          'https://cors-anywhere.herokuapp.com/https://ssg.streamingmurah.com:8126/currentsong',
        audioUrl: 'https://ssg.streamingmurah.com:8126/stream',
      },
    ],
    rss: 'https://anchor.fm/s/3770c8bc/podcast/rss',
    telegram: 'https://t.me/AudioThalabIlmuSyar_i',
    youtube: 'https://www.youtube.com/raihsurga',
  },
}

export default cfg
