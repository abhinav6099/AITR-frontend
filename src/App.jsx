import { useState } from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import AddFaculty from "./AddDataForms/FacultyData";
import AddAwards from "./AddDataForms/AwardsData";

import HomePage from "./pages/HomePage";
import Admin from "./pages/Admin";

import Navbar from './components/Navbar'
import NavbarHeader from './components/NavbarHeader'


import Accordian from './components/Accordian'
import AddConferenceData from './AddDataForms/AddConferenceData'
import AddDevelopmentProgramData from './AddDataForms/AddDevelopmentProgramData'
import AddPatentData from './AddDataForms/AddPatentData'
import AddFacultyResearchData from './AddDataForms/AddFacultyResearchData'
import NotFound404 from './pages/NotFound404'
import AddStudentData from './AddDataForms/AddStudentData'
import AddStudentCertificateData from './AddDataForms/AddStudentCertificateData'
import AddHackathonsData from './AddDataForms/AddHackathonsData'
import AddInternshipData from './AddDataForms/AddInternshipData'
import AddPlacementData from './AddDataForms/AddPlacementData'
import AddStudentResearchData from './AddDataForms/AddStudentResearchData'
import AddSportsData from './AddDataForms/AddSportsData'


import Faculty from './pages/Faculty'
import Student from './pages/Student'
import Institute from './pages/Institute'
import Department from './pages/Department'



function App() {
  return (
    <>
    <BrowserRouter>
      <NavbarHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Admin />}/>
        
        <Route path="/faculty" element={<Faculty />}/>
        <Route path="/student" element={<Student/>}/>
        
        <Route path="/institute" element={<Institute />}/>
        <Route path="/department" element={<Department />}/>
          <Route path="addfaculty" element={<AddFaculty />} />
          <Route path="addawards" element={<AddAwards />} />
          <Route path="addconferences" element={<AddConferenceData />} />
          <Route path="adddevlopmentprograms" element={<AddDevelopmentProgramData />} />
          <Route path="addpatents" element={<AddPatentData />} />
          <Route path="addfacultyresearch" element={<AddFacultyResearchData />} />
          <Route path="addstudents" element={<AddStudentData />} />
          <Route path="addstudentcertificates" element={<AddStudentCertificateData />} />
          <Route path="addhackathons" element={<AddHackathonsData />} />
          <Route path="addinternships" element={<AddInternshipData />} />
          <Route path="addplacements" element={<AddPlacementData />} />
          <Route path="addstudentresearchs" element={<AddStudentResearchData />} />
          <Route path="addsports" element={<AddSportsData />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
    </>

  )
}

export default App;
