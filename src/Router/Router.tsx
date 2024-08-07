import { createBrowserRouter, Outlet } from "react-router-dom";
import { Home } from "../Pages/Home.tsx";
import { Services } from "../Pages/Services.tsx";
import { AboutUs } from "../Pages/AboutUs.tsx";

// export const Router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/aboutus" element={<AboutUs />} />
//         {/* <Route path="/login" element={<Login />} /> */}
//         {/* <Route path="/register" element={<Register />} /> */}
//         {/* <Route path="/search/:category" element={<SearchCategory />} /> */}
//         <Route path="*" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

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
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
    ],
  },
]);

export default router;
