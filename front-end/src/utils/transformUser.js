const transformUser = (user) => ({
  ...user,
  username: user.firstName + " " + user.lastName,
  initials: (user.firstName.charAt(0) + user.lastName.charAt(0)).toUpperCase(),
});

export default transformUser;
