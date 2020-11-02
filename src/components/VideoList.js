import React from "react";

import { VideoItem } from "./VideoItem";

export const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect}
        video={video}
        key={video.id.videoId}
      />
    );
  });
  // props.videos
  // return <div>{videos.length}</div>;
  return <div className="ui relaxed divided list search-bar purple segment">{renderedList}</div>;
};
