import React from "react";
import { Search } from "lucide-react"; // Optional icon, needs lucide-react or use any SVG

const SearchBar = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full pl-10 pr-4 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm focus:shadow-md transition-all duration-200"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
      </div>
    </div>
  );
};

export default SearchBar;
