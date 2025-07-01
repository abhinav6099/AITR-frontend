import React from 'react'

function CalenderBox({ register , label}) {
  return (
    <div className="flex flex-col mb-4 w-full max-w-xs">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label.split("_").join(" ").toUpperCase()}
      </label>
      <input
        type="date"
        // {...register("startingDate")}
        className="w-full max-w-xs px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}

export default CalenderBox;
