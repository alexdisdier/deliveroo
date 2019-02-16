import React from "react";

import "./Footer.css";
const footer = props => {
  return (
    <footer>
      <a href="#0" onClick={props.scrollToTop}>
        To the top!
      </a>
    </footer>
  );
};

export default footer;
