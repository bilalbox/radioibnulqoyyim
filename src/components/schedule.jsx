import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@material-ui/core'
import { ExpandMore } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import cfg from '../utils/config'

const useStyles = makeStyles((theme) => ({
  accordion: {
    width: '60vw',
    '@media (max-width: 600px)': {
      width: '100vw',
    },
    '&:hover': {
      backgroundColor: theme.palette.background.default,
    },
  },
  card: {
    padding: '0 16px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}))

export default function Schedule() {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }
  const images = useStaticQuery(graphql`
    query {
      daurohLogo: file(relativePath: { eq: "kiat-kiat-hidup-bahagia.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      MINGGU: file(relativePath: { eq: "kiat-kiat-hidup-bahagia.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      SENIN: file(relativePath: { eq: "book_shohihul_bukhori.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      SELASA: file(relativePath: { eq: "book_fathul_majid.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      RABU: file(relativePath: { eq: "book_riyadhus_sholihin.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      KAMIS: file(relativePath: { eq: "book_alurjuzah.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      JUMAT: file(relativePath: { eq: "book_bulugh_marom.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      SABTU: file(relativePath: { eq: "book_shohihul_adabil_mufrod.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      DHUHUR: file(relativePath: { eq: "book_bughyatul_mutathowi.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ASHAR: file(relativePath: { eq: "book_bahjat_qulubil_abror.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      maxWidth="sm"
    >
      <Img
        fluid={images.daurohLogo.childImageSharp.fluid}
        style={{
          width: '30vw',
          height: '30vw',
          borderRadius: '10px',
          marginBottom: '50px',
        }}
      />

      <Typography variant="h3" color="primary" align="center">
        KAJIAN RUTIN
      </Typography>
      {cfg.schedule.map((c) => {
        return (
          <Accordion
            key={c.hari}
            expanded={expanded === c.hari}
            onChange={handleChange(c.hari)}
            className={classes.accordion}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>{c.hari}</Typography>
            </AccordionSummary>
            <AccordionDetails
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              {c.kajian.map((k) => {
                return (
                  <Card key={c.hari + k.waktu} className={classes.card}>
                    <CardMedia>
                      <Typography
                        variant="body1"
                        color="primary"
                        align="center"
                      >
                        {k.waktu}
                      </Typography>
                      {['DHUHUR', 'ASHAR'].includes(k.waktu) && (
                        <Img
                          fluid={images[k.waktu].childImageSharp.fluid}
                          style={{
                            width: '10vw',
                            height: '10vw',
                            borderRadius: '10px',
                          }}
                        />
                      )}
                      {k.waktu === 'MAGHRIB' && (
                        <Img
                          fluid={images[c.hari].childImageSharp.fluid}
                          style={{
                            width: '10vw',
                            height: '10vw',
                            borderRadius: '10px',
                          }}
                        />
                      )}
                    </CardMedia>
                    <CardContent>
                      <Typography
                        variant="body1"
                        color="primary"
                        align="center"
                      >
                        {k.buku}
                      </Typography>
                      <Typography variant="body2">
                        PENULIS: {k.penulis}
                      </Typography>
                      <Typography variant="caption" color="textSecondary">
                        PEMATERI: {k.pemateri}
                      </Typography>
                    </CardContent>
                  </Card>
                )
              })}
            </AccordionDetails>
          </Accordion>
        )
      })}
    </Container>
  )
}
