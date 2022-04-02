import React from "react";
// import "./custom-link.styles.scss";
import { CustomLinks } from "./custom-link.styles";

function CustomLink({ to, children, ...otherProps }) {
  return (
    <CustomLinks href={to} {...otherProps}>
      {children}
    </CustomLinks>
  );
}

export default CustomLink;
