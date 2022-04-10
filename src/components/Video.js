import React, { useCallback, useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";

const Video = ({
  video,
  video: { snippet },
  selectVideo,
  selectedVideo,
  setRecentVideos,
  recentVideos,
}) => {
  const onVideoClick = useCallback(() => {
    selectVideo(video);
    // setRecentVideos((prev) => [video, ...prev]);
    // localStorage.setItem("videos", JSON.stringify(video));
    setRecentVideos((prev) => [video, ...prev]);
  }, [video, selectVideo]);

  return (
    <div
      className={selectedVideo ? "VideoItem-selectedVideo" : "VideoItem"}
      onClick={onVideoClick}
    >
      <img
        src={snippet.thumbnails.medium.url}
        alt=""
        style={{ width: "100%" }}
        className="VideoItem-Img"
      />
      {selectedVideo ? (
        <h5 style={{ margin: "0" }}>
          {snippet.title.length > 40
            ? snippet.title.substr(0, 40) + "..."
            : snippet.title}
        </h5>
      ) : (
        <h3 style={{ margin: "0" }}>
          {snippet.title.length > 25
            ? snippet.title.substr(0, 25) + "..."
            : snippet.title}
        </h3>
      )}
      <div style={{ opacity: "0.7" }}>{snippet.channelTitle}</div>
    </div>
  );
};

export default Video;
