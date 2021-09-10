import React from "react";
import PropTypes from "prop-types";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import { Public } from "@material-ui/icons";
import Avatar from "@material-ui/core/Avatar";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ChatIcon from "@material-ui/icons/Chat";
import ShareIcon from "@material-ui/icons/Share";
import transformUser from "../../utils/transformUser";
import DayJS from "react-dayjs";

import SimpleMenu from "../menu/Menu";
import useUserStore from "../../store/user";
import "./style.scss";

const PostContainer = ({ postData }) => {
  const user = useUserStore((state) => state.user);
  const userData = transformUser(postData.User);

  const Postdate = postData.date;
  const userSurnamePosted = postData.User.lastName;
  const userFirstnamePosted = postData.User.firstName;
  const UserPosted = userFirstnamePosted + " " + userSurnamePosted;
  return (
    <div>
      <div className="container-middle">
        <div className="post">
          <div className="user-container">
            <div className="user-profile">
              <Avatar className="userAvatar">
                <span id="Image">{userData.initials}</span>
              </Avatar>
            </div>
            <div className="user-name">
              <span className="UserName">{UserPosted}</span>
              <div className="post-header">
                <span className="PostTime">
                  Le <DayJS format="MM-DD-YYYY à HH:mm">{Postdate}</DayJS>
                  <Public />
                </span>
               <SimpleMenu/>
              </div>
            </div>
          </div>
          <div className="post-container">
            <div className="post-content">
              <p>{postData.content}</p>
              <img src={postData.imageUrl} alt="" />
            </div>
            <div className="post-footer">
              <div className="post-status">
                <span>
                  <Badge badgeContent={1}></Badge>
                  <span>Likes</span>
                </span>
                <span>
                  <Badge badgeContent={0}></Badge>
                  <span>Commentaires</span>
                </span>
              </div>
              <div className="post-btn">
                <Button variant="contained">
                  <FavoriteIcon /> J'aime
                </Button>
                <Button variant="contained">
                  <ChatIcon /> Commenter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

PostContainer.propTypes = {
  postData: PropTypes.shape({
    content: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    commentaires: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    user: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PostContainer;
