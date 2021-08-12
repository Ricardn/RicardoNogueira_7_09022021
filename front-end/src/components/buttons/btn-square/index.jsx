import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './style.scss'

export default function OnClick() {
  const history = useHistory();


  function handleClick() {
    history.push("/signup");
  }

  return (
    <Router>
      <button className="btnSignup" type="button" onClick={handleClick}>
        S'inscrire
      </button>
    </Router>
  );
}
