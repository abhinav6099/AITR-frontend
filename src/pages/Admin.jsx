import React from 'react';
import { BrowserRouter, Link, Outlet, Route, RouterProvider, Routes } from 'react-router-dom'; // ✅ Import added

function Admin() {



  return (
    <>
    <div>
      <AdminNavbar />
      <div className="p-4">
        <Outlet /> {/* Renders AddFaculty, AddAwards, etc. */}
      </div>
    </div>

    </>
  );
}



export default Admin;



const AdminNavbar = () => (
  <nav className="p-2 bg-blue-100 flex gap-4">
    <Link to="/admin/addfaculty">Add Faculty</Link>
    <Link to="/admin/addawards">Add Awards</Link>
    <Link></Link>
  </nav>
);

