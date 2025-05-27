import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Sidebar() {
  const [sideBarState, setSideBarState] = useState(false);

  const handleClick = () => {
    setSideBarState((prev) => !prev);
  };

  return (
    <div className="relative h-screen overflow-hidden">

      <div
        className={`
          fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40
          transform transition-transform duration-300 ease-in-out
          flex flex-col
          ${sideBarState ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Sidebar content */}
        <nav className="mt-16 px-6 flex-1">
          <ul className="space-y-4">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Services</li>
            <li className="nav-item">Contact</li>
          </ul>
        </nav>
      </div>

      {/* Toggle Button - slides along with sidebar */}
      <button
        className={`
          fixed top-4 z-50 p-2 bg-gray-200 rounded-2xl shadow-md
          transition-transform duration-300 ease-in-out
          ${sideBarState ? "right-64" : "right-4"}
        `}
        onClick={handleClick}
      >
         <Menu size={24} />
      </button>
    </div>
  );
}

export default Sidebar;
