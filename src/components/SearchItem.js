import React, { useCallback } from "react";

const SearchItem = ({
  video,
  selectVideo,
  setIsSearch,
  isSearch,
  setSearchVideos,
  setRecentVideos,
}) => {
  const onVideoClick = useCallback(() => {
    console.log(video);
    selectVideo(video);
    setSearchVideos(false);
    setIsSearch(!isSearch);
    setRecentVideos((prev) => [video, ...prev]);
  }, [video, selectVideo]);

  return (
    <div className="SearchItem" onClick={onVideoClick}>
      <img src={video.snippet.thumbnails.medium.url} alt="" />
      <h3>{video.snippet.title}</h3>
      <div>{video.snippet.channelTitle}</div>
    </div>
  );
};

export default SearchItem;
