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
    // {
    //   hari: "HARIAN",
    //   kajian: [
    //     {
    //       waktu: "DHUHUR",
    //       buku: "TUNTUNAN SHOLAT-SHOLAT SUNNAH",
    //       url: "https://ia800301.us.archive.org/14/items/waq7551/7551.pdf",
    //       penulis: "SY. DR. MOHAMMAD BIN 'UMAR BAZMUL حفظه الله",
    //       pemateri: "UST. ABU MUAWIYAH ASKARY حفظه الله",
    //     },
    //     {
    //       waktu: "ASHAR",
    //       buku: "HIBURAN HATI ORANG-ORANG BAIK, PENYEJUK HATI HAMBA-HAMBA PILIHAN PENJELASAN TERHADAP HADITS-HADITS PENUH MAKNA",
    //       url: "https://ia801304.us.archive.org/26/items/FP132128/132128.pdf",
    //       penulis: "AL-IMAM ABDURRAHMAN BIN NASR AS-SA'DI رحمه الله",
    //       pemateri: "SY. DR. ABU MALIK ALI AL MASY'ARI حفظه الله",
    //     },
    //   ]
    // },
    {
      hari: "AHAD",
      kajian: [
        {
          waktu: "MAGHRIB (MALAM SENIN)",
          buku: "KIAT-KIAT HIDUP BAHAGIA",
          url: "https://ia800204.us.archive.org/13/items/waq21887/21887.pdf",
          penulis: "AL-IMAM ABDURRAHMAN BIN NASR AS-SA'DI رحمه الله",
          pemateri: "SY. DR. ABU MALIK ALI AL MASY'ARI حفظه الله",
        }
      ]
    },
    {
      hari: "SENIN",
      kajian: [
        {
          waktu: "MAGHRIB (MALAM SELASA)",
          buku: "SHAHIH BUKHARI",
          url: "https://ia800200.us.archive.org/6/items/waq79565/79565.pdf",
          penulis: "AL-IMAM MOHAMMED BIN ISMA'IL AL-BUKHARI رحمه الله",
          pemateri: "UST. ABU MUAWIYAH ASKARY حفظه الله"
        }
      ]
    },
    {
      hari: "SELASA",
      kajian: [
        {
          waktu: "MAGHRIB (MALAM RABU)",
          buku: "FATHUL MAJID - SYARH KITAB AT-TAWHID",
          url: "https://ia800502.us.archive.org/34/items/waq6559/6559.pdf",
          penulis: "AL-IMAM ABDURRAHMAN BIN HASSAN BIN MOHAMMED BIN ABDULWAHHAB رحمه الله",
          pemateri: "UST. ABU AHMAD MUALLIM حفظه الله"
        }
      ]
    },
    {
      hari: "RABU",
      kajian: [
        {
          waktu: "MAGHRIB (MALAM KAMIS)",
          buku: "RIYADHUS SHALIHIN",
          url: "https://ia800400.us.archive.org/3/items/FP158170/158170.pdf",
          penulis: "AL-IMAM AN-NAWAWI رحمه الله",
          pemateri: "UST. ABU AHMAD MUALLIM حفظه الله"
        }
      ]
    },
    {
      hari: "KAMIS",
      kajian: [
        {
          waktu: "MAGHRIB (MALAM JUMAT)",
          buku: "AL URJUZAH MI'IYYAH FII DZIKRI HAALI ASYRAFIL BARIYYAH",
          url: "https://ia601300.us.archive.org/15/items/Sharh_Urjuzah_al-Me3yah/Sharh_Urjuzah_al-Me3yah.pdf",
          penulis: "AL-ALLAMAH IBNU ABIL 'IZZ AL-HANAFY رحمه الله",
          pemateri: "UST. ABU MUAWIYAH ASKARY حفظه الله"
        }
      ]
    },
    {
      hari: "JUMAT",
      kajian: [
        {
          waktu: "MAGHRIB (MALAM SABTU)",
          buku: "HUKUM-HUKUM SEPUTAR FIQH ISLAM",
          url: "https://ia801308.us.archive.org/10/items/FP145220/145220.pdf",
          penulis: "AL-IMAM SHIHAB UD-DIN IBN HAJAR AL-ʿASQOLANI رحمه الله",
          pemateri: "UST. ABU MUAWIYAH ASKARY حفظه الله"
        }
      ]
    },
    {
      hari: "SABTU",
      kajian: [
        {
          waktu: "MAGHRIB (MALAM AHAD)",
          buku: "SHOHIH AL ADAB IL MUFROD",
          url: "https://archive.org/download/FP23906/23906.pdf",
          penulis: "AL-IMAM MOHAMMED BIN ISMA'IL AL-BUKHARI رحمه الله",
          pemateri: "UST. ABU MUAWIYAH ASKARY حفظه الله"
        }
      ]
    },
  ]

}

export default cfg
