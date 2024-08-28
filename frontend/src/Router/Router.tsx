import { createBrowserRouter } from "react-router-dom";
import { Home } from "../Pages/Home.tsx";
import { Services } from "../Pages/Services.tsx";
import { AboutUs } from "../Pages/AboutUs.tsx";
import { ROUTES } from "./RouterConsts.ts";
import { ErrorPage } from "../Pages/ErrorPage.tsx";
import { Login } from "../Forms/Login.tsx";
import { RootLayout } from "../Components/Layout/RootLayout.tsx";
import { Register } from "../Forms/Register.tsx";
import { BusinessDetails } from "../Pages/BusinessDetails.tsx";
import { ServicesFiltered } from "../Pages/ServicesFiltered.tsx";
// import { AuthLayout } from "../Components/Layout/AuthLayout.tsx";
// import { Register } from "../Pages/Register.tsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.SERVICES,
        element: <Services />,
      },
      {
        path: ROUTES.SERVICES_FILTERED,
        element: <ServicesFiltered />,
      },
      {
        path: ROUTES.DETAILS,
        element: <BusinessDetails />,
      },
      {
        path: ROUTES.ABOUT_US,
        element: <AboutUs />,
      },
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.REGISTER,
        element: <Register />,
      },
    ],
  },
  // {
  //   element: <AuthLayout />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {
  //       path: ROUTES.LOGIN,
  //       element: <Login />,
  //     },
  //     {
  //       path: ROUTES.REGISTER,
  //       element: <Register />,
  //     },
  //   ],
  // },
]);

export default router;
