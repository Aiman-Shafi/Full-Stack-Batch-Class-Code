import Header from "./Header";
import Sidebar from "./Sidebar";
import "../styles/global.css";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <div className="main-layout">
        <div className="navbar">
          <Header />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
        <main className="main p-10">
          <Outlet />
        </main>
      </div>
    </>
  );
}
