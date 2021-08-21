import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

import TextField from "@material-ui/core/TextField";
import ErrorIcon from "@material-ui/icons/Error";

import Footer from "../../components/footer/footer";
import Nav from "../../components/header/main/index";
import Animation from "../../assets/images/animation.PNG";
import character_1 from "../../assets/images/character_1.PNG";
import character_2 from "../../assets/images/character_2.PNG";
import character_3 from "../../assets/images/character_3.PNG";
import "react-toastify/dist/ReactToastify.min.css";
import "./style.scss";

function getResponse(response) {
  const notifySuccess = () => toast.success("Connexion en cours !");
  const notifyError = () => toast.error("Une erreur est survenu !");
  const notifyErrorPassword = () => toast.error("Mot de passe incorrecte !");

  if (response.status === 200) {
    notifySuccess();
    setTimeout(function () {
      window.location.href = "/feed";
    }, 3500);
  } else {
    if (response.status === 401) {
      notifyErrorPassword();
    } else {
      notifyError();
    }
  }
  console.log(response.status);
}

export default function Home() {
  //Login
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let history = useHistory();
  return (
    <div>
      <Nav />
      <div className="main">
        <div className="main-container">
          <div className="information-container">
            <h2>Bienvenue dans votre communauté professionnelle</h2>
            <div className="input-container">
              <form
                onSubmit={handleSubmit((data) => {
                  fetch("http://localhost:3000/api/auth/signin", {
                    method: "POST",
                    headers: {
                      Authorization: localStorage.getItem("jwtToken"),
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                  }).then((response) => {
                    getResponse(response);
                    return response
                      .json()
                      .then((data) => {
                        localStorage.setItem("token", data.token);
                        console.log(data.token);
                        return data;
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  });
                })}
              >
                <div className="input">
                  <TextField
                    className="email"
                    id="email"
                    label="Email*"
                    type="email"
                    variant="outlined"
                    margin="normal"
                    {...register("email", {
                      required: "Ce champ est obligatoire",
                    })}
                  />
                  {errors.email && (
                    <p>
                      <ErrorIcon />
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="input">
                  <TextField
                    className="password"
                    id="password"
                    label="Mot de Passe*"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    {...register("password", {
                      required: "Ce champ est obligatoire",
                      minLength: {
                        value: 8,
                        message:
                          "Le mot de passe doit contenir au moins 8 caractères",
                      },
                    })}
                  />
                  {errors.password && (
                    <p>
                      <ErrorIcon />
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <button type="submit">Valider</button>
              </form>
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
      </div>
      <Footer />
    </div>
  );
}
