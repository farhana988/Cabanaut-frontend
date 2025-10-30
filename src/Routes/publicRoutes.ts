import Home from "@/pages/Home";
import About from "@/pages/About";
import Features from "@/pages/Features";
import Contact from "@/pages/Contact";
import Faq from "@/pages/Faq";
import Pricing from "@/pages/footer/Pricing";
import TermsOfService from "@/pages/footer/TermsOfService";
import PrivacyPolicy from "@/pages/footer/PrivacyPolicy";
import BookARide from "@/pages/BookARide";

export const publicRoutes = [
  { Component: Home, path: "/" },
  { Component: BookARide, path: "/book-ride" },
  { Component: About, path: "about" },
  { Component: Features, path: "features" },
  { Component: Contact, path: "contact" },
  { Component: Faq, path: "faq" },
  { Component: Pricing, path: "pricing" },
  { Component: TermsOfService, path: "terms" },
  { Component: PrivacyPolicy, path: "privacy" },
];
