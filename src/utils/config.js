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
          'https://cors-anywhere.herokuapp.com/https://ssg.streamingmurah.com:8286/stats?json=1',
        audioUrl: 'https://ssg.streamingmurah.com:8286/stream',
      },
      {
        title: 'RADIO IQ - SALURAN 2',
        audioInfo:
          'https://cors-anywhere.herokuapp.com/https://ssg.streamingmurah.com:8256/stats?json=1',
        audioUrl: 'https://ssg.streamingmurah.com:8256/stream',
      },
      {
        title: 'RADIO IQ - SALURAN 3',
        audioInfo:
          'https://cors-anywhere.herokuapp.com/https://ssg.streamingmurah.com:8126/stats?json=1',
        audioUrl: 'https://ssg.streamingmurah.com:8126/stream',
      },
    ],
    rss: 'https://anchor.fm/s/3770c8bc/podcast/rss',
    telegram: 'https://t.me/AudioThalabIlmuSyar_i',
    youtube: 'https://www.youtube.com/raihsurga',
  },
  schedule: [
    {
      hari: "MINGGU",
      kajian: [
        {
          waktu: "DHUHUR",
          buku: "TUNTUNAN SHOLAT-SHOLAT SUNNAH",
          penulis: "SY. DR. MOHAMMAD BIN 'UMAR BAZMUL حفظه الله",
          pemateri: "UST. ABU MUAWIYAH ASKARY حفظه الله",
        },
        {
          waktu: "ASHAR",
          buku: "HIBURAN HATI ORANG-ORANG BAIK, PENYEJUK HATI HAMBA-HAMBA PILIHAN PENJELASAN TERHADAP HADITS-HADITS PENUH MAKNA",
          penulis: "AL-IMAM ABDURRAHMAN BIN NASR AS-SA'DI رحمه الله",
          pemateri: "SY. DR. ABU MALIK ALI AL MASY'ARI حفظه الله",
        },
        {
          waktu: "MAGHRIB",
          buku: "KIAT-KIAT HIDUP BAHAGIA",
          penulis: "AL-IMAM ABDURRAHMAN BIN NASR AS-SA'DI رحمه الله",
          pemateri: "SY. DR. ABU MALIK ALI AL MASY'ARI حفظه الله",
        }
      ]
    },
    {
      hari: "SENIN",
      kajian: [
        {
          waktu: "DHUHUR",
          buku: "TUNTUNAN SHOLAT-SHOLAT SUNNAH",
          penulis: "SY. DR. MOHAMMAD BIN 'UMAR BAZMUL حفظه الله",
          pemateri: "UST. ABU MUAWIYAH ASKARY حفظه الله",
        },
        {
          waktu: "ASHAR",
          buku: "HIBURAN HATI ORANG-ORANG BAIK, PENYEJUK HATI HAMBA-HAMBA PILIHAN PENJELASAN TERHADAP HADITS-HADITS PENUH MAKNA",
          penulis: "AL-IMAM ABDURRAHMAN BIN NASR AS-SA'DI رحمه الله",
          pemateri: "SY. DR. ABU MALIK ALI AL MASY'ARI حفظه الله",
        },
        {
          waktu: "MAGHRIB",
          buku: "SHAHIH BUKHARI",
          penulis: "AL-IMAM MOHAMMED BIN ISMA'IL AL-BUKHARI رحمه الله",
          pemateri: "UST. ABU MUAWIYAH ASKARY حفظه الله"
        }
      ]
    },
    {
      hari: "SELASA",
      kajian: [
        {
          waktu: "DHUHUR",
          buku: "TUNTUNAN SHOLAT-SHOLAT SUNNAH",
          penulis: "SY. DR. MOHAMMAD BIN 'UMAR BAZMUL حفظه الله",
          pemateri: "UST. ABU MUAWIYAH ASKARY حفظه الله",
        },
        {
          waktu: "ASHAR",
          buku: "HIBURAN HATI ORANG-ORANG BAIK, PENYEJUK HATI HAMBA-HAMBA PILIHAN PENJELASAN TERHADAP HADITS-HADITS PENUH MAKNA",
          penulis: "AL-IMAM ABDURRAHMAN BIN NASR AS-SA'DI رحمه الله",
          pemateri: "SY. DR. ABU MALIK ALI AL MASY'ARI حفظه الله",
        },
        {
          waktu: "MAGHRIB",
          buku: "FATHUL MAJID - SYARH KITAB AT-TAWHID",
          penulis: "AL-IMAM ABDURRAHMAN BIN HASSAN BIN MOHAMMED BIN ABDULWAHHAB رحمه الله",
          pemateri: "UST. ABU AHMAD MUALLIM حفظه الله"
        }
      ]
    },
    {
      hari: "RABU",
      kajian: [
        {
          waktu: "DHUHUR",
          buku: "TUNTUNAN SHOLAT-SHOLAT SUNNAH",
          penulis: "SY. DR. MOHAMMAD BIN 'UMAR BAZMUL حفظه الله",
          pemateri: "UST. ABU MUAWIYAH ASKARY حفظه الله",
        },
        {
          waktu: "ASHAR",
          buku: "HIBURAN HATI ORANG-ORANG BAIK, PENYEJUK HATI HAMBA-HAMBA PILIHAN PENJELASAN TERHADAP HADITS-HADITS PENUH MAKNA",
          penulis: "AL-IMAM ABDURRAHMAN BIN NASR AS-SA'DI رحمه الله",
          pemateri: "SY. DR. ABU MALIK ALI AL MASY'ARI حفظه الله",
        },
        {
          waktu: "MAGHRIB",
          buku: "RIYADHUS SHALIHIN",
          penulis: "AL-IMAM AN-NAWAWI رحمه الله",
          pemateri: "UST. ABU AHMAD MUALLIM حفظه الله"
        }
      ]
    },
    {
      hari: "KAMIS",
      kajian: [{
        waktu: "DHUHUR",
        buku: "TUNTUNAN SHOLAT-SHOLAT SUNNAH",
        penulis: "SY. DR. MOHAMMAD BIN 'UMAR BAZMUL حفظه الله",
        pemateri: "UST. ABU MUAWIYAH ASKARY حفظه الله",
      },
      {
        waktu: "ASHAR",
        buku: "HIBURAN HATI ORANG-ORANG BAIK, PENYEJUK HATI HAMBA-HAMBA PILIHAN PENJELASAN TERHADAP HADITS-HADITS PENUH MAKNA",
        penulis: "AL-IMAM ABDURRAHMAN BIN NASR AS-SA'DI رحمه الله",
        pemateri: "SY. DR. ABU MALIK ALI AL MASY'ARI حفظه الله",
      },
      {
        waktu: "MAGHRIB",
        buku: "AL URJUZAH MI'IYYAH FII DZIKRI HAALI ASYRAFIL BARIYYAH",
        penulis: "AL-ALLAMAH IBNU ABIL 'IZZ AL-HANAFY رحمه الله",
        pemateri: "UST. ABU MUAWIYAH ASKARY حفظه الله"
      }
      ]
    },

    {
      hari: "JUMAT",
      kajian: [
        {
          waktu: "MAGHRIB",
          buku: "HUKUM-HUKUM SEPUTAR FIQH ISLAM",
          penulis: "AL-IMAM SHIHAB UD-DIN IBN HAJAR AL-ʿASQOLANI رحمه الله",
          pemateri: "UST. ABU MUAWIYAH ASKARY حفظه الله"
        }
      ]
    },
    {
      hari: "SABTU",
      kajian: [
        {
          waktu: "DHUHUR",
          buku: "TUNTUNAN SHOLAT-SHOLAT SUNNAH",
          penulis: "SY. DR. MOHAMMAD BIN 'UMAR BAZMUL حفظه الله",
          pemateri: "UST. ABU MUAWIYAH ASKARY حفظه الله",
        },
        {
          waktu: "ASHAR",
          buku: "HIBURAN HATI ORANG-ORANG BAIK, PENYEJUK HATI HAMBA-HAMBA PILIHAN PENJELASAN TERHADAP HADITS-HADITS PENUH MAKNA",
          penulis: "AL-IMAM ABDURRAHMAN BIN NASR AS-SA'DI رحمه الله",
          pemateri: "SY. DR. ABU MALIK ALI AL MASY'ARI حفظه الله",
        },
        {
          waktu: "MAGHRIB",
          buku: "SHOHIH AL ADAB IL MUFROD",
          penulis: "AL-IMAM MOHAMMED BIN ISMA'IL AL-BUKHARI رحمه الله",
          pemateri: "UST. ABU MUAWIYAH ASKARY حفظه الله"
        }
      ]
    },
  ]

}

export default cfg
