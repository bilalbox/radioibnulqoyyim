import React, { Component } from "react"
import Parser from "rss-parser"
import styled from "styled-components"
import Paper from "@material-ui/core/Paper"
import InputBase from "@material-ui/core/InputBase"
import IconButton from "@material-ui/core/IconButton"
import Fab from "@material-ui/core/Fab"
import CachedIcon from "@material-ui/icons/Cached"
import ClearIcon from "@material-ui/icons/Clear"
import Tooltip from "@material-ui/core/Tooltip"
import store from "store/dist/store.modern"

import PodcastPlayer from "./podcastPlayer"
import cfg from "../utils/config"
import { isUndefined } from "lodash"

const Container = styled.div`
  padding: 0 2em;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  @media (max-width: 800px) {
    padding: 0 1em;
  }
`
const ControlsContainer = styled.div`
  padding: 0.2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;
  width: auto;
`

const Searchbar = styled(Paper)`
  padding: 0.2em;
  background-color: var(--panel);
  display: flex;
  flex-direction: row;
  width: auto;
`

const SearchInput = styled(InputBase)`
  padding: 0.2em;
  background-color: var(--panel);
  color: var(--textTitle);
  width: auto;
`
const ClearButton = styled(ClearIcon)`
  color: var(--textTitle);
`

const RefreshButton = styled(Fab)`
  margin-left: 1em;
  color: var(--textTitle);
  align-content: center;
  background-color: var(--panel);
  color: var(--textTitle);
  text-align: center;

  .MuiFab-extended {
    background-color: var(--panel);
  }
`

let parser = new Parser()

class Archive extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sites: [cfg.urls.rss],
      searchString: "",
      podcasts: [],
      renderedPodcasts: [],
    }
  }

  getPodcasts = async () => {
    let podcasts = []
    if (isUndefined(store.get("podcasts"))) {
      for (let site of this.state.sites) {
        let feed = await parser.parseURL(site)
        let feedItems = feed.items.map((item) => ({
          site: feed.title,
          id: item.link,
          title: item.title,
          audioUrl: item.enclosure.url,
          description: item.itunes.summary,
          date: item.isoDate,
          imageUrl: item.itunes.image,
          duration: item.itunes.duration,
        }))
        podcasts = [...podcasts, ...feedItems]
        store.set("podcasts", podcasts)
      }
    } else {
      podcasts = store.get("podcasts")
    }
    podcasts.sort((a, b) => new Date(b.date) - new Date(a.date))
    this.setState({ podcasts: podcasts })
  }

  renderPodcasts = (podcasts) => {
    let renderedPodcasts = podcasts.map((podcast) => (
      <PodcastPlayer
        key={podcast.id}
        title={podcast.title}
        date={podcast.date}
        audioUrl={podcast.audioUrl}
        image={podcast.imageUrl}
      />
    ))
    this.setState({ renderedPodcasts: renderedPodcasts })
  }

  refreshPodcasts = () => {
    store.remove("podcasts")
    this.getPodcasts().then(() => {
      this.renderPodcasts(this.state.podcasts)
    })
  }

  componentDidMount() {
    {
      this.getPodcasts().then(() => {
        this.renderPodcasts(this.state.podcasts)
      })
    }
  }

  runSearch = (e) => {
    let filteredPodcasts = []
    this.setState({ searchString: e.target.value.trim().toLowerCase() })
    if (this.state.searchString.length > 0) {
      filteredPodcasts = this.state.podcasts.filter((podcast) =>
        podcast.title.toLowerCase().match(this.state.searchString)
      )
    } else {
      filteredPodcasts = this.state.podcasts
    }
    this.renderPodcasts(filteredPodcasts)
  }

  clearSearch = () => {
    this.setState({ searchString: "" })
    this.renderPodcasts(this.state.podcasts)
  }

  render() {
    return (
      <Container>
        <ControlsContainer>
          <Searchbar elevation={5}>
            <SearchInput
              size="small"
              color="inherit"
              value={this.state.searchString}
              onChange={this.runSearch}
              placeholder="Cari disini..."
            />
            <Tooltip title="Hapus pencarian">
              <IconButton onClick={this.clearSearch}>
                <ClearButton color="inherit" />
              </IconButton>
            </Tooltip>
          </Searchbar>
          <Tooltip title="Cek untuk rekaman baru">
            <RefreshButton onClick={this.refreshPodcasts} size="small">
              <CachedIcon />
            </RefreshButton>
          </Tooltip>
        </ControlsContainer>
        <div>{this.state.renderedPodcasts}</div>
      </Container>
    )
  }
}

export default Archive
