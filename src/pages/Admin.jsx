import React from 'react';
import { BrowserRouter, Link, Outlet, Route, RouterProvider, Routes } from 'react-router-dom'; // ✅ Import added
import Accordion from '../components/Accordian';

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
  <nav className="p-2 bg-blue-100 flex justify-center gap-6">
    <Link to="/admin/addfaculty">Faculty</Link>
    <Link to="/admin/addawards">Awards</Link>
    <Link to="/admin/addconferences">Conference</Link>
    <Link to="/admin/adddevlopmentprograms">Devlopment Program</Link>
    <Link to="/admin/addpatents">Patents</Link>
    <Link to="/admin/addfacultyresearch">Faculty Research</Link>

    {/* student tabs */}
    <Link to="/admin/addstudents">Student</Link>
    <Link to="/admin/addstudentcertificates">Student Certificates</Link>
    <Link to="/admin/addhackathons">Hackathons</Link>
    <Link to="/admin/addinternships">Internship</Link>
    <Link to="/admin/addplacements">Placements</Link>
    <Link to="/admin/addstudentresearchs">Research</Link>
    <Link to="/admin/addsports">Sports</Link>
  </nav>
);

