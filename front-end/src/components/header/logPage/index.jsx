import React from "react";
import "./style.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Button from "../../../components/buttons/btn-return"

export default function navbar() {
  return (
      <nav>
        <div className="topbarContainer">
          <div className="topbarLeft">
            <div className="logo-container">
              <Link to={"/"}>
                <div className="topbarLogo">
                  <img src="/images/logo-white.png" alt="logo" />
                  <h1 className="logoName">Groupomania</h1>
                </div>
              </Link>
            </div>
          </div>
          <div className="return">
            <Link to={"/"}>
              <Button/>
            </Link>
          </div>
        </div>
      </nav>
  );
}
