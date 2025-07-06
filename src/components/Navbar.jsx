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
<<<<<<< HEAD
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
=======
    <nav className="w-full bg-white shadow flex justify-around items-center px-8 py-4">
      <div className="flex gap-4">
        <Link to ="/home" >
          <Button className= {"rounded-md"} label="Home" onClick={() => handleNavClick("Home")} />   
        </Link>

        <Link to="/institute" >
          <Button className= {"rounded-md"} label="Institute" onClick={() => handleNavClick("Institute")} />
        </Link>

        <Link to="/department">
          <Button className= {"rounded-md"} label="Department" onClick={() => handleNavClick("Department")} />
        </Link>

        <Link to="/faculty" >
          <Button className= {"rounded-md"} label="Faculty" onClick={() => handleNavClick("Faculty")} />
        </Link>
        
        <Link to="/student">
          <Button className= {"rounded-md"} label="Student" onClick={() => handleNavClick("Student")} />
>>>>>>> 6b60373 (last change before commit)
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
