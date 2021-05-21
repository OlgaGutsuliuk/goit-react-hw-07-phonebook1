import { lazy } from 'react'


const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    component: lazy(()=>import ("../pages/HomePage"/*webpackChankName:'HomePage'*/ ))
    },
    
   { name: "Contacts", path: "/contacts", exact: true, component: lazy(()=>import ("../pages/ContactsPage"/*webpackChunkName:'ContactsPage'*/ ))},
  { name: "Registration", path: "/registration", exact: true, component: lazy(()=>import ("../pages/RegisterPage"/*webpackChunkName:'RegistrationPage'*/ ))},
  { name: "Login", path: "/login", exact: true, component: lazy(()=>import ("../pages/LoginPage"/*webpackChunkName:'LoginPage'*/ ))}
];
export default mainRoutes;
