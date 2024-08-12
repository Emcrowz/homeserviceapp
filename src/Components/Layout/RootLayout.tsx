import { Outlet } from "react-router-dom";
import { TopBar } from "./TopBar";

export const RootLayout = () => {
  return (
    <>
      <TopBar />
      <div>
        <Outlet />
      </div>
    </>
  );
};
