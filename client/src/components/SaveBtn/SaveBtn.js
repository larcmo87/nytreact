import React from "react";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SaveBtn = props => (
  <button {...props} className="btn btn-success save-article-btn btn-sm" type="button" >    
    Save Article
  </button>
);

export default SaveBtn;