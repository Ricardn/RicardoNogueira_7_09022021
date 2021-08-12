import React from "react";
import "./Home.scss";
import Animation from "../../assets/images/animation.PNG";
import character_1 from "../../assets/images/character_1.PNG";
import character_2 from "../../assets/images/character_2.PNG";
import character_3 from "../../assets/images/character_3.PNG";


import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../../components/footer/footer";
import Nav from "../../components/header/main/index"

import TextField from "@material-ui/core/TextField";

export default function Home() {

  //Login



  let history = useHistory();
  return (
    <Router>
      <div>
        <Nav />

        <div className="main">
          <div className="main-container">
            <div className="information-container">
              <h2>Bienvenue dans votre communauté professionnelle</h2>
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
                <a href="#">Mot de passe oublié ?</a>
              </div>

              <div className="sign-in-Container">
                <button
                  onClick={() => {
                    history.push("/signin");
                  }}
                >
                  S'identifier
                </button>
              </div>
            </div>

            <div className="image-container">
              <img src={Animation} alt="test" />
            </div>
          </div>
        </div>
        <div className="banner-container">
          <div className="timeline">
            <span className="dot-1"></span>
            <span className="dot-2"></span>
            <span className="dot-3"></span>
          </div>
          <div className="character-container">
            <img
              src={character_1}
              className="character-1"
              alt="Personnage sur son téléphone"
            />
            <div className="text-container-1">
              <h2 className="text-1">Adressez-vous à tout le monde</h2>
              <p>
                Grâce à Groupomania, il est facile d'échanger au sein de
                l'entreprise. Du siège social aux surfaces de vente.
              </p>
            </div>
          </div>
          <div className="character-container">
            <img
              src={character_2}
              className="character-2"
              alt="Personnage sur son ordinateur"
            />
            <div className="text-container-2">
              <h2 className="text-2">Interagissez avec tout le monde</h2>
              <p>
                On a tous d’excellentes idées pour améliorer notre quotidien.
                Groupomania donne la parole à tout le monde pour que vous
                puissiez démontrer pleinement votre potentiel.
              </p>
            </div>
          </div>
          <div className="character-container">
            <img
              src={character_3}
              className="character-3"
              alt="Deux personnages qui parlent entre eux"
            />
            <div className="text-container-3">
              <h2 className="text-3">
                Travailler en équipe n'a jamais été aussi simple
              </h2>
              <p>
                Avec Groupomania partagez et restez en contact avec vos
                collègues
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
/*<div className="topbarContainer">
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
                <div className="btn-signup">
                  <button
                    onClick={() => {
                      history.push("/signup");
                    }}
                  >
                    S'inscrire
                  </button>
                </div>
                <div className="btn-login">
                  <button
                    onClick={() => {
                      history.push("/signin");
                    }}
                  >
                    S'identifier
                  </button>
                </div>
              </div>
            </div>
          </div>*/