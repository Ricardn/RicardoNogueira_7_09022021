import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

import BtnSignup from "../../buttons/btn-square/index";
import BtnSignin from "../../buttons/btn-signin/index";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="topbarContainer">
          <div className="topbarLeft">
            <div className="logo-container">
              <Link to="/">
                <div className="topbarLogo">
                  <img src="/images/logo-white.png" alt="logo" />
                  <h1 className="logoName">Groupomania</h1>
                </div>
              </Link>
            </div>
          </div>
          <div>
            <Link to="/signup">
              <BtnSignup />
            </Link>
          </div>
          <div>
            <Link to="/signin">
              <BtnSignin />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
