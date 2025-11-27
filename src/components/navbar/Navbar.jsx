// src/components/Navbar.jsx
import React, { useState } from "react";
import {
  Menu,
  X,
  Instagram,
  Github,
  Dribbble,
  Linkedin,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

// logo path (adjust relative if your file lives in a different folder)
import logo from "../../assets/logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  // active state not required for routing; NavLink handles active class
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    // { label: "Projects", path: "/projects" },
    { label: "Press", path: "/press" },
    { label: "Contact", path: "/contact" },
  ];

  const navigate = useNavigate();

  const handleMobileNav = (path) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* NAVBAR TOP */}
      <nav className="w-full bg-[#111] text-white fixed top-0 left-0 z-50 border-b border-[#222]">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-5">

          {/* LEFT - LOGO */}
          <div className="flex items-center gap-3">
            <NavLink to="/">
              <img
                src={logo}
                alt="logo"
                className="h-12 w-auto object-contain rounded"
              />
            </NavLink>
          </div>

          {/* MOBILE DOWNLOAD BUTTON (CENTER) */}
          <div className="md:hidden absolute left-1/2 -translate-x-1/2">
            <button className="px-4 py-1.5 bg-yellow-300 text-black font-semibold rounded-md text-sm">
              Download App
            </button>
          </div>

          {/* CENTER NAV LINKS (DESKTOP) */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end
                className={({ isActive }) =>
                  `px-4 py-1.5 rounded-md text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-yellow-400 text-white font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* RIGHT - SOCIAL ICONS + DOWNLOAD BTN (DESKTOP) */}
          <div className="hidden md:flex items-center gap-5">
            <a className="text-gray-300 hover:text-white" aria-label="instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a className="text-gray-300 hover:text-white" aria-label="github">
              <Github className="w-5 h-5" />
            </a>
            <a className="text-gray-300 hover:text-white" aria-label="dribbble">
              <Dribbble className="w-5 h-5" />
            </a>
            <a className="text-gray-300 hover:text-white" aria-label="linkedin">
              <Linkedin className="w-5 h-5" />
            </a>

            {/* DOWNLOAD APP BUTTON (DESKTOP) */}
            <button
              onClick={() => navigate("/")}
              className="ml-2 px-4 py-1.5 bg-yellow-500 text-black font-semibold rounded-md text-sm hover:bg-yellow-500 transition"
            >
              Download App
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button onClick={() => setOpen(true)} className="md:hidden text-yellow-400">
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU PANEL */}
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-end">
          <div className="w-72 h-full bg-[#0b0b0c] p-6 relative">
            {/* CLOSE BUTTON */}
            <button onClick={() => setOpen(false)} className="absolute right-4 top-4 text-gray-300">
              <X size={24} />
            </button>

            {/* NAV LINKS */}
            <div className="mt-14 flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleMobileNav(item.path)}
                  className={`text-left text-lg px-3 py-2 rounded-md transition ${
                    // we can't use NavLink here easily; keep visual style consistent
                    "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* SOCIAL ICONS BOTTOM */}
            <div className="absolute bottom-8 left-6 flex items-center gap-6">
              <a className="text-gray-300" aria-label="instagram"><Instagram className="w-5 h-5" /></a>
              <a className="text-gray-300" aria-label="github"><Github className="w-5 h-5" /></a>
              <a className="text-gray-300" aria-label="dribbble"><Dribbble className="w-5 h-5" /></a>
              <a className="text-gray-300" aria-label="linkedin"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
