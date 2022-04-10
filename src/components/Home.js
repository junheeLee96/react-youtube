import React from "react";
import SearchWrap from "./SearchWrap";
import Video from "./Video";
import VideoDetail from "./VideoDetail";

const Home = ({
  selectedVideo,
  videos,
  selectVideo,
  setRecentVideos,
  searchVideos,
  setIsSearch,
  setSearchVideos,
}) => {
  return (
    <div className={selectedVideo ? "Home-selectedVideo" : "Home"}>
      {searchVideos ? (
        <SearchWrap
          searchVideos={searchVideos}
          selectVideo={selectVideo}
          setIsSearch={setIsSearch}
          setSearchVideos={setSearchVideos}
          setRecentVideos={setRecentVideos}
        />
      ) : (
        <>
          {selectedVideo && <VideoDetail video={selectedVideo} />}
          <div
            className={
              selectedVideo ? "VideoItemWrap-selectedVideo" : "VideoItemsWrap"
            }
          >
            {videos &&
              videos.map((video) => (
                <Video
                  video={video}
                  key={video.id}
                  selectVideo={selectVideo}
                  selectedVideo={selectedVideo}
                  setRecentVideos={setRecentVideos}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
