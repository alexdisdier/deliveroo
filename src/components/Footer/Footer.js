import React from "react";
import PropType from "prop-types";

import "./Footer.css";
const footer = props => {
  const { scrollToTop } = props;
  return (
    <footer>
      <a href="#0" onClick={scrollToTop}>
        Haut de la page
      </a>
    </footer>
  );
};

footer.propTypes = {
  scrollToTop: PropType.func.isRequired
};

export default footer;
