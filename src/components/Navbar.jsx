import React from "react";
import Button from "./Button";

const Navbar = () => {
  const handleNavClick = (section) => {
    console.log(`Navigating to ${section}`);
    // You can integrate React Router navigation here
  };

  return (
    <nav className="w-full bg-white shadow flex justify-around items-center px-8 py-4">
      <div className="flex gap-4">
        <Button label="Home" onClick={() => handleNavClick("Home")} />   
        <Button label="Institute" onClick={() => handleNavClick("Institute")} />
        <Button label="Department" onClick={() => handleNavClick("Department")} />
        <Button label="Faculty" onClick={() => handleNavClick("Faculty")} />
        <Button label="Student" onClick={() => handleNavClick("Student")} />
      </div>
      <Button label="Admin" onClick={() => handleNavClick("Admin")} />
    </nav>
  );
};

export default Navbar;
