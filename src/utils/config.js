import Logo from '../images/logo.svg'

const cfg = {
  urls: {
    email: 'mailto:salafybpp@gmail.com',
    mainSite: 'https://raihsurga.com',
    archiveDotOrg: 'https://archive.org/details/@radioibnulqoyyim',
    logo: Logo,
    radio: [
      {
        title: 'SALURAN 1',
        audioInfo:
          '/stats-01',
        audioUrl: 'https://ssg.streamingmurah.com:8286/stream',
      },
      {
        title: 'SALURAN 2',
        audioInfo:
          '/stats-02',
        audioUrl: 'https://ssg.streamingmurah.com:8256/stream',
      },
      {
        title: 'SALURAN 3',
        audioInfo:
          '/stats-03',
        audioUrl: 'https://ssg.streamingmurah.com:8126/stream',
      },
    ],
    telegram: 'https://t.me/AudioThalabIlmuSyar_i',
    youtube: 'https://www.youtube.com/raihsurga',
  },
  schedule: [
    {
      hari: "HARIAN",
      kajian: [
        {
          waktu: "DHUHUR",
          buku: "TAFSIR MUYASSAR",
          url: "https://archive.org/download/man4ever3000_yahoo_201805/Tafseer_M-S.pdf",
          penulis: "KUMPULAN PARA PENULIS",
          pemateri: "AL USTADZ ABUL JAUZA’ SOFWAN حفظه الله",
        },
        {
          waktu: "ASHAR",
          buku: "HIBURAN HATI ORANG-ORANG BAIK, PENYEJUK HATI HAMBA-HAMBA PILIHAN PENJELASAN TERHADAP HADITS-HADITS PENUH MAKNA",
          url: "https://archive.org/download/FP132128/132128.pdf",
          penulis: "AL-IMAM ABDURROHMAN BIN NASR AS-SA'DI رحمه الله",
          pemateri: "SY. DR. ABU MALIK ALI AL MASY'ARI حفظه الله",
        },
      ]
    },
    {
      hari: "AHAD",
      kajian: [
        {
          waktu: "MAGHRIB (MALAM SENIN)",
          buku: "MENAJAGA PERASAAN SESAMA MUSLIM",
          url: "",
          penulis: "SY. DR. ABU MALIK ALI AL MASY'ARI حفظه الله",
          pemateri: "SY. DR. ABU MALIK ALI AL MASY'ARI حفظه الله",
        }
      ]
    },
    {
      hari: "SENIN",
      kajian: [
        {
          waktu: "MAGHRIB (MALAM SELASA)",
          buku: "SHOHIH BUKHARI",
          url: "https://archive.org/download/waq79565/79565.pdf",
          penulis: "AL-IMAM MOHAMMAD BIN ISMA'IL AL-BUKHORI رحمه الله",
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
          url: "https://archive.org/download/waq6559/6559.pdf",
          penulis: "AL-IMAM ABDURROHMAN BIN HASSAN BIN MOHAMMAD BIN ABDULWAHHAB رحمه الله",
          pemateri: "UST. ABU AHMAD MUALLIM حفظه الله"
        }
      ]
    },
    {
      hari: "RABU",
      kajian: [
        {
          waktu: "MAGHRIB (MALAM KAMIS)",
          buku: "RIYADHUS SHOLIHIN",
          url: "https://archive.org/download/FP158170/158170.pdf",
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
          url: "https://archive.org/download/Sharh_Urjuzah_al-Me3yah/Sharh_Urjuzah_al-Me3yah.pdf",
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
          url: "https://archive.org/download/FP145220/145220.pdf",
          penulis: "AL-IMAM SYIHAB UD-DIN IBN HAJAR AL-ʿASQOLANI رحمه الله",
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
          penulis: "AL-IMAM MOHAMMAD BIN ISMA'IL AL-BUKHORI رحمه الله",
          pemateri: "UST. ABU MUAWIYAH ASKARY حفظه الله"
        }
      ]
    },
  ]

}

export default cfg
