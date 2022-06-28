import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./pages/Public/Intro/Intro";
import BasicPage from "./components/BasicPage/BasicPage";
import AuthProvider from "./providers/AuthProvider/AuthProvider";
import { routesList } from "./utils/routesList";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Intro />} />
          <Route element={<BasicPage />}>
            {routesList.map((el, index) => (
              <Route key={index} path={el.route} element={el.element} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
