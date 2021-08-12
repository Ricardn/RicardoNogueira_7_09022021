import React from "react";
import "./sign-in.scss";

import TextField from "@material-ui/core/TextField";
import Nav from "../../components/header/logPage/index";
import SignInbtn from "../../components/buttons/btn-signin/index"

export default function SignIn() {
  return (
    <div>
      <Nav />
      <div className="main">
        <div className="information-container">
          <h2>Nous sommes ravis de vous revoir,</h2>
          <h3>
            identifiez-vous afin de retrouver votre communauté professionnelle.
          </h3>
          <div className="input-container">
            <TextField
              className="emailInput"
              id="outlined-password-input"
              label="Email"
              type="email"
              variant="outlined"
            />
            <TextField
              className="passwordInput"
              id="outlined-password-input"
              label="Password"
              type="password"
              variant="outlined"
            />
          </div>
          <div className="sign-in-Container">
            <SignInbtn className="signBtn"/>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
