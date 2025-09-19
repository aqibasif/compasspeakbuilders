import React from "react";

const CustomLink = ({ href, children, onClick, className }) => {
  return (
    <a
      className={`custom-link ${className}`}
      href={href}
      onClick={onClick}
      title={children}
    >
      {children}
    </a>
  );
};

export default CustomLink;
