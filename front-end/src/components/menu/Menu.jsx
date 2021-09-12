import React from "react";
import { toast } from "react-toastify";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import getUserToken from "../../utils/getUserToken";
import CheckAdmin from "../../utils/checkAdmin";
import "./style.scss";

function handleConnection(response) {
  const notifySuccess = () => toast.success("Suprimé avec succès !");
  const notifyError = () =>
    toast.error("Vous n'avez pas les droits necéssaires !");

  if (response.status === 200) {
    notifySuccess();
    setTimeout(function () {
      window.location.href = "/feed";
    }, 3500);
  } else {
    notifyError();
  }
  console.log(response.status);
}

function DeletePost() {
  const token = getUserToken();
  const UserId = JSON.parse(localStorage.getItem("user")).state?.user.id;

  fetch("http://localhost:3000/api/posts/" + UserId, {
    method: "DELETE",
    headers: {
      Authorization: "BEARER " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  }).then((response) => {
    handleConnection(response);
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

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreHorizIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div className="userMenu">
          <MenuItem>
            <button>Partager</button>
          </MenuItem>
        </div>
        <div className="ownPost" id="ownPost">
          <MenuItem>
            <button onClick={DeletePost}>Supprimer</button>
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}
