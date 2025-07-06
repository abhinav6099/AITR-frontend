// src/components/StudentTabs.jsx

import React from "react";
import { Link, useLocation } from "react-router-dom";

const StudentTabs = () => {
  const location = useLocation();

  const links = [
    { path: "/student/profile", label: "Profile" },
    { path: "/student/certification", label: "Certification" },
    { path: "/student/competitions", label: "Technical/Non-Technical Competitions"},
    { path: "/student/placement", label: "Placement" },
    { path: "/student/internship", label: "Internship" },
    { path: "/student/researchpaper", label: "Research Paper" },
    { path: "/student/sports", label: "Sports" },
    { path: "/student/extracurricular", label: "Extra Curricular" },
    { path: "/student/project", label: "Project Work/Capstone Project" },
    { path: "/student/startups", label: "Startups/Entrepreneurial Ventures" },
    { path: "/student/hackathons", label: "Hackathons / Innovation Challenges"},
    { path: "/student/higherstudies", label: "Higher Studies" },
    { path: "/student/memberships", label: "Professional Memberships" },
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

export default StudentTabs;
