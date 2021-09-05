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

const signIn = async (params) => {
  try {
    const response = await fetch("http://localhost:3000/api/auth/signin", {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("jwtToken"),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    return await standardize(response);
  } catch (err) {
    throw err;
  }
};

const signUp = async (params) => {
  try {
    const response = await fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    return await standardize(response);
  } catch (err) {
    throw err;
  }
};

const UpdateProfile = async (params) => {
  try {
    const token = getUserToken();

    await fetch("http://localhost:3000/users/myprofile/", {
      method: "PUT",
      headers: {
        Authorization: "BEARER " + token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });

    return await standardize();
  } catch (err) {
    throw err;
  }
};

export default {
  signIn,
  signUp,
  UpdateProfile,
};
