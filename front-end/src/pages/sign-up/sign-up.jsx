import { React } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import TextField from "@material-ui/core/TextField";
import ErrorIcon from "@material-ui/icons/Error";
import Nav from "../../components/header/logPage/index";
import "./style.scss";
import "react-toastify/dist/ReactToastify.min.css";

function getResponse(response) {
  const notifySuccess = () => toast.success("Compte correctement enregistré !");
  const notifyError = () =>
    toast.error("Votre compte n'a pas pu être enregistré !");

  if (response.status === 201) {
    notifySuccess();
    setTimeout(function () {
      window.location.href = "/";
    }, 3500);
  } else {
    notifyError();
  }
  console.log(response.status);
}

export default function SignUp() {
  //Signup

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <Nav />
      <div className="main">
        <div className="Title-container">
          <h2>Créez votre compte Groupomania</h2>
        </div>
        <div className="Input-container">
          <form
            onSubmit={handleSubmit((data) => {
              fetch("http://localhost:3000/api/auth/signup", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              }).then((response) => {
                getResponse(response);
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
            <div className="input">
              <TextField
                className="lastName"
                id="lastName"
                label="Nom*"
                type="text"
                variant="outlined"
                margin="normal"
                inputProps={{
                  autoCapitalize: "sentences",
                }}
                {...register("lastName", {
                  required: "Ce champ est obligatoire",
                })}
              />
              {errors.lastName && (
                <p>
                  <ErrorIcon />
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <div className="input">
              <TextField
                className="firstName"
                id="firstName"
                label="Prénom*"
                type="text"
                variant="outlined"
                margin="normal"
                inputProps={{
                  autoCapitalize: "sentences",
                }}
                {...register("firstName", {
                  required: "Ce champ est obligatoire",
                })}
              />
              {errors.firstName && (
                <p>
                  <ErrorIcon />
                  {errors.firstName.message}
                </p>
              )}
            </div>
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
      </div>
    </div>
  );
}
