import { Outlet } from "react-router-dom";
import { TopBar } from "./TopBar";

export const AuthLayout = () => {
  return (
    <>
      <TopBar />
      <div>
        <Outlet />
      </div>
    </>
  );
};
