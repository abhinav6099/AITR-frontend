import React from "react";

const FilterComponent = ({ filterText, onFilter, onClear, placeholder = "Search..." }) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <input
        className="px-4 py-2 border rounded-md shadow-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder={placeholder}
        value={filterText}
        onChange={onFilter}
      />
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        onClick={onClear}
      >
        Clear
      </button>
    </div>
  );
};

export default FilterComponent;
