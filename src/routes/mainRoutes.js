import { lazy } from "react";

const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/HomePage" /*webpackChankName:'HomePage'*/)),
    isPrivate: false,
    isRestricted: false,
  },

  {
    name: "Contacts",
    path: "/contacts",
    exact: true,
    component: lazy(() => import("../pages/ContactsPage" /*webpackChunkName:'ContactsPage'*/)),
    isPrivate: true,
    isRestricted: false,
  },
  {
    name: "Registration",
    path: "/registration",
    exact: true,
    component: lazy(() => import("../pages/RegisterPage" /*webpackChunkName:'RegistrationPage'*/)),
    isPrivate: false,
    isRestricted: true,
  },
  {
    name: "Login",
    path: "/login",
    exact: true,
    component: lazy(() => import("../pages/LoginPage" /*webpackChunkName:'LoginPage'*/)),
    isPrivate: false,
    isRestricted: true,
  }
];
export default mainRoutes;
