import React from "react";

import Button from "@material-ui/core/Button";

import { Public } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";
import "./style.scss";

export default function PostContainer() {

  return (
    <div>
      <div className="post">
        <div className="user-container">
          <div className="user-profile">
            <Avatar className="userAvatar">
              <span id="Image">{localStorage.getItem("UserInitials")}</span>
            </Avatar>
          </div>
          <div className="user-name">
            <span className="UserName" id="UserName">
              {localStorage.getItem("UserName")}
            </span>
            <div className="post-header">
              <span id="PostTime">
                Il y a 58min <Public />
              </span>
            </div>
          </div>
          <div className="post-settings">
            <Button variant="contained">
              <MoreHorizIcon />
            </Button>
          </div>
        </div>
        <div className="post-container">
          <div className="post-content" id="Post-Content"></div>
          <div className="post-status">
            <span>
              <FavoriteIcon /> Likes
            </span>
            <span>
              <ChatIcon /> Commentaires
            </span>
          </div>
          <div className="post-footer">
            <Button variant="contained">
              <FavoriteIcon /> J'aime
            </Button>
            <Button variant="contained">
              <ChatIcon /> Commenter
            </Button>
            <Button variant="contained">
              <ShareIcon /> Partager
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
