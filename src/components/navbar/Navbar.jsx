import React, { useState } from "react";
import {
  Menu,
  X,
  Instagram,
  Github,
  Dribbble,
  Linkedin,
} from "lucide-react";

// ⭐ IMPORT YOUR LOGO
import logo from "../../assets/logo.jpg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navItems = ["Home", "About Us", "Projects", "Studio", "Contact"];

  return (
    <>
      {/* NAVBAR TOP */}
      <nav className="w-full bg-[#111] text-white fixed top-0 left-0 z-50 border-b border-[#222]">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-5">

          {/* LEFT - LOGO */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="h-12 w-auto object-contain rounded"
            />
          </div>

          {/* ⭐ MOBILE DOWNLOAD BUTTON (CENTER) */}
          <div className="md:hidden absolute left-1/2 -translate-x-1/2">
            <button className="px-4 py-1.5 bg-yellow-700 text-black font-semibold rounded-md text-sm">
              Download App
            </button>
          </div>

          {/* CENTER NAV LINKS (DESKTOP) */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`px-4 py-1.5 rounded-md text-sm transition-all duration-200 ${
                  active === item
                    ? "bg-yellow-400 text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* RIGHT - SOCIAL ICONS + DOWNLOAD BTN (DESKTOP) */}
          <div className="hidden md:flex items-center gap-5">
            <Instagram className="w-5 h-5 text-gray-300 hover:text-white" />
            <Github className="w-5 h-5 text-gray-300 hover:text-white" />
            <Dribbble className="w-5 h-5 text-gray-300 hover:text-white" />
            <Linkedin className="w-5 h-5 text-gray-300 hover:text-white" />

            {/* ⭐ DOWNLOAD APP BUTTON (DESKTOP) */}
            <button className="ml-2 px-4 py-1.5 bg-yellow-500 text-black font-semibold rounded-md text-sm hover:bg-yellow-500 transition">
              Download App
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-yellow-400"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU PANEL */}
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex justify-end">
          <div className="w-72 h-full bg-[#0b0b0c] p-6 relative">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 text-gray-300"
            >
              <X size={24} />
            </button>

            {/* NAV LINKS */}
            <div className="mt-14 flex flex-col gap-6">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActive(item);
                    setOpen(false);
                  }}
                  className={`text-left text-lg px-3 py-2 rounded-md transition ${
                    active === item
                      ? "bg-yellow-400 text-black font-semibold"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* SOCIAL ICONS BOTTOM */}
            <div className="absolute bottom-8 left-6 flex items-center gap-6">
              <Instagram className="w-5 h-5 text-gray-300" />
              <Github className="w-5 h-5 text-gray-300" />
              <Dribbble className="w-5 h-5 text-gray-300" />
              <Linkedin className="w-5 h-5 text-gray-300" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
