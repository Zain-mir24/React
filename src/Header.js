import React from "react";
import { Link } from "react-router-dom";
import {
  customStyle,
  head,
  Searchicon,
  Headernav,
  headerlink,
  headerSearch,
  headerOption,
  headerOptionlinetwo,
  headerOptionlineone,
  headerOptionBasket,
  headerbasketcount,
} from "./headercss";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
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
        <Link to="/Login" style={headerlink}>
          <div style={headerOption}>
            <span style={headerOptionlineone}>Hello Qazi</span>
            <span style={headerOptionlinetwo}>Sign in</span>
          </div>
        </Link>
        {/* 2ndlink */}
        <Link to="/" style={headerlink}>
          <div style={headerOption}>
            <span style={headerOptionlineone}>Return order</span>
            <span style={headerOptionlinetwo}>& order</span>
          </div>
        </Link>
        {/* 3rdlink */}
        <Link to="/" style={headerlink}>
          <div style={headerOption}>
            <span style={headerOptionlineone}> your</span>
            <span style={headerOptionlinetwo}>Prime</span>
          </div>
        </Link>
        {/* 4thlink */}
        <Link to="/checkOut" style={headerlink}>
          <div style={headerOptionBasket}>
            <ShoppingBasketIcon />
            <span style={headerbasketcount}>0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
