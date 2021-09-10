import getUserToken from "../utils/getUserToken";

const standardize = async (response) => {
  if (response.status !== 200) {
    return {
      status: response.status,
      data: null,
    };
  }

  return {
    status: 200,
    data: await response.json(),
  };
};

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

const getPosts = async (params) => {
  try {
    const token = getUserToken();
    const response = await fetch("http://localhost:3000/api/posts", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    return await standardize(response);
  } catch (err) {
    throw err;
  }
};

export default {
  getPost,
  getPosts,
};
