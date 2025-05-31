import React from "react";
import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import SignIn from '../pages/signIn/SignIn'
import JobDetails from "../pages/Job Details/JobDetails";
import PrivateRoutes from "../routes/PrivateRoutes";
import JobApply from "../pages/JobApply/JobApply";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/jobs/:id',
        loader: ({ params }) => fetch(`http://localhost:3000/jobs/${params.id}`),
        Component: JobDetails
      },
      {
        path: '/jobApply/:id',
        element: <PrivateRoutes>
          <JobApply />
        </PrivateRoutes>
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/signIn',
        Component: SignIn
      }
    ]
  },
]);

export default router;