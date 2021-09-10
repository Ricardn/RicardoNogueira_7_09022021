const checkAdmin = () => {
  const isAdmin = JSON.parse(localStorage.getItem("user")).state?.user?.isAdmin;
  console.log(isAdmin);

  if (isAdmin === false) {
    return false;
  } else {
    return true;
  }
};

export default checkAdmin;
