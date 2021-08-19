import { React } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import TextField from "@material-ui/core/TextField";
import ErrorIcon from "@material-ui/icons/Error";

import "./style.scss";
import Nav from "../../components/header/logPage/index";

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

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <Nav />
      <div className="main">
        <div className="title-container">
          <h2>Nous sommes ravis de vous revoir</h2>
        </div>
        <div className="input-container">
          <form
            onSubmit={handleSubmit((data) => {
              fetch("http://localhost:3000/api/auth/signin", {
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
