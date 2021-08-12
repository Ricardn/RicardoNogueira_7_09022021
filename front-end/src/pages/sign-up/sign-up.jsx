import { React, useState, useEffect } from "react";
import Nav from "../../components/header/logPage/index";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { styled } from "@material-ui/core/styles";
import Button from "../../components/buttons/btn-validation/index";
import { Link } from "@material-ui/core";
import './style.scss';

async function registerUser(credentials) {
  return fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function SignUp() {
  //Signup
  const [userGenderReg, setuserGenderReg] = useState("");
  const [userlastNameReg, setuserLastnameReg] = useState("");
  const [userfirstNameReg, setUserNameReg] = useState("");
  const [userEmailReg, setUserEmailReg] = useState("");
  const [userPasswordReg, setUserPasswordReg] = useState("");

  const register = () => {
    console.log(userlastNameReg);
  }




  return (
    <div>
      <Nav />
      <div className="main">
        <div className="information-container">
          <h2>Créer votre compte Groupomania,</h2>
          <h3>n'a jamais été aussi simple et rapide.</h3>
          <div className="input-container">
            <form>
              <div className="form-container">
                <FormControl component="fieldset">
                  <FormLabel component="legend">Genre</FormLabel>
                  <RadioGroup
                    row
                    aria-label="gender"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Femme"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Homme"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Autre"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <TextField
                className="surnameInput"
                id="outlined-surname-input"
                label="Nom"
                type="text"
                variant="outlined"
              />

              <TextField
                className="nameInput"
                id="outlined-name-input"
                label="Prénom"
                type="text"
                variant="outlined"
              />

              <TextField
                className="emailInput"
                id="outlined-email-input"
                label="Email"
                type="email"
                variant="outlined"
              />
              <TextField
                className="passInput"
                id="outlined-password-input"
                label="Password"
                type="password"
                variant="outlined"
              />
              <Link onClick={() => console.log("Click")}>
                <Button />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
