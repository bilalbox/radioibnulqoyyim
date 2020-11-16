import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import cfg from '../utils/config'

const useStyles = makeStyles((theme) => ({
  card: {
    padding: '0 16px',
    margin: '10px',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: theme.palette.background.default,
    },
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

export default function Schedule() {
  const classes = useStyles()
  const images = useStaticQuery(graphql`
    query {
      daurohLogo: file(relativePath: { eq: "kiat-kiat-hidup-bahagia.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Senin: file(relativePath: { eq: "book_bulugh_maram.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Selasa: file(relativePath: { eq: "book_bulugh_maram.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Rabu: file(relativePath: { eq: "book_bulugh_maram.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Kamis: file(relativePath: { eq: "book_bulugh_maram.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Jumat: file(relativePath: { eq: "book_bulugh_maram.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Sabtu: file(relativePath: { eq: "book_bulugh_maram.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Minggu: file(relativePath: { eq: "book_bulugh_maram.jpg" }) {
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
        Kajian Rutin
      </Typography>
      {cfg.schedule.map((c) => {
        return (
          <Card key={c.hari} elevation={5} className={classes.card}>
            <CardMedia>
              <Img
                fluid={images[c.hari].childImageSharp.fluid}
                style={{
                  width: '15vw',
                  height: '15vw',
                  borderRadius: '10px',
                }}
              />
            </CardMedia>
            <CardContent>
              <Typography variant="h4">{c.hari}</Typography>
              <Typography variant="h6" color="primary">
                {c.buku}
              </Typography>
              <Typography variant="body2">{c.penulis}</Typography>
              <Typography variant="caption" color="textSecondary">
                {c.pemateri}
              </Typography>
            </CardContent>
          </Card>
        )
      })}
    </Container>
  )
}
