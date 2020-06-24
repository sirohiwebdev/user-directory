import React from "react";
import { NavItem } from "react-bootstrap";

export const CustomNavItem = props => {
  return (
    <div className={`${props.active ? "nav-active" : ""}`}>
      <NavItem {...props}>{props.children}</NavItem>
    </div>
  );
};
