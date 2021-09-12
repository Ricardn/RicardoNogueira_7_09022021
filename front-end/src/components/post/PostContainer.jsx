import React, { useState } from "react";
import PropTypes from "prop-types";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Gif } from "@material-ui/icons";
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
import getUserToken from "../../utils/getUserToken";

function handleConnection(response) {
  const notifySuccess = () => toast.success("Postée avec succès !");
  const notifyError = () => toast.error("Une erreur est survenu !");

  if (response.status === 201) {
    notifySuccess();
    setTimeout(function () {
      window.location.href = "/feed";
    }, 3500);
  } else {
    notifyError();
  }
  console.log(response.status);
}
/*
function getPostId(e) {
  const PostId = e.currentTarget.id;
  console.log("postID", PostId);
}*/

function addComment({ postData }) {
  const token = getUserToken();

  fetch("http://localhost:3000/api/comments/", {
    method: "POST",
    headers: {
      Authorization: "BEARER " + token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  }).then((response) => {
    //handleConnection(response);
    console.log("response", response);
    return response
      .json()
      .then((data) => {
        console.log("data", data);
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  });
}

function PostContainer({ postData }) {
  const SelectedPostId = localStorage.setItem("PostId", postData.id);

  console.log("SelectedPostId", SelectedPostId);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Text = () => (
    <div className="Comment-Container" id="Comment-Container">
      <div className="Comment-body">
        <div className="inputComment">
          <TextField
            className="commentInput"
            placeholder="Votre commentaire"
            type="text"
            rows={1}
            multiline
            required
            {...register("content", {
              required: "Ce champ est obligatoire",
            })}
          />
        </div>
        <Button variant="contained" size="medium" component="span">
          <Gif />
          Gif
        </Button>
        <Button id={postData.id} variant="contained" type="submit">
          Envoyer
        </Button>
      </div>
    </div>
  );

  const [visible, setVisible] = React.useState(false);

  const user = useUserStore((state) => state.user);
  const userData = transformUser(postData.User);

  const Postdate = postData.date;
  const userSurnamePosted = postData.User.lastName;
  const userFirstnamePosted = postData.User.firstName;
  const UserPosted = userFirstnamePosted + " " + userSurnamePosted;
  return (
    <div>
      <div className="container-middle">
        <div className="post" id={postData.id}>
          <div className="user-container" id={postData.id}>
            <div className="user-profile" id={postData.id}>
              <Avatar className="userAvatar">
                <span id="Image">{userData.initials}</span>
              </Avatar>
            </div>
            <div className="user-name" id={postData.id}>
              <span className="UserName">{UserPosted}</span>
              <div className="post-header" id={postData.id}>
                <span className="PostTime">
                  Le <DayJS format="MM-DD-YYYY à HH:mm">{Postdate}</DayJS>
                  <Public />
                </span>
                <SimpleMenu />
              </div>
            </div>
          </div>
          <div className="post-container" id={postData.id}>
            <div className="post-content">
              <p>{postData.content}</p>
              <img src={postData.imageUrl} alt="" />
            </div>
            <div className="post-footer" id={postData.id}>
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
                <Button variant="contained">J'aime</Button>
                <Button
                  variant="contained"
                  id={postData.id}
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? "Commentaires" : "Commentaires"}
                </Button>
              </div>
              <div id="Comment-Container" className="Comment-Container">
                {visible ? <Text post={postData} /> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PostContainer.propTypes = {
  postData: PropTypes.shape({
    content: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    Comments: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    User: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PostContainer;
