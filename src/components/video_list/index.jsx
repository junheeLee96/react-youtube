import React from "react";
import VideoItem from "../video_item";
import styles from "./styles.module.css";

const VideoList = ({ videos, onVideoClick, display }) => {
  return (
    <>
      <div style={{ marginTop: "15px" }}>다른 영상</div>
      <div className="ul_videos">
        {videos.map((video) => (
          <VideoItem
            key={video.id}
            video={video}
            onVideoClick={onVideoClick}
            display={display}
          />
        ))}
      </div>
    </>
  );
};

export default VideoList;
