import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Unauthorized from "@/pages/Unauthorized";

export const authRoutes = [
  { Component: Login, path: "/login" },
  { Component: Register, path: "/register" },
  { Component: Unauthorized, path: "/unauthorized" },
];
