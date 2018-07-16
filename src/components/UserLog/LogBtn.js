import React from "react";

export const LogBtn = props =>
  <button {...props} style={{ float: "left" }} className="btn btn-success">
    {props.children}
  </button>;
