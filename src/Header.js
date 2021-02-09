import React from "react";
import { Link } from "react-router-dom";
import {customStyle , head ,Searchicon,headerSearch} from "./headercss"
import SearchIcon from "@material-ui/icons/Search";
const sinput = {
 height:"12px",
 padding:"15px",
 border:"1px solid orange",
 width:"100%"
};
const Header = () => {
  return (
    <nav className="header" style={head}>
      <Link to="/checkout">
        <img
          style={customStyle}
          className="header__logo"
          src="https://www.wired.com/wp-content/uploads/2016/10/amazon-logo-1024x768.jpg"
        ></img>
      </Link>
      <div style={headerSearch}>
        <input type="text" style={sinput} />
        <SearchIcon style={Searchicon} />
      </div>
    </nav>
  );
};

export default Header;
