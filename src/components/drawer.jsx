import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import CssBaseline from "@material-ui/core/CssBaseline"
import Divider from "@material-ui/core/Divider"
import Drawer from "@material-ui/core/Drawer"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import MenuIcon from "@material-ui/icons/Menu"
import Toolbar from "@material-ui/core/Toolbar"
import {
  RiRecordMailFill,
  RiInformationFill,
  RiMoonFill,
  RiSunFill,
} from "react-icons/ri"
import { GoRadioTower } from "react-icons/go"
import Switch from "@material-ui/core/Switch"
import { styled, makeStyles, useTheme } from "@material-ui/core/styles"
import AppContext from "./appContext"

const drawerWidth = 150
const StyledLink = styled(Link)(({
  theme
}) => ({
  color: theme.palette.primary.contrastText,
  fontSize: "1.2em",
  textDecoration: 'none',
  padding: 2,
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
    display: "flex",
  },
  toolbar: theme.mixins.toolbar,
  titleBar: {
    color: theme.palette.primary.contrastText,
    paddingTop: "1em",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.dark,
  },
}))

function ResponsiveDrawer(props) {
  const { window } = props
  const classes = useStyles()
  const theme = useTheme()
  const appContext = React.useContext(AppContext)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button key="radio">
          <StyledLink id="radio" className="menu-item" to="/">
            <GoRadioTower /> Radio
          </StyledLink>
        </ListItem>

        <ListItem button key="archive">
          <StyledLink id="archive" className="menu-item" to="/archive">
            <RiRecordMailFill /> Arsip
          </StyledLink>
        </ListItem>

        <ListItem button key="about">
          <StyledLink id="about" className="menu-item" to="/about">
            <RiInformationFill /> Tentang
          </StyledLink>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="darkMode" style={{ justifyContent: "center" }}>
          <div>
            <RiSunFill />
                  <Switch
                    checked={appContext.darkMode}
                    label="Dark Mode"
                    size="small"
                    color="primary"
                    onChange={() => appContext.setDarkMode(!appContext.darkMode)}
                    name="darkMode"
                    inputProps={{ "aria-label": "primary switch" }}
                  />
            <RiMoonFill />
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
          anchor={theme.direction === "rtl" ? "right" : "left"}
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
