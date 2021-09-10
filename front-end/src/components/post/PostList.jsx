import React from "react";
import PropTypes from "prop-types";
import PostContainer from "./PostContainer";
import "./style.scss";

import useUserStore from "../../store/user";
import transformUser from "../../utils/transformUser";

const PostsList = ({ posts }) => {
  console.log("PostList", posts);
  return (
    <div>
      {posts.map((post) => (
        <PostContainer key={post.id} postData={post} />
      ))}
    </div>
  );
};

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      imageUrl: PropTypes.string.isRequired,
      commentaires: PropTypes.arrayOf(PropTypes.shape()).isRequired,
      user: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default PostsList;
