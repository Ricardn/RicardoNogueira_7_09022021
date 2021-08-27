import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Gif } from "@material-ui/icons";

import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import Avatar from "@material-ui/core/Avatar";
import SimpleDialogDemo from "../../components/dialog/dialog";
import Button from "@material-ui/core/Button";

import PostContainer from "../../components/post";

import NavBar from "../../components/header/feed/";
import Footer from "../../components/footer/footer";
import { GetUser } from "../../components/functions";

import "./feed.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

export default function Feed() {
  GetUser();
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <div className="feed-container">
        <div className="container-left"></div>
        <div className="container-middle">
          <div className="feed-container">
            <div className="input-container">
              <div className="input">
                <div className="user-container">
                  <Avatar className="userAvatar">
                    <span id="Image">
                      {localStorage.getItem("UserInitials")}
                    </span>
                  </Avatar>
                </div>
                <SimpleDialogDemo className="dialog" />
              </div>

              <div className="button-container">
                <div className="btn">
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <Button variant="contained" size="medium" component="span">
                      <PhotoLibraryIcon />
                      Photo
                    </Button>
                  </label>
                </div>
                <div className="btn">
                  <input
                    accept="video/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <Button variant="contained" size="medium" component="span">
                      <VideoLibraryIcon />
                      Vidéo
                    </Button>
                  </label>
                </div>
                <div className="btn">
                  <input
                    accept=".pdf"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <Button variant="contained" size="medium" component="span">
                      <PictureAsPdfIcon />
                      Pdf
                    </Button>
                  </label>
                </div>
                <div className="btn">
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <label htmlFor="contained-button-file">
                    <Button variant="contained" size="medium" component="span">
                      <Gif />
                      Gif
                    </Button>
                  </label>
                </div>
              </div>
            </div>
            <PostContainer />
          </div>
        </div>
        <div className="container-right"></div>
      </div>
      <Footer />
    </div>
  );
}
