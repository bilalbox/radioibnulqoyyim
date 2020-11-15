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
    padding: '6px 16px',
    margin: '10px',
    display: 'flex',
  },
  day: {
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}))

export default function Schedule() {
  const classes = useStyles()
  const {
    file: { childImageSharp: dawrohLogo },
  } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "kiat-kiat-hidup-bahagia.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
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
        fluid={dawrohLogo.fluid}
        style={{
          width: '30vw',
          height: '30vw',
          borderRadius: '10px',
          marginBottom: '50px',
        }}
      />

      <Typography variant="h4" color="primary" align="center">
        Kajian Rutin
      </Typography>
      {cfg.schedule.map((c) => {
        return (
          <Card key={c.buku} elevation={5} className={classes.card}>
            <CardMedia>
              <Img
                fluid={dawrohLogo.fluid}
                style={{
                  width: '10vw',
                  height: '10vw',
                  borderRadius: '10px',
                }}
              />
            </CardMedia>
            <CardContent>
              <Typography variant="h5" className={classes.day}>
                {c.hari}
              </Typography>
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
