import React from "react";
import FeedNavBar from "../../components/header/feed/";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import ErrorIcon from "@material-ui/icons/Error";
import SaveIcon from "@material-ui/icons/Save";
import "react-toastify/dist/ReactToastify.min.css";
import "./style.scss";

import useUserStore from "../../store/user";
import getUserToken from "../../utils/getUserToken";

function UpdateProfile(params) {
  const token = getUserToken();
  const UserId = JSON.parse(localStorage.getItem("user")).state?.user.id;

  fetch("http://localhost:3000/api/users/myprofile/" + UserId, {
    method: "PUT",
    headers: {
      Authorization: "BEARER " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  }).then((response) => {
    return response
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

function DeleteProfile(params) {
  const token = getUserToken();
  const UserId = JSON.parse(localStorage.getItem("user")).state?.user.id;

  fetch("http://localhost:3000/api/users/myprofile/" + UserId, {
    method: "DELETE",
    headers: {
      Authorization: "BEARER " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
  }).then((response) => {
    return response
      .json()
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

function DeleteUser() {
  const notifySuccess = () => toast.success("Votre compte a été supprimé !");
  const notifyError = () => toast.error("Une erreur est survenu !");
  if (window.confirm("Confirmer la suppression de mon compte!")) {
    notifySuccess();
    setTimeout(function () {
      DeleteProfile();
      window.location.href = "/";
    }, 3500);
  } else {
    notifyError();
  }
}

function showDiv(event) {
  document.getElementById("PasswordContainer").className = "visiblediv";
  event.preventDefault();
}

export default function Profile() {
  const user = useUserStore((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <FeedNavBar />
      <div className="profile-container">
        <h1>Vos Informations</h1>

        <form
          onSubmit={handleSubmit((data) => {
            fetch("http://localhost:3000/users/myprofile/:id", {
              method: "PUT",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }).then((response) => {
              console.log(response);
              return response
                .json()
                .then((data) => {
                  console.log(data);
                  return data;
                })
                .catch((err) => {
                  console.log(err);
                });
            });
          })}
        >
          <div className="ProfileInput">
            <div className="LabelInput">
              <InputLabel>Nom</InputLabel>
            </div>
            <TextField
              className="firstName"
              id="firstName"
              defaultValue={user.lastName}
              type="text"
              variant="outlined"
              margin="normal"
              disabled
              {...register("firstName")}
            />
            {errors.firstName && (
              <p>
                <ErrorIcon />
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="ProfileInput">
            <div className="LabelInput">
              <InputLabel>Prénom</InputLabel>
            </div>
            <TextField
              className="firstName"
              onChange="console"
              id="firstName"
              defaultValue={user.firstName}
              type="text"
              variant="outlined"
              margin="normal"
              disabled
              {...register("firstName")}
            />
            {errors.firstName && (
              <p>
                <ErrorIcon />
                {errors.firstName.message}
              </p>
            )}
          </div>
          <button onClick={showDiv} className="ResetPassword">
            Modifier mon mot de passe
          </button>
          <div id="PasswordContainer" className="PasswordContainer">
            <div className="input">
              <TextField
                className="password"
                id="password"
                label="Mot de Passe actuel*"
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
            <div className="input">
              <TextField
                className="password"
                id="password"
                label="Nouveau Mot de Passe*"
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
            <div className="input">
              <TextField
                className="password"
                id="password"
                label="Confirmer Mot de Passe*"
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
          </div>
          <button className="SaveBtn" type="submit" onClick={UpdateProfile}>
            <span>
              <SaveIcon />
            </span>
            Sauvegarder
          </button>

          <button onClick={DeleteUser} className="removeBtn">
            Supprimer mon compte
          </button>
        </form>
      </div>
    </div>
  );
}
