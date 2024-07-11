import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    name: "Home Page",
    path: "/home",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-home"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: "Friends",
    path: "/friends",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-user-round-plus"
      >
        <path d="M2 21a8 8 0 0 1 13.292-6" />
        <circle cx="10" cy="8" r="5" />
        <path d="M19 16v6" />
        <path d="M22 19h-6" />
      </svg>
    ),
  },
  {
    name: "Profile",
    path: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-circle-user-round"
      >
        <path d="M18 20a6 6 0 0 0-12 0" />
        <circle cx="12" cy="10" r="4" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
];

const Navigation = () => {
  // const nav = { isActive: true };
  return (
    <nav className="border-t border-solid border-gray-300 fixed bottom-0 left-0 right-0 py-1">
      <ul className="flex justify-evenly gap-12 py-2">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="flex flex-col content-center items-center cursor-pointer"
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center ${
                  isActive ? "text-black" : "text-gray-400"
                }`
              }
            >
              {item.icon}
              <p className="text-sm mt-1">{item.name}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
