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
  Switch,
  Typography,
} from '@material-ui/core'
import {
  Menu as MenuIcon,
  Info as InfoIcon,
  Brightness2 as MoonIcon,
  Brightness4 as SunIcon,
  Radio as RadioIcon,
} from '@material-ui/icons'
import { styled, makeStyles } from '@material-ui/core/styles'

const drawerWidth = 150
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
    color: theme.palette.primary.contrastText,
    paddingTop: '1em',
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
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <StyledLink id="home" className="menu-item" to="/">
          <ListItem button key="home">
            <RadioIcon /> <Typography variant="h6"> Home </Typography>
          </ListItem>
        </StyledLink>

        <StyledLink id="about" className="menu-item" to="/about">
          <ListItem button key="about">
            <InfoIcon /> <Typography variant="h6"> Tentang</Typography>
          </ListItem>
        </StyledLink>
      </List>
      <Divider />
      <List>
        <ListItem button key="darkMode" style={{ justifyContent: 'center' }}>
          <div>
            <SunIcon />
            <Switch
              checked={darkMode}
              label="Dark Mode"
              size="small"
              color="primary"
              onChange={() => toggleDarkMode()}
              name="darkMode"
              inputProps={{ 'aria-label': 'primary switch' }}
            />
            <MoonIcon />
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
