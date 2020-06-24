import React from "react";

export const CustomDropdownMenu = props => {
  return (
    <div
      className={`custom-dropdown-menu shadow-sm ${props.show ? "show" : ""}`}
    >
      {props.children}
    </div>
  );
};
