import React from "react";
import FeedNavBar from "../../components/header/feed/";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import ErrorIcon from "@material-ui/icons/Error";
import SaveIcon from "@material-ui/icons/Save";
import "react-toastify/dist/ReactToastify.min.css";
import "./style.scss";

import useUserStore from "../../store/user";
import getUserToken from "../../utils/getUserToken";

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
  const notifyError = () => toast.error("Une erreur est survenu !");
  if (window.confirm("Confirmer la suppression de mon compte!")) {
    DeleteProfile();
    localStorage.clear();
    document.location.reload();
  } else {
    notifyError();
  }
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

        <form>
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
              disabled
              variant="outlined"
              margin="normal"
              {...register("firstName")}
            />
            {errors.firstName && (
              <p>
                <ErrorIcon />
                {errors.firstName.message}
              </p>
            )}
          </div>

          <button onClick={DeleteUser} className="removeBtn">
            Supprimer mon compte
          </button>
        </form>
      </div>
    </div>
  );
}
