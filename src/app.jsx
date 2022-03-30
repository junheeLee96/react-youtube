import React, { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import VideoList from "./components/video_list";
import SearchHeader from "./components/search_header";
import VideoDetail from "./components/video_detail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const search = useCallback(
    (query) => {
      setSelectedVideo(null);
      youtube
        .search(query) //
        .then((videos) => setVideos(videos));
    },
    [youtube]
  );
  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, [youtube]);

  return (
    <div className="App">
      <SearchHeader onSearch={search} />
      <section className="section">
        {selectedVideo && (
          <div className="section2">
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? "list" : "grid"}
          />
        </>
      </section>
    </div>
  );
}

export default App;
