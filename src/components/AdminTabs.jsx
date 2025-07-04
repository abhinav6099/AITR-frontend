import React from "react";
import { Link, useLocation } from "react-router-dom";

const AdminTabs = () => {
  const location = useLocation();

  const links = [
    { path: "/admin/addfaculty", label: "Faculty" },
    { path: "/admin/addawards", label: "Awards" },
    { path: "/admin/addconferences", label: "Conference" },
    { path: "/admin/adddevlopmentprograms", label: "Development Program" },
    { path: "/admin/addpatents", label: "Patents" },
    { path: "/admin/addfacultyresearch", label: "Faculty Research" },
    { path: "/admin/addstudents", label: "Student" },
    { path: "/admin/addstudentcertificates", label: "Student Certificates" },
    { path: "/admin/addhackathons", label: "Hackathons" },
    { path: "/admin/addinternships", label: "Internship" },
    { path: "/admin/addplacements", label: "Placements" },
    { path: "/admin/addstudentresearchs", label: "Research" },
    { path: "/admin/addsports", label: "Sports" },
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

export default AdminTabs;
