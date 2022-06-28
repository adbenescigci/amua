import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

import "./index.css";

//Public
const Intro = () => {
  return <div> Intro </div>;
};

//Private
const Dashboard = () => {
  return <div> dashboard</div>;
};
const Game = () => {
  return <div> Game</div>;
};

//Login
const Login = () => {
  return <div> Game</div>;
};

//Footer Links
const HowItWorks = () => {
  return <div> How it works </div>;
};
const Faq = () => {
  return <div> Faq </div>;
};
const PrivacyPolicy = () => {
  return <div> Privacy policy</div>;
};
const TermsOfUse = () => {
  return <div> terms of use </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Intro />} />
        <Route element={<App />}>
          <Route path="/login" element={<Login />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use/" element={<TermsOfUse />} />
          <Route path="/login" element={<Login />} />

          <Route path="/hub" element={<Dashboard />} />
          <Route path="/game/:id" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
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
