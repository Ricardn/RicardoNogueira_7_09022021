const transformUser = (user) => ({
  ...user,
  username: user.firstName + " " + user.lastName,
  initials: (user.firstName.charAt(0) + user.lastName.charAt(0)).toUpperCase(),
});

console.log(transformUser)

export default transformUser;
