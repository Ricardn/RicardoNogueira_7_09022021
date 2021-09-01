import * as React from "react";
import PropTypes from "prop-types"; // packages is already included in react
import { BrowserRouter as Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

import "./style.scss";

function UserCard({ user }) {
  return (
    <div>
      <div className="card-body">
        <div className="card-header">
          <Link>
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

        <div className="card-information">
          <div className="relations">
            <span>Vos relations</span>
          </div>
          <div className="elements">
            <span>Elements sauvegardées</span>
          </div>
        </div>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    initials: PropTypes.string.isRequired,
  }),
};

export default UserCard;
