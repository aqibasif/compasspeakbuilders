// import React from "react";

// const CustomLink = ({ href, children, onClick, className }) => {
//   return (
//     <a
//       className={`custom-link ${className}`}
//       href={href}
//       onClick={onClick}
//       title={children}
//     >
//       {children}
//     </a>
//   );
// };

// export default CustomLink;

import React from "react";

const CustomLink = ({ href, children, onClick, className, target }) => {
  return (
    <a
      className={`custom-link ${className || ""}`}
      href={href}
      onClick={onClick}
      target={target}
    >
      <span className='hidden-text'>{children}</span>
      <span className='original-text'>{children}</span>
      <span className='copy-text'>{children}</span>
    </a>
  );
};

export default CustomLink;
