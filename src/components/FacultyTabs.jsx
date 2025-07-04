import React from "react";
import { Link, useLocation } from "react-router-dom";

const FacultyTabs = () => {
  const location = useLocation();

  const links = [
    { path: "/faculty/profile", label: "Profile" },
    { path: "/faculty/researchpapers", label: "Research Paper Publications" },
    { path: "/faculty/awards", label: "Faculty Awards and Recognitions" },
    { path: "/faculty/fdp", label: "Faculty Development Program (FDPs Attended)" },
    { path: "/faculty/patentpublished", label: "Patent Published" },
    { path: "/faculty/patentgranted", label: "Patents Granted" },
    { path: "/faculty/certifications", label: "Professional Certifications Earned" },
    { path: "/faculty/memberships", label: "Membership in Professional Bodies" },
    { path: "/faculty/qualifications", label: "Academic Qualifications Discipline" },
    { path: "/faculty/phdsupervision", label: "PhD Supervision / Guidance" },
    { path: "/faculty/researchprojects", label: "Research Projects Guided" },
    { path: "/faculty/invitedtalks", label: "Invited Talks / Resource Person" },
    { path: "/faculty/books", label: "Books / Chapters Authored" },
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

export default FacultyTabs;
