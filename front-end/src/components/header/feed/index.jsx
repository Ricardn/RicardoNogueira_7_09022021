import React from "react";
import "./style.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@material-ui/core/styles";


import Avatar from "@material-ui/core/Avatar";



import SearchBar from "../../../components/searchbar/searchbar"
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";

export default function navbar() {
    const useStyles = makeStyles((theme) => ({
      root: {
        "& > *": {
          margin: theme.spacing(1),
        },
      },
    }));

  return (
    <Router>
      <nav>
        <div className="topbarContainer">
          <div className="topbarLeft">
            <div className="logo-container">
              <Link to={"/"}>
                <div className="topbarLogo">
                  <img src="/images/logo-white.png" alt="logo" />
                  <h1 className="logoName">Groupomania</h1>
                </div>
              </Link>
            </div>
          </div>

          <div className="topbarCenter">
            <div className="SearchBar-container">
              <SearchBar />
            </div>
          </div>

          <div className="topbarRight">
            <div className="SearchBar-container">
              <div className="notifications className={classes.root}">
                <Badge color="secondary" badgeContent={0}>
                  <NotificationsIcon />
                </Badge>
              </div>
              <div className="user-profile">
                <Avatar>RN</Avatar>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Router>
  );
}
