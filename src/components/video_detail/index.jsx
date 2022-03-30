import React from "react";
import styles from "./styles.module.css";

const VideoDetail = ({ video }) => {
  return (
    <section className={styles.detail}>
      <iframe
        title="youtube video player"
        className={styles.video}
        type="text/html"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      />
      <h2 style={{ marginBottom: "5px" }}>{video.snippet.title}</h2>
      <hr />
      <h3 style={{ marginBottom: "8px" }}>{video.snippet.channelTitle}</h3>
      <hr />
      <pre className={styles.description}>{video.snippet.description}</pre>
      <hr />
    </section>
  );
};

export default VideoDetail;
