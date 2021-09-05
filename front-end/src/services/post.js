import getUserToken from "../utils/getUserToken";

const getPost = async (id) => {
  try {
    await fetch("http://localhost:3000/api/posts", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + id,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });

    return {
      status: 200,
      data: {
        content: "Post content",
        likes: 340,
        comments: [],
        user: {
          firstName: "John",
          lastName: "Doe",
        },
      },
    };
  } catch (err) {
    throw err;
  }
};

const getPosts = async (token) => {
  try {
    const token = getUserToken();

    await fetch("http://localhost:3000/api/posts", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });

    return {
      status: 200,
      data: [
        {
          content: "Some post content",
          likes: 340,
          comments: [],
          user: {
            firstName: "John",
            lastName: "Doe",
          },
        },
        {
          content: "Some post content",
          likes: 340,
          comments: [],
          user: {
            firstName: "Jane",
            lastName: "Doe",
          },
        },
        {
          content: "Some post content",
          likes: 340,
          comments: [],
          user: {
            firstName: "Jimmy",
            lastName: "Doe",
          },
        },
      ],
    };
  } catch (err) {
    throw err;
  }
};

export default {
  getPost,
  getPosts,
};
