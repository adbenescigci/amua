import React from "react";

export let AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  let [user, setUser] = React.useState("test");

  let signin = (newUser) => {
    setUser(newUser);
    console.log("signin");
  };

  let signout = () => {
    setUser(null);
    console.log("signout");
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
