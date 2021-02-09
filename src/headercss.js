import React from "react";
const customStyle = {
  width: "150px",
  marginTop: "0",
  marginRight: "10px",
  marginLeft: "5px",
  objectFit: "contain",
};
const head = {
  backgroundColor: "#131921",
  display: "flex",
  alignItems: "center",
  position: "Fixed",
  top:"0",
  zIndex:"100",
  width:"100%",
  marginBottom: "300px"

};
const Searchicon = {
  backgroundColor: "#cd9042",
  padding: "5px !important",
  height: "33px",
};
const headerSearch = {
  display: "flex",
  flex: "1",
};

const Headernav = {
  display: "flex",
  justifyContent: "space-evenly",
};
const headerlink = {
  color: "white",
  textDecoration: "none",
};
const headerOption = {
  display: "flex",
  flexDirection: "column",
  marginLeft:"10px",
  marginRight:"10px",
};
const headerOptionlineone = {
  fontSize: "10px"
};
const headerOptionlinetwo = {
  fontSize:"13px",
  fontWeight:"800"
};
const headerOptionBasket={
  display: "flex",
  alignItems: "center"

}
const headerbasketcount={
  fontSize:"13px",
  fontWeight:"800",
  marginLeft:"10px",
  marginRight: "10px",
}
export {
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
  headerbasketcount
};
