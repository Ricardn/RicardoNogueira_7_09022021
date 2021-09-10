import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import getUserToken from "../../utils/getUserToken";

function DeletePost(params) {
  const token = getUserToken();
  const UserId = JSON.parse(localStorage.getItem("user")).state?.user.id;

  fetch("http://localhost:3000/api/posts/" + UserId, {
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
        <MenuItem >Partager</MenuItem>
        <MenuItem onClick={handleClose}>Suprimer</MenuItem>
      </Menu>
    </div>
  );
}
