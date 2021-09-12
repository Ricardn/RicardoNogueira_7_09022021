const CheckAdmin = () => {
  const isAdmin = JSON.parse(localStorage.getItem("user")).state?.user?.isAdmin;

  if (isAdmin === false) {
    return false;
  } else {
    return true;
  }
};

export default CheckAdmin;
