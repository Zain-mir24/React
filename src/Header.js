import React from "react";
import { Link } from "react-router-dom";
import {
  customStyle,
  head,
  Searchicon,
  Headernav,
  headerlink,
  headerSearch,
} from "./headercss";
import SearchIcon from "@material-ui/icons/Search";
const sinput = {
  height: "12px",
  padding: "15px",
  border: "1px solid orange",
  width: "100%",
};
const Header = () => {
  return (
    <nav className="header" style={head}>
      {/* Logo on the left */}
      <Link to="/checkout">
        <img
          style={customStyle}
          className="header__logo"
          src="https://www.wired.com/wp-content/uploads/2016/10/amazon-logo-1024x768.jpg"
        ></img>
      </Link>
      {/* Search box */}
      <div style={headerSearch}>
        <input type="text" style={sinput} />
        <SearchIcon style={Searchicon} />
      </div>
      {/* The 3 links on the right */}

      <div style={Headernav}>
        {/* 1stlink */}
        <Link style={headerlink}>
        <div>
        <span>Hello Qazi</span>
        <span>Sign in</span>
        </div>
       

        </Link>
        {/* 2ndlink */}
        {/* 3rdlink */}
        {/* 4thlink */}
      </div>
    </nav>
  );
};

export default Header;
