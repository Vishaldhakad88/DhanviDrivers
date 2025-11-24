import React, { useState } from "react";
import { MapPin } from "lucide-react";

export default function RideBookingSection() {
  const [activeTab, setActiveTab] = useState("taxi");

  return (
    <div className="w-full max-w-md">

      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl">

        {/* Tabs */}
        <div className="flex mb-5">
          <button
            onClick={() => setActiveTab("taxi")}
            className={`flex-1 py-2 text-center cursor-pointer text-sm font-semibold transition ${
              activeTab === "taxi"
                ? "text-white border-b-2 border-yellow-400"
                : "text-white/70 hover:text-white"
            }`}
          >
            Taxi
          </button>

          <button
            onClick={() => setActiveTab("driver")}
            className={`flex-1 py-2 text-center cursor-pointer text-sm font-semibold transition ${
              activeTab === "driver"
                ? "text-white border-b-2 border-yellow-400"
                : "text-white/70 hover:text-white"
            }`}
          >
            Driver
          </button>
        </div>

        {/* Taxi Form */}
        {activeTab === "taxi" && (
          <div className="space-y-4">

            <label className="flex items-center gap-3 bg-transparent border border-white/20 p-3 rounded-xl cursor-text">
              <MapPin className="text-white/80" />
              <input
                type="text"
                placeholder="Enter Pickup Location"
                className="w-full bg-transparent placeholder-white/70 text-white outline-none"
              />
            </label>

            <label className="flex items-center gap-3 bg-transparent border border-white/20 p-3 rounded-xl cursor-text">
              <MapPin className="text-white/80" />
              <input
                type="text"
                placeholder="Enter Drop Location"
                className="w-full bg-transparent placeholder-white/70 text-white outline-none"
              />
            </label>

            <button
              className="w-full py-3 rounded-xl text-lg font-bold bg-yellow-400 text-black transition cursor-pointer hover:bg-yellow-600 hover:text-white"
            >
              Book Ride
            </button>

          </div>
        )}

        {/* Driver Form */}
        {activeTab === "driver" && (
          <div className="space-y-4">

            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full bg-transparent placeholder-white/70 text-white border border-white/20 p-3 rounded-xl outline-none"
            />

            <input
              type="text"
              placeholder="Enter Vehicle Number"
              className="w-full bg-transparent placeholder-white/70 text-white border border-white/20 p-3 rounded-xl outline-none"
            />

            <input
              type="text"
              placeholder="Enter Phone Number"
              className="w-full bg-transparent placeholder-white/70 text-white border border-white/20 p-3 rounded-xl outline-none"
            />

            <button
              className="w-full py-3 rounded-xl text-lg font-bold bg-yellow-400 text-black cursor-pointer transition hover:bg-yellow-600 hover:text-white"
            >
              Book Driver
            </button>

          </div>
        )}

      </div>
    </div>
  );
}
