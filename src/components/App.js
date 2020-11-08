import "./app.css";
import React, { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar";
// import youtube from "../apis/youtube";
import { VideoList } from "./VideoList";
import { VideoDetail } from "./VideoDetail";
import useVideos from "../hooks/useVideos";

// refactoring the App. Functional components.
export const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("christmas");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <p className="ui purple right ribbon label">Videos:</p>
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};
