import React from 'react'
import { Book } from '@material-ui/icons'
import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
} from '@material-ui/lab'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import cfg from '../utils/config'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
    '&:hover': {
      border: '10',
      borderRadius: 5,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      borderColor: theme.palette.primary.main,
    },
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
  return (
    <Timeline align="alternate">
      {cfg.schedule.map((c) => {
        return (
          <TimelineItem key={c.buku}>
            <TimelineOppositeContent>
              <Typography variant="h5" className={classes.day}>
                {c.hari}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <Book color="secondary" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper className={classes.paper}>
                <Typography variant="h6" color="primary">
                  {c.buku}
                </Typography>
                <Typography variant="body2">{c.penulis}</Typography>
                <Typography variant="caption" color="textSecondary">
                  {c.pemateri}
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        )
      })}
    </Timeline>
  )
}
