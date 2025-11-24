// src/components/Footer.jsx
import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import logo from "../../assets/logo.jpg"; // <-- Your Logo

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-14 pb-6">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <img
            src={logo}
            alt="Logo"
            className="w-28 h-auto rounded-lg shadow-md"
          />
          <p className="text-white/70 mt-4 leading-relaxed">
            Your trusted ride partner for fast, safe and reliable transportation.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5">
            <a className="p-2 bg-yellow-400 rounded-full text-black hover:bg-yellow-500 cursor-pointer">
              <Facebook size={18} />
            </a>
            <a className="p-2 bg-yellow-400 rounded-full text-black hover:bg-yellow-500 cursor-pointer">
              <Instagram size={18} />
            </a>
            <a className="p-2 bg-yellow-400 rounded-full text-black hover:bg-yellow-500 cursor-pointer">
              <Twitter size={18} />
            </a>
            <a className="p-2 bg-yellow-400 rounded-full text-black hover:bg-yellow-500 cursor-pointer">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 cursor-pointer hover:text-yellow-400 transition">
              <ArrowRight size={16} /> Home
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-yellow-400 transition">
              <ArrowRight size={16} /> Book Taxi
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-yellow-400 transition">
              <ArrowRight size={16} /> Hire Driver
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-yellow-400 transition">
              <ArrowRight size={16} /> About Us
            </li>
            <li className="flex items-center gap-2 cursor-pointer hover:text-yellow-400 transition">
              <ArrowRight size={16} /> Contact
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <ul className="space-y-4 text-white/80">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-yellow-400" />
              +91 98765 43210
            </li>

            <li className="flex items-center gap-3">
              <Mail size={18} className="text-yellow-400" />
              support@dhanvidrivers.com
            </li>

            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-yellow-400" />
              Bangalore, India
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Subscribe</h2>
          <p className="text-white/70 mb-3">Get updates & offers directly in your inbox.</p>

          <div className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white outline-none placeholder-white/60"
            />
            <button className="px-4 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-500 transition cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-10 pt-4 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Dhanvi Drivers — All Rights Reserved.
      </div>
    </footer>
  );
}
