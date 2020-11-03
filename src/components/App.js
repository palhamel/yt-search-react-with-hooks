import "./app.css";
import React, { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar";
import youtube from "../api/youtube";
import { VideoList } from "./VideoList";
import { VideoDetail } from "./VideoDetail";

// refactoring the App. Functional components.

// useState x 2

const App = () => {

}

// ---------

export class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    this.onTermSubmit("https://www.youtube.com/watch?v=Rnil5LyK_B0");
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <p className="ui purple right ribbon label">Videos:</p>
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
