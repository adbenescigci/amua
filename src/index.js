import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import App from "./App";
import "./index.css";

import Login from "./pages/Public/Login/Login";
import Game from "./pages/Private/Game/Game";
import HowItWorks from "./pages/Public/HowItWorks/HowItWorks";
import Dashboard from "./pages/Private/Dashboard/Dashboard";
import Intro from "./pages/Public/Intro/Intro";
import Faq from "./pages/Public/FAQ/Faq";
import PrivacyPolicy from "./pages/Public/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "./pages/Public/TermsOfUse/TermsOfUse";

let AuthContext = React.createContext();

function AuthProvider({ children }) {
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
}

function useAuth() {
  return React.useContext(AuthContext);
}

function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Intro />} />
          <Route element={<App />}>
            <Route path="/login" element={<Login />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use/" element={<TermsOfUse />} />

            <Route
              path="/hub"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              path="/game/:id"
              element={
                <RequireAuth>
                  <Game />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// import { ThemeProvider } from "@mui/material/styles";
// import { dashboardTheme } from "./dashboardTheme";
// import CssBaseline from "@mui/material/CssBaseline";
// import ContextProvider from "./contextProvider/ContextProvider";

// root.render(
//   <ContextProvider>
//     <ThemeProvider theme={dashboardTheme}>
//       <CssBaseline />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<App />}>
//             .....
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </ThemeProvider>
//   </ContextProvider>
// );

// <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" exact={true} element={<Intro />} />
//         <Route path="/" element={<App />}>
//           <Route path="/login" element={<Login />} />
//           <Route
//             path="/"
//             element={
//               <RequireAuth>
//                 <Route path="/hub" element={<Dashboard />} />
//                 <Route path="/game/:id" element={<Game />} />
//               </RequireAuth>
//             }
//           />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
