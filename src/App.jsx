import { useState } from "react";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import AddFaculty from "./AddDataForms/FacultyData";
import AddAwards from "./AddDataForms/AwardsData";
import PatentGrantedForm from "./Forms/FacultyForms/PatentGrantedForm";
import ProfessionalCertificationsEarned from "./Forms/FacultyForms/ProfessionalCertificationsEarned";
import AcademicQualificationForm from "./Forms/FacultyForms/AcedmicQualificationDiscipline";
import PhDSupervision from "./Forms/FacultyForms/PhDSupervision";
import MembershipProfessionalBodies from "./Forms/FacultyForms/MembershipProfessionalBodies";
import ResearchProjectsGuidedForm from "./Forms/FacultyForms/ResearchProjectsGuided";
import InvitedTalksForm from "./Forms/FacultyForms/InvitedTalks";
import BooksChapteresAuthored from "./Forms/FacultyForms/BooksChapteresAuthored";
import ResearchPaperPublication from "./Forms/FacultyForms/ResearchPaper";

//institute forms

import Counsultancy from "./Forms/InstituteForms/Counsultancy";
import EventGrant from "./Forms/InstituteForms/EventGrant";
import RnDForms from "./Forms/InstituteForms/R&DForms";
import MouForm from "./Forms/InstituteForms/MousForm";
import InstituteDocumentForm from "./Forms/InstituteForms/InstituteDocuments";

// student forms import




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
import Mous from "./Forms/Department/Mous";



function App() {
  return (
    <>
    <BrowserRouter>
      <NavbarHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/faculty" element={<Faculty />}/>
        <Route path="/student" element={<Student/>}/>
        
        <Route path="/institute" element={<Institute />}/>
        <Route path="/department" element={<Department />}/>

        <Route path="/admin" element={<Admin />} >

        // faculty routing
          <Route path="faculty-addfaculty" element={<AddFaculty />} />
          <Route path="faculty-addawards" element={<AddAwards />} />
          <Route path="faculty-addconferences" element={<AddConferenceData />} />
          <Route path="faculty-adddevlopmentprograms" element={<AddDevelopmentProgramData />} />
          <Route path="faculty-addpatents" element={<AddPatentData />} />
          <Route path="faculty-patentsgranted" element={<PatentGrantedForm />} />
          <Route path="faculty-professioanlCertificate" element={<ProfessionalCertificationsEarned />} />
          <Route path="faculty-phD-supervision" element={<PhDSupervision />} />

          // problem with this form
          <Route path="faculty-research-projects-guided" element={<ResearchProjectsGuidedForm />} />

          <Route path="faculty-books-chapterd-authored" element={<BooksChapteresAuthored />} />
          <Route path="faculty-invited-talks" element={<InvitedTalksForm />} />
          <Route path="faculty-academic-qualification-discipline" element={<AcademicQualificationForm />} />
          <Route path="faculty-membership-professional-bodies" element={<MembershipProfessionalBodies />} />
          <Route path="faculty-research-paper-publication" element={<ResearchPaperPublication />} />
          {/* institute routing */}

          // studnets routing 
          <Route path="addfacultyresearch" element={<AddFacultyResearchData />} />
          <Route path="addstudents" e  lement={<AddStudentData />} />
          <Route path="addstudentcertificates" element={<AddStudentCertificateData />} />
          <Route path="addhackathons" element={<AddHackathonsData />} />
          <Route path="addinternships" element={<AddInternshipData />} />
          <Route path="addplacements" element={<AddPlacementData />} />
          <Route path="addstudentresearchs" element={<AddStudentResearchData />} />
          <Route path="addsports" element={<AddSportsData />} />
        </Route>
        <Route path='*' element={<NotFound404 />} />


        // institute routing
        <Route path="/instituteTabel" element={<Institute />} />
        <Route path="add-institute-counsultancy" element={<Counsultancy />} />
        <Route path="add-institute-eventgrant" element={<EventGrant />} />
        <Route path="add-institute-documents" element={<InstituteDocumentForm />} />
        <Route path="add-institue-mous" element={<MouForm />} />
        <Route path="add-institute-r&dforms" element={<RnDForms />} />
      </Routes>
    </BrowserRouter>
    </>

  )
}

export default App;
