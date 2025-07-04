import React from "react";
import { Link, useLocation } from "react-router-dom";

const InstituteTabs = () => {
  const location = useLocation();

  const links = [
    { path: "/institute/mou", label: "MOU" },
    { path: "/institute/consultancy", label: "Consultancy" },
    { path: "/institute/rnd", label: "R&D" },
    { path: "/institute/event-grant", label: "Event Grant" },
    { path: "/institute/event-organized", label: "Event Organized" },
    { path: "/institute/documents", label: "Institute Documents" },
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

export default InstituteTabs;
