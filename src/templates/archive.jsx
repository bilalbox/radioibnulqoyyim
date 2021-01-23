import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  Box,
  Button,
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
  Archive,
  CloudDownload,
  KeyboardArrowUp,
  KeyboardArrowDown,
} from '@material-ui/icons'
import { makeStyles, withStyles } from '@material-ui/core/styles'

import Layout from '../components/layout'
import SEO from '../components/seo'

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

const Row = ({ seriData }) => {
  const classes = useStyles()
  const [openRow, setOpenRow] = React.useState(false)
  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpenRow(!openRow)}
          >
            {openRow ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {seriData.title}
        </TableCell>
        <TableCell component="th" scope="row">
          {seriData.category}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell
          style={{
            paddingBottom: 0,
            paddintTop: 0,
          }}
          colSpan={6}
        >
          <Collapse in={openRow} timeout="auto" unmountOnExit>
            <Box
              margin={1}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div
                dangerouslySetInnerHTML={{ __html: seriData.description }}
                style={{ marginBottom: '10px' }}
              />
              <Table size="small" aria-label="table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>EPISODE</StyledTableCell>
                    <StyledTableCell>PEMATERI</StyledTableCell>
                    <StyledTableCell align="right">UNDUH</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {seriData.files.map(({ judul, pemateri, url }) => (
                    <StyledTableRow key={judul}>
                      <StyledTableCell component="th" scope="row">
                        {judul}
                      </StyledTableCell>
                      <StyledTableCell>{pemateri}</StyledTableCell>
                      <StyledTableCell align="right">
                        <IconButton color="primary" href={url}>
                          <CloudDownload />
                        </IconButton>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
              <Button
                variant="contained"
                color="primary"
                endIcon={<Archive />}
                href={seriData.zipUrl}
                style={{
                  maxWidth: '200px',
                  margin: '20px',
                }}
              >
                Unduh Semua
              </Button>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

const SeriTable = ({ seriList }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="table">
        <TableHead>
          <TableRow>
            <StyledTableCell />
            <StyledTableCell>SERI</StyledTableCell>
            <StyledTableCell>KATEGORI</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {seriList.map((seriData) => (
            <Row seriData={seriData} key={seriData.title} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ({ pageContext: { allArchiveItems } }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title={siteMetadata.title} />
      <SeriTable seriList={allArchiveItems} />
    </Layout>
  )
}
