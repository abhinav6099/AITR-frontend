import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleNavClick = (section) => {
    console.log(`Navigating to ${section}`);
    // You can integrate React Router navigation here
  };

  return (
    <nav className="w-full bg-white shadow flex justify-around items-center px-8 py-4">
      <div className="flex gap-4">
        <Link to ="/home" >
        <Button className= {"rounded-md"} label="Home" onClick={() => handleNavClick("Home")} />   
        </Link>
        <Button className= {"rounded-md"} label="Institute" onClick={() => handleNavClick("Institute")} />
        <Button className= {"rounded-md"} label="Department" onClick={() => handleNavClick("Department")} />
        <Button className= {"rounded-md"} label="Faculty" onClick={() => handleNavClick("Faculty")} />
        <Button className= {"rounded-md"} label="Student" onClick={() => handleNavClick("Student")} />
      </div>
      <Link to = "/admin" >
        <Button className={"rounded-md"} label="Admin" onClick={() => handleNavClick("Admin")} />
      </Link>
    </nav>
  );
};

export default Navbar;
