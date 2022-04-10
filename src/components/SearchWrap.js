import React from "react";
import SearchItem from "./SearchItem";

const SearchWrap = ({
  searchVideos: {
    data: { items },
  },
  selectVideo,
  setIsSearch,
  setSearchVideos,
  setVideos,
  setRecentVideos,
}) => {
  console.log(items);
  return (
    <div className="SearchWrap">
      {items.map((video) => (
        <>
          <SearchItem
            video={video}
            selectVideo={selectVideo}
            setIsSearch={setIsSearch}
            setSearchVideos={setSearchVideos}
            setRecentVideos={setRecentVideos}
          />
        </>
      ))}
    </div>
  );
};

export default SearchWrap;
