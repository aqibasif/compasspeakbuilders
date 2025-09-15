import React from "react";
import AnimatedLink from "./AnimatedLink";

const Button = ({ text = "Text", route = "/", onClick, variant, icon }) => {
  return (
    <AnimatedLink href={route} onClick={onClick}>
      <button className={variant === 2 ? "button-two" : ""} title={text}>
        <div className='button-content'>
          {text}
          {!!icon && <span className='icon-circle'>{icon}</span>}
        </div>
      </button>
    </AnimatedLink>
  );
};

export default Button;
