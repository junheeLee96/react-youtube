import styles from "./styles.module.css";
import React, { memo, useRef } from "react";
import img1 from "./ytimg.webp";
import img2 from "./qq.jpg";
import search from "./y_search.png";

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <header className="SearchHeader">
      <div>
        <img src={img1} alt="logo" style={{ width: "70px", height: "50px" }} />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <div>
        <input
          ref={inputRef}
          className={styles.input}
          type="search"
          placeholder="Search..."
          onKeyPress={onKeyPress}
        />
        <button type="submit" onClick={onClick}>
          <img
            className={styles.buttonImg}
            src={search}
            alt="search"
            style={{ width: "20px", height: "18px" }}
          />
        </button>
      </div>
      <div>
        <img
          src={img2}
          alt="logo"
          style={{ width: "50px", height: "50px", backgroundColor: "white" }}
        />
      </div>
    </header>
  );
});

export default SearchHeader;
