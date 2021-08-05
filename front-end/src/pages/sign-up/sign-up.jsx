import React from "react";
import "./sign-up.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function SignUp() {
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
            <div>
              <input type="text" placeholder="Nom" />
              <input type="text" placeholder="Prénom" />
              <button>Continuer</button>
            </div>

            <div>
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Mot de Passe" />
              <button>Continuer</button>
            </div>

            <div>
              <h2></h2>
              <input type="file"></input>
              <a href="#">Choisir une photo de profil plus tard</a>
              <button>Continuer</button>
            </div>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
