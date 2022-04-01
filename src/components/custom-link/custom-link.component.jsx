import React from "react";
import "./custom-link.styles.scss";

function CustomLink({ className, to, children }) {
  return (
    <a className={`link ${className}`} href={to}>
      {children}
    </a>
  );
}

export default CustomLink;
