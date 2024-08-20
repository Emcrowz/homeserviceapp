// import TopBar from "./Components/TopBar";
// import Logo from "./Components/Logo";
// import Navigation from "./Components/Navigation";
// import Login from "./Components/Login";
import { UserProvider } from "./Components/Context/UserContext";
import router from "./Router/Router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
