import MainLayout from "@/components/Layout/MainLayout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import ErrorPage from "@/pages/ErrorPage";
import Faq from "@/pages/Faq";
import Features from "@/pages/Features";
import Pricing from "@/pages/footer/Pricing";
import TermsOfService from "@/pages/footer/TermsOfService";
import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    Component: MainLayout,
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        Component: Home,
        path: "/",
      },
      {
        Component: About,
        path: "/about",
      },
      {
        Component: Features,
        path: "/features",
      },
      {
        Component: Contact,
        path: "/contact",
      },
      {
        Component: Faq,
        path: "/faq",
      },
      // footer
      {
        Component: Pricing,
        path: "/pricing",
      },
      {
        Component: TermsOfService,
        path: "/terms",
      },
    ],
  },
]);
export default router;
