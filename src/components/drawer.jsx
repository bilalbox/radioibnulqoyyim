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
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import Switch from "@material-ui/core/Switch"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import styled from "styled-components"

const drawerWidth = 180
const StyledLink = styled(Link)`
  color: var(--textTitle);
  font-size: 1.4em;
  text-left: center;
  text-decoration: none;
  text-align: left;
  padding: 1;

  &:hover {
    color: var(--hover);
  }
`

const TitleBar = styled.h2`
  color: var(--textTitle);
  font-size: 1.4em;
  text-align: center;
  padding: 1;
`

const MyDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    background-color: var(--bg);
  }
`

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

function ResponsiveDrawer(props) {
  const { window } = props
  const classes = useStyles()
  const theme = useTheme()
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
            <ThemeToggler>
              {({ theme, toggleTheme }) => (
                <label>
                  <Switch
                    checked={theme === "dark"}
                    label="Dark Mode"
                    size="small"
                    color="primary"
                    onChange={(e) =>
                      toggleTheme(e.target.checked ? "dark" : "light")
                    }
                    name="darkMode"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                </label>
              )}
            </ThemeToggler>
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
          <TitleBar>{siteMetadata.title}</TitleBar>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="menu">
        <MyDrawer
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
        </MyDrawer>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
    </div>
  )
}

export default ResponsiveDrawer
