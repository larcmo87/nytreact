import React from "react";

export const SearchFormBtn = props =>
  <button {...props} type="submit" className="btn btn-success submit-btn">
    {props.children}
  </button>;