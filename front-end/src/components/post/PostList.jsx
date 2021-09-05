import React from "react";
import PropTypes from "prop-types";
import PostContainer from "./PostContainer";
import "./style.scss";

const PostsList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostContainer postData={post} />
      ))}
    </div>
  );
};

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      commentaires: PropTypes.arrayOf(PropTypes.shape()).isRequired,
      user: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default PostsList;
