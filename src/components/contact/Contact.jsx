import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, User, MessageSquare } from "lucide-react";
import taxiContact from "../../assets/taxicontact.png";

export default function ContactSection() {
  return (
    <section className="py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE — CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/40 p-8 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.15)] border border-black/10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
            Contact Us
          </h2>

          <form className="space-y-5">

            {/* Name */}
            <div className="relative">
              <User className="absolute left-4 top-4 text-black-600" size={20} />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/70 backdrop-blur-xl pl-12 py-3 rounded-xl border border-black/20 outline-none focus:ring-2 focus:ring-orange-400 text-black"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-black-600" size={20} />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/70 backdrop-blur-xl pl-12 py-3 rounded-xl border border-black/20 outline-none focus:ring-2 focus:ring-orange-400 text-black"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-4 top-4 text-black-600" size={20} />
              <input
                type="number"
                placeholder="Phone Number"
                className="w-full bg-white/70 backdrop-blur-xl pl-12 py-3 rounded-xl border border-black/20 outline-none focus:ring-2 focus:ring-orange-400 text-black"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 text-black-600" size={20} />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full bg-white/70 backdrop-blur-xl pl-12 py-3 rounded-xl border border-black/20 outline-none focus:ring-2 focus:ring-orange-400 text-black"
              ></textarea>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              className="w-full py-3 bg-yellow-500 hover:bg-gray-800 rounded-xl text-white font-semibold shadow-lg hover:shadow-yellow-400/40 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src={taxiContact}
            alt="Contact"
            className="w-full max-w-md drop-shadow-[0_0_25px_rgba(255,170,0,0.4)]"
          />
        </motion.div>

      </div>
    </section>
  );
}
