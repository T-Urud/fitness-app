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
  return (
    <div>
      <nav className="border-t-1 border-solid border-[rgb(193, 192, 192)] fixed bottom-0 left-0 right-0 py-1">
        <ul className="flex content-evenly gap-12">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="flex flex-col content-center items-center cursor-pointer"
            >
              <NavLink
                to={item.path}
                className={(nav) => (nav.isActive ? "text-black" : "")}
              >
                <svg className="w-8 h-8 stroke-[#B7B7B7]">{item.icon}</svg>
                <p className="text-sm mt-1 text-[#B7B7B7]">{item.name}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
