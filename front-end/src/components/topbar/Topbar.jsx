import React from "react";
import "./Topbar.scss";
import {
  Search,
  Chat,
  Notifications
} from "@material-ui/icons";
import userImg from "../../assets/images/user-image.png";
import Searchbar_input from "../searchbar/searchbar.jsx";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <a href="#">
          <div className="topbarLogo">
            <img src="/images/logo-white.png" alt="logo" />
            <h1 className="logoName">Groupomania</h1>
          </div>
        </a>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            onClick={Searchbar_input}
            placeholder="Rechercher"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
          <div className="iconBody">
            <div className="topbarIconItem">
              <Notifications />
              <span className="topbarIconBadge">1</span>
            </div>
          </div>

          <div className="iconBody">
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge ">1</span>
            </div>
          </div>

          <div className="iconBody">
            <div className="userProfile">
              <img src={userImg} alt="user img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
