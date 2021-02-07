import React from "react";
const footers = {
  color: "black",
  position: "absolute",
  textAlign: "center",
  bottom: "0",
  width: "100%",
  height: "2.5rem",

};
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={footers}>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
