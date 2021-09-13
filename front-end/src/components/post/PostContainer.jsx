import React from "react";
import PropTypes from "prop-types";

import { useForm, Controller } from "react-hook-form";
import DayJS from "react-dayjs";
import {
  Public,
  Favorite as FavoriteIcon,
  Chat as ChatIcon,
} from "@material-ui/icons";
import { TextField, Avatar, Button, Badge } from "@material-ui/core";
import { toast } from "react-toastify";
import transformUser from "../../utils/transformUser";
import getUserToken from "../../utils/getUserToken";
import DeleteIcon from "@material-ui/icons/Delete";
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

  const { handleSubmit, control } = useForm();

  function notifyCommentPosted(response) {
    const notifySuccess = () =>
      toast.success("Commentaire posté avec succès !");
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

  const handleSubmitComment = async (data) => {
    try {
      const token = getUserToken();
      console.log(data);
      const payload = {
        userId: user.id,
        postId: postData.id,
        content: data.comment,
      };
      console.log(payload);
      console.log("contentcontent", payload);

      const response = await fetch("http://localhost:3000/api/comments", {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      notifyCommentPosted(response);
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

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
                <SimpleMenu />
              </div>
            </div>
          </div>
          <div className="post-container">
            <div className="post-content">
              <p>{postData.content}</p>
              <img src={postData.imageUrl} alt="" />
            </div>
            <div className="post-footer">
              <div className="post-btn">
                <Button variant="contained">
                  <FavoriteIcon /> J'aime
                </Button>
                <Button variant="contained">
                  <ChatIcon /> Commenter
                </Button>
              </div>
              <div className="commentContainer">
                {postData.Comments.map((comment) => (
                  <div className="commentRow">
                    <div className="userComment">
                      <span>
                        {comment.User.firstName + " " + comment.User.lastName}
                      </span>
                    </div>
                    <div className="commentContent">
                      <span>{comment.content}</span>
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSubmit(handleSubmitComment)}>
                <Controller
                  name="comment"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="post-comment-input"
                      name="comment"
                      label="Commentaire"
                      multiline
                      required
                      rows={4}
                      placeholder="Veuillez entrer votre commentaire"
                      variant="outlined"
                    />
                  )}
                />

                <Button type="submit" variant="contained">
                  Envoyer
                </Button>
              </form>
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
    Comments: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    User: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PostContainer;
