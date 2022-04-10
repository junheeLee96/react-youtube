import React, { useEffect, useState } from "react";
import SlideBarItem from "./SlideBarItem";

const SideBar = ({ recentVideos, selectVideo, isMenuBtnClick }) => {
  if (recentVideos.length > 10) {
    recentVideos.splice(-1, 1);
  }

  const [isClick, setIsClick] = useState(false);

  const onBtnClick = () => {
    setIsClick(!isClick);
  };

  return (
    <>
      <div className="SlideBar-header">
        <div>최근 본 영상</div>
        {/* <div className="SlideBar-header-exit" onClick={onBtnClick}>
          gdgd
        </div> */}
      </div>
      <div style={{ width: "100%" }}>
        {recentVideos &&
          recentVideos.map((video) => (
            <>
              <SlideBarItem
                video={video}
                key={video.id}
                selectVideo={selectVideo}
                isMenuBtnClick={isMenuBtnClick}
              />
            </>
          ))}
      </div>
    </>
  );
};

export default SideBar;
