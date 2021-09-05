import React from "react";
import PropTypes from "prop-types"; // packages is already included in react
import { BrowserRouter as Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import PeopleIcon from "@material-ui/icons/People";
import BookmarksIcon from "@material-ui/icons/Bookmarks";

import "./style.scss";

function UserProfileCard({ user }) {
  return (
    <div>
      <div className="card-body">
        <div className="card-header">
          <Link to={"/profile"}>
            <div className="user-profile">
              <Avatar className="userAvatar">
                <span id="Image">{user.initials}</span>
              </Avatar>
            </div>
            <span className="UserName" id="UserName">
              {user.username}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

UserProfileCard.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    initials: PropTypes.string.isRequired,
  }),
};

export default UserProfileCard;
