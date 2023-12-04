import React, { useEffect, useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Header() {
  //   const [count, setCount] = useState(10);

  //   //   console.log("header....");

  //   useEffect(() => {
  //     console.log("header re-render");
  //   }, [count]);
  return (
    <div className="header">
      <div>
        <Link to="/">
          <h2>LOGO</h2>
        </Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/service">Service</Link>
      </nav>
    </div>
  );
}

export default Header;
