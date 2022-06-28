import Login from "../pages/Public/Login/Login";
import Game from "../pages/Private/Game/Game";
import HowItWorks from "../pages/Public/HowItWorks/HowItWorks";
import Dashboard from "../pages/Private/Dashboard/Dashboard";
import Faq from "../pages/Public/FAQ/Faq";
import PrivacyPolicy from "../pages/Public/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "../pages/Public/TermsOfUse/TermsOfUse";
import RequireAuth from "../providers/AuthProvider/RequireAuth";

export const routesList = [
  {
    route: "/login",
    element: <Login />,
  },
  {
    route: "/how-it-works",
    element: <HowItWorks />,
  },
  {
    route: "/faq",
    element: <Faq />,
  },
  {
    route: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    route: "/terms-of-use",
    element: <TermsOfUse />,
  },
  {
    route: "/hub",
    element: (
      <RequireAuth>
        <Dashboard />
      </RequireAuth>
    ),
  },
  {
    route: "/game/:id",
    element: (
      <RequireAuth>
        <Game />
      </RequireAuth>
    ),
  },
];
