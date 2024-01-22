// import React from "react";

// import Link from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <aside className="p-10 flex flex-col gap-8 h-full border-r-2 border-cyan-100">
        <div className="logo  text-2xl text-cyan-600 font-bold">
          MEGA COTTAGE
        </div>
        <nav className="flex flex-col gap-4 text-2xl">
          <a href="/dashboard">Dashboard</a>
          <a href="/bookings">Bookings</a>
          <a href="/rooms">Rooms</a>
          <a href="/users">Guests</a>
          <a href="/settings">Settings</a>
          <a href="/account">Account</a>
          <a href="#">Logout</a>
        </nav>
      </aside>
    </>
  );
}
