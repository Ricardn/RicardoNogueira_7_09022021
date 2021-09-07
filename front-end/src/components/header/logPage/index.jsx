import React from "react";
import "./style.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Button from "../../../components/buttons/btn-return";

export default function navbar() {
  return (
    <div>
      <nav>
        <div className="topbarcontainerLog">
          <div className="topbarLeftLog">
            <div className="logo-containerLog">
              <Link to="/">
                <div className="topbarlogoLog">
                  <img src="/images/logo-white.png" alt="logo" />
                  <h1 className="logoName">Groupomania</h1>
                </div>
              </Link>
            </div>
            <div className="returnLog">
              <Link to={"/"}>
                <Button />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
