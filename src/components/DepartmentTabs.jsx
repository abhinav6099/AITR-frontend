import React from "react";
import { Link, useLocation } from "react-router-dom";

const DepartmentTabs = () => {
  const location = useLocation();

  const links = [
    { path: "/department/mous", label: "MoUs (Memorandum of Understanding)" },
    { path: "/department/consultancy", label: "Consultancy Projects" },
    { path: "/department/rnd", label: "R&D Initiatives" },
    { path: "/department/eventgrant", label: "Event Grant Received" },
  ];

  return (
    <nav className="mt-4 px-4">
      <div className="flex flex-wrap justify-center gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4 shadow">
        {links.map(({ path, label }) => (
          <Link
            key={path}
            to={path}
            className={`px-4 py-2 text-sm font-medium rounded-full transition duration-200
              ${
                location.pathname === path
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-blue-600 border border-blue-200 hover:bg-blue-100"
              }`}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default DepartmentTabs;
