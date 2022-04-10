import React, { useCallback } from "react";

const SlideBarItem = ({ video, selectVideo, isMenuBtnClick }) => {
  const onVideoClick = useCallback(() => {
    selectVideo(video);
  }, [video, selectVideo]);
  return (
    <div
      style={{ padding: "5px 0 5px 0", cursor: "pointer" }}
      onClick={onVideoClick}
    >
      <img
        src={video.snippet.thumbnails.default.url}
        alt=""
        key={video.id}
        style={{ width: "100%" }}
      />
      <div>{isMenuBtnClick ? "" : video.snippet.channelTitle}</div>
    </div>
  );
};

export default SlideBarItem;
