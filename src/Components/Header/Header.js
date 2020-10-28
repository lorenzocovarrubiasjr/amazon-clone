import React from "react";
import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        alt="amazon logo"
        src="https://i.imgur.com/hsIYjI9.png"
      />

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_option_line1">Hello World</span>
        </div>
        <div className="header_option">
          <span className="header_option_line2">Returns</span>
        </div>
        <div className="header_option">
          <span className="header_option_line3">Your Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
