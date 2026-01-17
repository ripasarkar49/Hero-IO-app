import { createBrowserRouter } from "react-router";


import MainLaoutes from "../LayOutes/MainLaoutes";
import App from "../Pages/App";
import PageNotFound from "../Pages/PageNotFound";
import Home from "../Pages/Home";
import RouteErrror from "../Pages/RouteErrror";
import Installation from "../Pages/Installation";
import AppDeatails from "../Pages/AppDeatails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLaoutes></MainLaoutes>,
    errorElement:<RouteErrror></RouteErrror>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/app",
        element: <App></App>,
      },
      {
        path: "/installation",
        element: <Installation></Installation>,
      },
      {
        path: "/app/:id",
        element: <AppDeatails></AppDeatails>,
      },
      
    ],
  },
  {
    path:"/*",
    element:<PageNotFound></PageNotFound>
  }
]);

export default router;
