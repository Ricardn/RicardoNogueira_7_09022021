import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

import PostList from "../../components/post/PostList";
import FeedNavBar from "../../components/header/feed/";
import { UserCard } from "../../components/card";
import { CustomizedDialogs } from "../../components/dialog";

import "./feed.scss";

import useUserStore from "../../store/user";
import usePostStore from "../../store/post";
import transformUser from "../../utils/transformUser";

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
  // https://github.com/pmndrs/zustand#then-bind-your-components-and-thats-it
  const user = useUserStore((state) => state.user);

  const userData = transformUser(user);

  const postsList = usePostStore((state) => state.postsList);
  const fetchPosts = usePostStore((state) => state.fetchPosts);

  // use effect with empty dependency array
  // will trigger only once at component mount
  useEffect(() => {
    if (fetchPosts) {
      fetchPosts();
    }
  }, [fetchPosts]);

  const classes = useStyles();

  return (
    <div>
      <FeedNavBar />
      <div className="feed-container">
        <div className="container-left">
          <div className="card-container">
            <UserCard user={userData} />
          </div>
        </div>
        <div className="container-middle">
          <div className="feed-container">
            <div className="input-container">
              <div className="input">
                <div className="user-container">
                  <Avatar className="userAvatar">
                    <span id="Image">{userData.initials}</span>
                  </Avatar>
                </div>
                <CustomizedDialogs className="dialog" user={userData} />
              </div>
            </div>
            <PostList posts={postsList ? postsList : []} />
          </div>
        </div>
        <div className="container-right"></div>
      </div>
    </div>
  );
}
