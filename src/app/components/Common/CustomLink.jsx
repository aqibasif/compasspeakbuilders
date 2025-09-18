import React from "react";

const CustomLink = ({ children, onClick }) => {
  return <a onClick={onClick}>{children}</a>;
};

export default CustomLink;
