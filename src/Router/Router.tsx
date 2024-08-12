import { createBrowserRouter, Outlet } from "react-router-dom";
import { Home } from "../Pages/Home.tsx";
import { Services } from "../Pages/Services.tsx";
import { AboutUs } from "../Pages/AboutUs.tsx";
import { ROUTES } from "./RouterConsts.ts";
import { ErrorPage } from "../Pages/ErrorPage.tsx";

const Root = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
        path: ROUTES.ABOUT_US,
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
