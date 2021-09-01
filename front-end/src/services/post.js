const getPost = async (id) => {
  try {
    await fetch("http://localhost:3000/api/posts", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "BEARER " + id,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });

    return {
      status: 200,
      data: {
        title: "Post title",
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

const getPosts = async (id) => {
  try {
    await fetch("http://localhost:3000/api/posts", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: "BEARER " + id,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });

    return {
      status: 200,
      data: [
        {
          title: "Post title 1",
          content: "Some post content",
          likes: 340,
          comments: [],
          user: {
            firstName: "John",
            lastName: "Doe",
          },
        },
        {
          title: "Post title 2",
          content: "Some post content",
          likes: 340,
          comments: [],
          user: {
            firstName: "Jane",
            lastName: "Doe",
          },
        },
        {
          title: "Post title 3",
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
