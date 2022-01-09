import Logo from '../images/logo.png'

const cfg = {
  urls: {
    email: 'mailto:dev@iqbpn.com',
    mainSite: 'https://radioibnulqoyyim.com',
    logo: Logo,
    radio: [
      {
        title: 'RADIO IBNUL QOYYIM',
        audioInfo:
          'https://azuracast.iqbpn.com/api/nowplaying/1',
        audioUrl: 'https://azuracast.iqbpn.com/radio/8000/radio.mp3',
        wss: 'wss://azuracast.iqbpn.com/api/live/nowplaying/radio_ibnul_qoyyim',
      },
      {
        title: 'RADIO IQ TEST',
        audioInfo:
          'https://azuracast.iqbpn.com/api/nowplaying/2',
        audioUrl: 'https://azuracast.iqbpn.com/radio/8010/radio.mp3',
        wss: 'wss://azuracast.iqbpn.com/api/live/nowplaying/radio_iq_test',
      },
    ],
    telegram: 'https://t.me/AudioThalabIlmuSyar_i',
  },
}

export default cfg
