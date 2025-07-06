import React from "react";
import Button from "./Button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handleNavClick = (section) => {
    console.log(`Navigating to ${section}`);
  };

  return (

    <nav className="h-20 bg-slate-100 flex items-center justify-between shadow-lg text-black text-lg font-medium">
      <div className="ml-48 gap-4 flex items-center">
        <Link to="/" onClick={() => handleNavClick("Home")}>
          <Button
            label="Home"
            className={`bg-transparent shadow-none ${
              isActive("/home") ? "text-blue-600 underline" : "text-black hover:text-blue-600"
            }`}
          />
        </Link>
        <Link to="/institute" onClick={() => handleNavClick("Institute")}>
          <Button
            label="Institute"
            className={`bg-transparent shadow-none ${
              isActive("/institute") ? "text-blue-600 underline" : "text-black hover:text-blue-600"
            }`}
          />
        </Link>
        <Link to="/department" onClick={() => handleNavClick("Department")}>
          <Button
            label="Department"
            className={`bg-transparent shadow-none ${
              isActive("/department") ? "text-blue-600 underline" : "text-black hover:text-blue-600"
            }`}
          />
        </Link>
        <Link to="/faculty" onClick={() => handleNavClick("Faculty")}>
          <Button
            label="Faculty"
            className={`bg-transparent shadow-none ${
              isActive("/faculty") ? "text-blue-600 underline" : "text-black hover:text-blue-600"
            }`}
          />
        </Link>
        <Link to="/student" onClick={() => handleNavClick("Student")}>
          <Button
            label="Student"
            className={`bg-transparent shadow-none ${
              isActive("/student") ? "text-blue-600 underline" : "text-black hover:text-blue-600"
            }`}
          />
        </Link>
      </div>

      <div className="flex items-center mr-40 gap-4 text-base text-white">
        <Link to="/admin" onClick={() => handleNavClick("Admin")}>
          <Button label="Admin" className="rounded-md" />

        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
