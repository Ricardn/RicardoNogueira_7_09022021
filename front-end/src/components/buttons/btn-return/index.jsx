import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import "./style.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function OnClick() {
  return (
    <Router>
      <button className="btnReturn" type="button">
        <ArrowBackIcon /> <p>Retour en arrière</p>
      </button>
    </Router>
  );
}
