import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Video from "./components/Video";
import "./App.css";
import VideoDetail from "./components/VideoDetail";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

const App = () => {
  const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videos, setVideos] = useState(null); //requestonyoutube() 결과
  const [selectedVideo, setSelectedVideo] = useState(null); //영상 눌렀을 때 저장
  const [searchVideos, setSearchVideos] = useState(null); //검색 결과
  const [isSearch, setIsSearch] = useState(false);
  const [recentVideos, setRecentVideos] = useState([]); //최근 본 영상
  const [isMenuBtnClick, setIsMenuBtnClick] = useState(false);

  const selectVideo = (vid) => {
    setSelectedVideo(vid);
  };

  //api 요청을 위한 자료
  const UserData = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: { key: KEY },
  });

  //유트브 api에 최근 핫한 동영상 요청
  const requestonyoutube = async () => {
    const data = await UserData.get("videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 25,
      },
    });
    setVideos(data.data.items);
  };

  // useEffect(() => {
  //   console.log(recentVideos);
  // }, [recentVideos]);

  //검색 요청
  const onSearch = useCallback(async (query) => {
    const data = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${KEY}`,
      {
        params: {
          part: "snippet",
          q: query,
          maxResults: 25,
        },
      }
    );
    setSearchVideos(data);
  });

  //유트브 api에 최근 핫한 동영상 요청
  useEffect(() => {
    requestonyoutube();
  }, []);

  useEffect(() => {
    console.log(recentVideos);
  }, [recentVideos]);

  return (
    <div className="App">
      <div className="Container">
        <div className="Header">
          <Header
            onSearch={onSearch}
            setVideos={setVideos}
            setSelectedVideo={setSelectedVideo}
            setSearchVideos={setSearchVideos}
            setIsSearch={setIsSearch}
            isSearch={isSearch}
            isMenuBtnClick={isMenuBtnClick}
            setIsMenuBtnClick={setIsMenuBtnClick}
          />
        </div>

        <div className="SideBar">
          <SideBar
            recentVideos={recentVideos}
            selectVideo={selectVideo}
            isMenuBtnClick={isMenuBtnClick}
          />
        </div>

        <Home
          selectedVideo={selectedVideo}
          videos={videos}
          setVideos={setVideos}
          selectVideo={selectVideo}
          recentVideos={recentVideos}
          setRecentVideos={setRecentVideos}
          searchVideos={searchVideos}
          setSearchVideos={setSearchVideos}
          setIsSearch={setIsSearch}
          isSearch={isSearch}
          isMenuBtnClick={isMenuBtnClick}
        />
      </div>
    </div>
  );
};

export default App;
