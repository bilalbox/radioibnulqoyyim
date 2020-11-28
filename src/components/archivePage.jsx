import React from 'react'
import axios from 'axios'
import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import {
  CloudDownload,
  KeyboardArrowUp,
  KeyboardArrowDown,
} from '@material-ui/icons'
import { makeStyles, withStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.primary.main,
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  },
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
}))

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

const Row = ({ seriId }) => {
  const classes = useStyles()
  const [seriData, setSeriData] = React.useState({
    title: '',
    description: '',
    files: [],
  })
  const [open, setOpen] = React.useState(false)
  React.useEffect(() => {
    axios
      .get(`https://archive.org/metadata/${seriId}`)
      .then(function (response) {
        const title = response.data.metadata.title
        const description = response.data.metadata.description
        const files = response.data.files
          .filter((f) => f.format === 'VBR MP3')
          .map((ff) => ({
            judul: ff.title,
            url: `https://archive.org/download/${seriId}/${ff.name}`,
            pemateri: ff.artist,
            seri: ff.album,
          }))
        const category = files[0].seri
        setSeriData({
          title,
          description,
          category,
          files,
        })
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [seriId])

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {seriData.title}
        </TableCell>
        <TableCell align="right">{seriData.category}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{
            paddingBottom: 0,
            paddintTop: 0,
          }}
          colSpan={6}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <div dangerouslySetInnerHTML={{ __html: seriData.description }} />
              <Table size="small" aria-label="table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>EPISODE</StyledTableCell>
                    <StyledTableCell align="right">PEMATERI</StyledTableCell>
                    <StyledTableCell align="right">UNNDUH</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {seriData.files.map((file) => (
                    <StyledTableRow key={file.judul}>
                      <StyledTableCell component="th" scope="row">
                        {file.judul}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {file.pemateri}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <a href={file.url}>
                          <CloudDownload className={classes.link} />
                        </a>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

function seriTable() {
  const seriList = [
    '10_20201128_202011',
    '10_20201128_202011',
    '10_20201128_202011',
    '10_20201128_202011',
    '10_20201128_202011',
    '10_20201128_202011',
    '10_20201128_202011',
    '10_20201128_202011',
    '10_20201128_202011',
  ]

  return (
    <TableContainer component={Paper}>
      <Table aria-label="table">
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell>SERI</StyledTableCell>
            <StyledTableCell align="right">KATEGORI</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {seriList.map((seriId) => (
            <Row key={seriId} seriId={seriId} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default seriTable
