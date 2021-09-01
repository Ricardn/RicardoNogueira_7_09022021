import React from "react";
import { Redirect } from "react-router";
import useUserStore from "./store/user";

const ProtectedRoute = ({ component }) => {
  const user = useUserStore((state) => state.user);
  const Component = component;
  const isAuthenticated = user.token !== null;

  return isAuthenticated ? <Component /> : <Redirect to={{ pathname: "/" }} />;
};

export default ProtectedRoute;
