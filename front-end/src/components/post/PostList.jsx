import React from "react";
import PropTypes from "prop-types";
import PostContainer from "./PostContainer";
import "./style.scss";

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
      Comments: PropTypes.arrayOf(PropTypes.shape()).isRequired,
      User: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
      }).isRequired,
    })
  ).isRequired,
};

export default PostsList;
