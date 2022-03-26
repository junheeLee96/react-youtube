import React, { useCallback, memo } from "react";
import styles from "./styles.module.css";

const VideoItem = memo(
  ({ video, video: { snippet }, onVideoClick, display }) => {
    const displayType = display === "list" ? styles.list : styles.grid;
    const onClick = useCallback(() => {
      onVideoClick(video);
    }, [onVideoClick, video]);
    return (
      <>
        <div
          className="VideoItem"
          onClick={onClick}
          style={{ cursor: "pointer" }}
        >
          <>
            <img
              className="gd3"
              src={snippet.thumbnails.medium.url}
              alt="video thumbnail"
            />
            <>
              <p className={styles.title}>
                {snippet.title.length > 25
                  ? snippet.title.substr(0, 25) + "..."
                  : snippet.title}
              </p>
              <p className={styles.channel}>{snippet.channelTitle}</p>
            </>
          </>
        </div>
      </>
    );
  }
);

export default VideoItem;
