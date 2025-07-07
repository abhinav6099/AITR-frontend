import React from 'react'
import SearchBar from '../components/SearchBar'

import InputBox from '../components/InputBox'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import FacultyTable from '../table/FacultyTable'
import InternshipTable from '../table/InternshipTable'
import { Outlet } from 'react-router-dom'
import InstituteTabs from '../components/InstituteTabs'
function Institute() {


    return (
    <>
    <div>
      <FacultyNavbar />
      <div className="p-4">
      <SearchBar placeholder="Search Faculty" />
      <InstituteTabs/>
        <Outlet /> {/* Renders AddFaculty, AddAwards, etc. */}
      </div>

    </div>

    </>
  );
}


const FacultyNavbar = () => (
  <nav className="p-2 bg-blue-100 flex justify-center gap-6">
    <Link to="/instituteTabel">Institute Tabel</Link>
  </nav>
);




export default Institute