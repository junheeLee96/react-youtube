import React, { useRef, useState } from "react";

const Header = ({
  onSearch,
  setSelectedVideo,
  setSearchVideos,
  setIsSearch,
  isSearch,
  setVideos,
  setIsMenuBtnClick,
  isMenuBtnClick,
}) => {
  const SearchInput = useRef();

  const onHomeClick = () => {
    setSelectedVideo(null);
    setSearchVideos(null);
  };

  const handleSearch = () => {
    const value = SearchInput.current.value;
    onSearch(value);
    setIsSearch(!isSearch);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const onMenuBtnClick = () => {
    setIsMenuBtnClick(!isMenuBtnClick);
  };

  return (
    <>
      <div className="HeaderWrap">
        <div>
          {/* <div onClick={onMenuBtnClick} className="MenuBtn">
            버튼
          </div> */}
          <div onClick={onHomeClick} style={{ cursor: "pointer" }}>
            Home
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <input type="text" ref={SearchInput} onKeyPress={onKeyPress} />
          <button onClick={handleSearch}>검색</button>
        </div>
        <div className="YOUTUBE-APP">YOUTUBE APP!</div>
      </div>
    </>
  );
};

export default Header;
