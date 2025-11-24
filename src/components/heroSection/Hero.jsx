import React, { useState } from "react";
import { MapPin } from "lucide-react";

// Background image path (Vite/React mein src/assets se directly import karo)
import HeroBG from "../../assets/heroimages/hero4.jpg";   // <-- Apna exact path daal dena

export default function RideBookingSection() {
  const [activeTab, setActiveTab] = useState("taxi");

  return (
    // Full screen background with blue overlay
    <div className="min-h-screen w-full relative flex items-center justify-center bg-cover bg-center bg-no-repeat"
         style={{ backgroundImage: `url(${HeroBG})` }}>
      
      {/* Dark blue overlay for better text visibility */}
      <div className="absolute inset-0 bg-gray-900/60"></div>

      {/* Main Card - Centered */}
      <div className="relative z-10 w-full max-w-md mx-4 sm:mx-auto">
        <div className="backdrop-blur-xl bg-white/10 border border-white/30 rounded-3xl p-6 sm:p-8 shadow-2xl">
          
          {/* Tabs */}
          <div className="flex mb-6 rounded-xl overflow-hidden bg-white/10">
            <button
              onClick={() => setActiveTab("taxi")}
              className={`flex-1 py-3 text-center text-sm sm:text-base font-bold transition-all ${
                activeTab === "taxi"
                  ? "bg-yellow-400 text-black"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              Taxi
            </button>
            <button
              onClick={() => setActiveTab("driver")}
              className={`flex-1 py-3 text-center text-sm sm:text-base font-bold transition-all ${
                activeTab === "driver"
                  ? "bg-yellow-400 text-black"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              Driver
            </button>
          </div>

          {/* Taxi Form */}
          {activeTab === "taxi" && (
            <div className="space-y-5">
              <label className="flex items-center gap-4 bg-white/10 border border-white/30 p-4 rounded-2xl cursor-text backdrop-blur-md">
                <MapPin className="w-5 h-5 text-yellow-300" />
                <input
                  type="text"
                  placeholder="Enter Pickup Location"
                  className="w-full bg-transparent placeholder-white/70 text-white outline-none text-base"
                />
              </label>
              <label className="flex items-center gap-4 bg-white/10 border border-white/30 p-4 rounded-2xl cursor-text backdrop-blur-md">
                <MapPin className="w-5 h-5 text-yellow-300" />
                <input
                  type="text"
                  placeholder="Enter Drop Location"
                  className="w-full bg-transparent placeholder-white/70 text-white outline-none text-base"
                />
              </label>
              <button className="w-full py-4 rounded-2xl text-lg font-bold bg-yellow-400 text-black hover:bg-yellow-500 active:scale-95 transition-all shadow-lg">
                Book Ride
              </button>
            </div>
          )}

          {/* Driver Form */}
          {activeTab === "driver" && (
            <div className="space-y-5">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full bg-white/10 border border-white/30 p-4 rounded-2xl outline-none placeholder-white/70 text-white backdrop-blur-md text-base"
              />
              <input
                type="text"
                placeholder="Enter Vehicle Number"
                className="w-full bg-white/10 border border-white/30 p-4 rounded-2xl outline-none placeholder-white/70 text-white backdrop-blur-md text-base"
              />
              <input
                type="text"
                placeholder="Enter Phone Number"
                className="w-full bg-white/10 border border-white/30 p-4 rounded-2xl outline-none placeholder-white/70 text-white backdrop-blur-md text-base"
              />
              <button className="w-full py-4 rounded-2xl text-lg font-bold bg-yellow-400 text-black hover:bg-yellow-500 active:scale-95 transition-all shadow-lg">
                Book Driver
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}