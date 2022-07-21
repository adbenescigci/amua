import Login from "../pages/Public/Login/Login";
import Game from "../pages/Private/Game/Game";
import HowItWorks from "../pages/Public/HowItWorks/HowItWorks";
import Dashboard from "../pages/Private/Dashboard/Dashboard";
import FAQs from "../pages/Public/FAQs/FAQs";
import PrivacyPolicy from "../pages/Public/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "../pages/Public/TermsOfUse/TermsOfUse";
import Help from "../pages/Public/Help/Help";
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
    route: "/faqs",
    element: <FAQs />,
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
    route: "/help",
    element: <Help />,
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
