import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@material-ui/core'
import {
  Menu as MenuIcon,
  Info as InfoIcon,
  WbSunny as SunIcon,
  Brightness3 as MoonIcon,
  Radio as RadioIcon,
  CalendarToday as CalendarIcon,
  Archive as ArchiveIcon,
} from '@material-ui/icons'
import { styled, makeStyles } from '@material-ui/core/styles'

const drawerWidth = 180
const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: '1em',
  textDecoration: 'none',
  padding: theme.spacing(10),
}))

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  titleBar: {
    paddingTop: '0',
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.dark,
  },
}))

function ResponsiveDrawer({ window, darkMode, toggleDarkMode }) {
  const classes = useStyles()
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <div className={[classes.toolbar, classes.drawerPaper]} />
      <Divider />
      <List>
        <StyledLink id="home" className="menu-item" to="/">
          <ListItem button key="home">
            <RadioIcon style={{ marginRight: '10px' }} />{' '}
            <Typography variant="h6"> Radio </Typography>
          </ListItem>
        </StyledLink>

        <StyledLink id="schedule" className="menu-item" to="/schedule">
          <ListItem button key="schedule">
            <CalendarIcon style={{ marginRight: '10px' }} />{' '}
            <Typography variant="h6"> Kajian Rutin </Typography>
          </ListItem>
        </StyledLink>

        <StyledLink id="archive" className="menu-item" to="/archive">
          <ListItem button key="archive">
            <ArchiveIcon style={{ marginRight: '10px' }} />{' '}
            <Typography variant="h6"> Arsip Kajian </Typography>
          </ListItem>
        </StyledLink>

        <StyledLink id="about" className="menu-item" to="/about">
          <ListItem button key="about">
            <InfoIcon style={{ marginRight: '10px' }} />{' '}
            <Typography variant="h6"> Tentang </Typography>
          </ListItem>
        </StyledLink>
      </List>
      <Divider />
      <List>
        <ListItem key="darkMode" style={{ justifyContent: 'center' }}>
          <div>
            <IconButton onClick={() => toggleDarkMode()}>
              {darkMode && <SunIcon fontSize="large" />}
              {!darkMode && (
                <MoonIcon fontSize="large" style={{ color: 'white' }} />
              )}
            </IconButton>
          </div>
        </ListItem>
      </List>
    </div>
  )

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

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <h2 className={classes.titleBar}>{siteMetadata.title}</h2>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="menu">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  )
}

export default ResponsiveDrawer
