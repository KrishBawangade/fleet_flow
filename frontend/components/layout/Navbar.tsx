"use client";

import { Bell, PanelLeft } from "lucide-react";

interface NavbarProps {
  toggleSidebar: () => void;
}

export default function Navbar({ toggleSidebar }: NavbarProps) {
  return (
    <header className="w-full h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      
      {/* LEFT */}
      <div className="flex items-center gap-4">
        
        {/* Sidebar Toggle Icon */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100 transition"
        >
          <PanelLeft className="text-gray-700" size={20} />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            FF
          </div>
          <span className="text-xl font-semibold text-gray-800">
            Fleet Flow
          </span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">
        <button className="relative">
          <Bell className="text-gray-600 hover:text-blue-600 transition" size={20} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            3
          </span>
        </button>

        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
            JU
          </div>
          <span className="text-sm font-medium text-gray-700 hidden md:block">
            Jatin
          </span>
        </div>
      </div>
    </header>
  );
}