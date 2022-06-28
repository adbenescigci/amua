import React from "react";

export let AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  let [user, setUser] = React.useState("user");

  let signin = (newUser, callback) => {
    setUser(newUser);
    callback();
  };

  let signout = (callback) => {
    setUser(null);
    callback();
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
