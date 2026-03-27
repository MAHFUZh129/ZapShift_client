import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import Coverage from "../pages/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import BeRider from "../pages/rider/BeRider";
import PrivateRoute from "./privateRoute";
import SendParcel from "../pages/dashboard/forUser/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/dashboard/forUser/MyParcels";
import MyPayments from "../pages/dashboard/payment/Payments";
import PaymentCancel from "../pages/dashboard/payment/PaymentCancel";
import PaymentSuccess from "../pages/dashboard/payment/PaymentSuccess";
import PaymentHistory from "../pages/dashboard/forUser/PaymentHistory";

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
        path:'rider',
        element:<PrivateRoute><BeRider></BeRider></PrivateRoute>
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
  },
  {
    path:'dashboard',
    Component:DashboardLayout,
    children:[
      {
        path:'my-parcels',
        element:<PrivateRoute><MyParcels></MyParcels></PrivateRoute>
      },
      {
        path:'send-parcel',
        element:<PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
        loader:()=>fetch('/servicesCentre.json')

      },
      {
        path:'payment-history',
        element:<PrivateRoute><PaymentHistory></PaymentHistory></PrivateRoute>,
        

      },
      {
        path:'my-payments/:parcelId',
        element:<PrivateRoute><MyPayments></MyPayments></PrivateRoute>
      },
      {
        path:'payment-cancelled',
        element:<PrivateRoute><PaymentCancel></PaymentCancel></PrivateRoute>
      },
      {
        path:'payment-success',
        element:<PrivateRoute><PaymentSuccess></PaymentSuccess></PrivateRoute>
      },
    ]

  }
]);