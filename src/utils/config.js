import Logo from '../images/logo.svg'

const cfg = {
  urls: {
    email: 'mailto:salafybpp@gmail.com',
    mainSite: 'https://raihsurga.com',
    logo: Logo,
    radio: [
      {
        title: 'RADIO IBNUL QOYYIM',
        audioInfo:
          'https://azuracast.iqbpn.com/api/nowplaying/1',
        audioUrl: 'https://azuracast.iqbpn.com/radio/8000/radio.mp3',
      },
      {
        title: 'RADIO RAIH SURGA',
        audioInfo:
          'https://azuracast.iqbpn.com/api/nowplaying/3',
        audioUrl: 'https://azuracast.iqbpn.com/radio/8020/radio.mp3',
      },
    ],
    telegram: 'https://t.me/AudioThalabIlmuSyar_i',
    youtube: 'https://www.youtube.com/raihsurga',
  },
}

export default cfg
