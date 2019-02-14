import React from "react";

import "./Header.css";

const header = props => {
  return (
    <div className="page-header">
      <header>
        <div className="container">
          <a className="brand-name" href="#">
            LOGO
          </a>
          {/* <nav>
            <ul>
              <li>cart</li>
              <li>connexion</li>
              <li>flag</li>
              <li>language</li>
            </ul>
          </nav> */}
        </div>
      </header>
    </div>
  );
};

export default header;
