import React from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Badge from "@material-ui/core/Badge";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsIcon from "@material-ui/icons/Notifications";

import "react-toastify/dist/ReactToastify.min.css";
import "./style.scss";

function FeedNavBar() {
  const notifyError = () =>
    toast.error("Vous êtes sur le point de vous déconnecter !");

  function logOut() {
    notifyError();
    localStorage.clear();
    setTimeout(function () {
      window.location.href = "/";
    }, 3500);
  }

  return (
    <div>
      <nav>
        <div className="topbarcontainer">
          <div className="topbarLeft">
            <div className="logo-container">
              <Link to="/feed">
                <div className="topbarlogo">
                  <img src="/images/logo-white.png" alt="logo" />
                  <h1 className="logoName">Groupomania</h1>
                </div>
              </Link>
            </div>
            <div className="topbarRight">
              <div className="notifications className={classes.root}">
                <Button>
                  <Badge color="secondary" badgeContent={0}>
                    <NotificationsIcon />
                  </Badge>
                </Button>
                <Button>
                  <SettingsIcon />
                  <ExpandMoreIcon />
                </Button>
              </div>
              <div className="user-profile"></div>
              <Button onClick={logOut}> Se déconnecter </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default FeedNavBar;
