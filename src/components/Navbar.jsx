import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { IoIosHome } from "react-icons/io";
const Navbar = () => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/app", label: "App" },
    { path: "/installation", label: "Installation" },
  ];
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="w-11/12 mx-auto flex">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-purple-600 font-semibold underline"
                      : "text-black hover:text-purple-600 transition"
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </ul>
          </div>
          <img src={logo} className="w-10 h-10" />
          <Link to="/" className="font-bold text-purple-600 text-2xl">
            HERO.IO
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-purple-600 font-semibold underline"
                    : "text-black hover:text-purple-600 transition"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/ripasarkar49"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white font-medium 
               px-4 py-2 rounded-md
               bg-linear-to-r from-purple-800 to-indigo-500
               hover:from-purple-600 hover:to-indigo-900
               transition duration-300 shadow-md"
          >
            <FaGithub className="text-xl" />
            Contribute
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
