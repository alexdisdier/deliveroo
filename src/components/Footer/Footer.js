import React from "react";
import PropType from "prop-types";

import "./Footer.css";

function Footer(props) {
  const { scrollToTop } = props;

  console.log("render Footer");
  return (
    <footer>
      <a href="#0" onClick={scrollToTop}>
        Haut de la page
      </a>
    </footer>
  );
}

Footer.propTypes = {
  scrollToTop: PropType.func.isRequired
};

export default React.memo(Footer);
