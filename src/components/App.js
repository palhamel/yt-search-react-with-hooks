import "./app.css";
import React, { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar";
import youtube from "../apis/youtube";
import { VideoList } from "./VideoList";
import { VideoDetail } from "./VideoDetail";

// refactoring the App. Functional components.
export const App = () => {
  // const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // setSelectedVideo(response.data.items[0]);

  // useEffect(() => {
  //   onTermSubmit("Christmas song");
  // }, []);

  // const onTermSubmit = async (term) => {
  //   const response = await youtube.get("/search", {
  //     params: {
  //       q: term,
  //     },
  //   });
  //   setVideos(response.data.items);
  // };
  //

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <p className="ui purple right ribbon label">Videos:</p>
            <VideoList
              onVideoSelect={setSelectedVideo}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
