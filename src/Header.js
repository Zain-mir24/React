import React from "react";
import './Header.css';

const customStyle={
    width:"100px"
}
const Header = () => {
  return (
    <nav className="header">
      <img
        style={customStyle}
        className="header__logo"
        src="https://tse3.mm.bing.net/th?id=OIP.7YtegzYvJ4oO4JlnkCFozAHaDL&pid=Api&P=0&w=377&h=162"
      ></img>
    </nav>
  );
};

export default Header;
