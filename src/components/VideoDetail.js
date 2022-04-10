import React, { useState } from "react";
import Parser from "html-react-parser";

const VideoDetail = ({ video, video: { snippet } }) => {
  const [isSeeMoreBTN, setIsSeeMoreBTN] = useState(false);
  console.log(video);
  return (
    <div className="VideoDetail">
      <iframe
        title="youtube video player"
        className="Videobar"
        type="text/html"
        width="100%"
        height="500px"
        src={
          video.id.videoId
            ? `https://www.youtube.com/embed/${video.id.videoId}`
            : `https://www.youtube.com/embed/${video.id}`
        }
        frameBorder="0"
        allowFullScreen
      />
      <h4>{snippet.title}</h4>
      <div>{snippet.publishedAt}</div>
      <div style={{ opacity: "0.7" }}>{snippet.channelTitle}</div>
      <p>
        {isSeeMoreBTN
          ? Parser(snippet.description.replace(/\n/g, "<br/>"))
          : Parser(
              snippet.description.replace(/\n/g, "<br/>").substring(0, 50)
            ) + "..."}
      </p>
      <div
        onClick={() => {
          setIsSeeMoreBTN(!isSeeMoreBTN);
        }}
        style={{ cursor: "pointer" }}
      >
        {isSeeMoreBTN ? ">접기" : ">더보기"}
      </div>
    </div>
  );
};

export default VideoDetail;
