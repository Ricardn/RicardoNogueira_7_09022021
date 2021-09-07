import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

import BtnSignup from "../../buttons/btn-square/index";
import BtnSignin from "../../buttons/btn-signin/index";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="topbarcontainer">
          <div className="topbarLeft">
            <div className="logo-container">
              <Link to="/">
                <div className="topbarlogo">
                  <img src="/images/logo-white.png" alt="logo" />
                  <h1 className="logoName">Groupomania</h1>
                </div>
              </Link>
            </div>
            <div className="buttonContainer">
              <Link to="/signup">
                <BtnSignup />
              </Link>
              <Link to="/signin">
                <BtnSignin />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
