import TopBar from "./Components/TopBar";
import Logo from "./Components/Logo";
import Navigation from "./Components/Navigation";
import Login from "./Components/Login";
import router from "./Router/Router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <TopBar>
        <Logo />
        <Navigation />
        <Login />
      </TopBar>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
