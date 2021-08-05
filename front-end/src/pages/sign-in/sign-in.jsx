import React from "react";
import "./sign-in.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function SignIn() {
  return (
    <div>
      <nav>
        <div className="topbarContainer">
          <div className="topbarLeft">
            <div className="logo-container">
              <a href="#">
                <div className="topbarLogo">
                  <img src="/images/logo-white.png" alt="logo" />
                  <h1 className="logoName">Groupomania</h1>
                </div>
              </a>
            </div>
          </div>
          <div className="topbarRight">
            <div className="btn-container">
              <div className="btn-return">
                <a className="return" href="#">
                  <ArrowBackIcon className="returnIcon" />
                  Retour en arrière
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="main">
        <div className="information-container">
          <h2>Nous sommes ravis de vous revoir,</h2>
          <h3>
            identifiez-vous afin de retrouver votre communauté professionnelle.
          </h3>
          <div className="sign-in-Container">
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Mot de Passe" />
            <a href="#">Mot de passe oublié ?</a>
            <button>S'identifier</button>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
