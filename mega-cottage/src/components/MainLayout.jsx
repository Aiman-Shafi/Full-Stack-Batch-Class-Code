import Header from "./Header";
import Sidebar from "./Sidebar";
import "../styles/global.css";

export default function MainLayout() {
  return (
    <>
      <div className="mainLayout">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="navbar">
          <Header />
        </div>
        <main className="main p-8">
          <h2>Test</h2>
        </main>
      </div>
    </>
  );
}
