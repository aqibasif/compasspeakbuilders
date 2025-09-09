import React from "react";
import AnimatedLink from "./AnimatedLink";

const Button = ({ text = "Text", route = "/" }) => {
  return (
    <div className="global-button">
      <AnimatedLink href={route}>
        <button title={text}>{text}</button>
      </AnimatedLink>
    </div>
  );
};

export default Button;
