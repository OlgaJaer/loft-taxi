import React from "react";
import { AuthContext } from "../Auth/AuthContext";

export const Profile = () => {
  const { isLoggedIn } = React.useContext(AuthContext);
  if (!isLoggedIn) {
    return <h1>Залогиньтесь</h1>;
  }
  return <h1>Профиль</h1>;
};
