import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

import { Public } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";
import transformUser from "../../utils/transformUser";

import "./style.scss";

const PostContainer = ({ postData }) => {
  const user = transformUser(postData.user);

  return (
    <div>
      <div className="post">
        <div className="user-container">
          <div className="user-profile">
            <Avatar className="userAvatar">
              <span id="Image">{user.initials}</span>
            </Avatar>
          </div>
          <div className="user-name">
            <span className="UserName" id="UserName">
              {user.username}
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
};

PostContainer.propTypes = {
  postData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    commentaires: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    user: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PostContainer;
