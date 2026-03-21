import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import Coverage from "../pages/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
      {
       index:true,
       Component:Home
      },
      {
        path:"coverage",
        Component:Coverage,
        loader:()=>fetch('/servicesCentre.json')
 
      },

    ]

  },
  {
    path:'/',
    Component:AuthLayout,
    children:[
      {
        path:'login',
        Component:Login
      },
      {
        path:'register',
        Component:Register
      }

    ]
  }
]);