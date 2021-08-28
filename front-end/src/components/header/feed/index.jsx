import React from "react";
import "./style.scss";

import { toast } from "react-toastify";
import { BrowserRouter as Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "react-toastify/dist/ReactToastify.min.css";



export default function navbar() {
const notifyError = () =>
  toast.error("Vous êtes sur le point de vous déconnécter !");

  function logOut() {
    notifyError();
    localStorage.clear();
    setTimeout(function () {
      window.location.href = "/";
    }, 3500);
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));

  return (
    <nav>
      <div className="topbarContainer">
        <div className="topbarLeft">
          <div className="logo-container">
            <Link to={"/feed"}>
              <div className="topbarLogo">
                <img src="/images/logo-white.png" alt="logo" />
                <h1 className="logoName">Groupomania</h1>
              </div>
            </Link>
          </div>
        </div>

        <div className="topbarRight">
          <div className="notifications className={classes.root}">
            <Button>
              <Badge color="secondary" badgeContent={0}>
                <NotificationsIcon />
              </Badge>
            </Button>
          </div>
          <div className="user-profile">
            <Button>
              <Avatar>
                <span id="Image">{localStorage.getItem("UserInitials")}</span>
              </Avatar>
              <ExpandMoreIcon />
            </Button>
          </div>

          <Button onClick={logOut}> Se déconnecter </Button>
        </div>
      </div>
    </nav>
  );
}
