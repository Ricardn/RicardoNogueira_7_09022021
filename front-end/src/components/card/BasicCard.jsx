import * as React from "react";
import PropTypes from "prop-types"; // packages is already included in react

import "./style.scss";

function BasicCard() {
  return (
    <div className="card-body">
      <div className="card-header">Header</div>

      <div className="card-information">Informations</div>
    </div>
  );
}

export default BasicCard;
