"use client";

import { Search, ChevronDown, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full">
      <div className="flex items-center w-full bg-white border border-gray-300 rounded-2xl px-6 py-3 shadow-sm gap-8">

        {/* Search Input (Now Wide) */}
        <div className="flex items-center bg-gray-100 rounded-xl px-5 py-3 flex-1">
          <Search size={18} className="text-gray-500 mr-3" />
          <input
            type="text"
            placeholder="Search bar ......"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent w-full outline-none text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        {/* Group By */}
        <button className="flex items-center gap-2 px-5 py-3 text-sm font-medium border border-gray-300 rounded-xl hover:bg-gray-100 transition whitespace-nowrap">
          Group by
          <ChevronDown size={16} />
        </button>

        {/* Filter */}
        <button className="flex items-center gap-2 px-5 py-3 text-sm font-medium border border-gray-300 rounded-xl hover:bg-gray-100 transition whitespace-nowrap">
          <SlidersHorizontal size={16} />
          Filter
        </button>

        {/* Sort By */}
        <button className="flex items-center gap-2 px-5 py-3 text-sm font-medium border border-gray-300 rounded-xl hover:bg-gray-100 transition whitespace-nowrap">
          Sort by
          <ChevronDown size={16} />
        </button>

      </div>
    </div>
  );
}