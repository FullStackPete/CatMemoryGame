import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import CatImage from "./components/CatImage";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Outlet />
      <CatImage />
    </div>
  );
}
