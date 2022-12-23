import { Link, Outlet } from "react-router-dom";
import { Navbar } from "./components";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
