import * as React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import "./style.scss";

export default function BasicCard() {
  return (
    <div>
      <div className="card-body">
        <div className="card-header">
          <Link>
            <div className="user-profile">
              <Avatar className="userAvatar">
                <span id="Image">{localStorage.getItem("UserInitials")}</span>
              </Avatar>
            </div>
            <span className="UserName" id="UserName">
              {localStorage.getItem("UserName")}
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
