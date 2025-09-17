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
import ResearchPaper from "./Forms/FacultyForms/ResearchPaper";

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
import AddTechnicalNonTechnicalCompetition from "./AddDataForms/AddTechnicalNonTechnicalCompetition";
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
import ExtraCurricular from './AddDataForms/AddExtraCurricular';
import CapstoneProjects from './AddDataForms/AddCapstoneProjects';
import Startups from './AddDataForms/AddStartups';
import HackathonsData from "./AddDataForms/AddHackathonsData";
import HigherStudies from "./AddDataForms/AddHigherStudies";
// import AddProfessionalMembership from './AddDataForms/AddProfessionalMembership';

import TechnicalNonTechnicalCompetition from "./Forms/StudentForms/TechnicalNonTechnicalCompetition";
import AddProfessionalMembership from './AddDataForms/AddProfessionalMembership'

import Faculty from './pages/Faculty'
import Student from './pages/Student'
import Institute from './pages/Institute'
import Department from './pages/Department'
// import AddHigherStudies from "./AddDataForms/AddHigherStudies";
// import AddProfessionalMembership from "./AddDataForms/AddProfessionalMembership";

//Admin Department
import MOU from './Forms/Department/Mous'
import ConsultancyProject from "./Forms/Department/ConsultancyProject";
import RDInititatives from "./Forms/Department/RD_Inititatives";
import EventGrantReceived from "./Forms/Department/EventGrantReceived";
import EventOrganized from "./Forms/InstituteForms/EventOrganized";
import StudentTable from "./table/StudentTable";
import ExcelUploader from "./components/ExelUploader";


function App() {
  // todo: add some class name for to fix some notification bar
  return (

    <>
      <BrowserRouter>
        <NavbarHeader />
        <Navbar />
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/student" element={<Student />} />

          <Route path="/institute" element={<Institute />} />
          <Route path="/department" element={<Department />} />

          <Route path="/admin" element={<Admin />} >

        // faculty routing
            <Route path="faculty-addfaculty" element={<AddFaculty />} />
            <Route path="faculty-addawards" element={<AddAwards />} />
            <Route path="faculty-addconferences" element={<AddConferenceData />} />
            <Route path="faculty-adddevlopmentprograms" element={<AddDevelopmentProgramData />} />
            <Route path="faculty-addpatents" element={<AddPatentData />} />
            <Route path="faculty-patentsgranted" element={<PatentGrantedForm />} />
            <Route path="faculty-professional-certificate" element={<ProfessionalCertificationsEarned />} />
            <Route path="faculty-phD-supervision" element={<PhDSupervision />} />

          // problem with this form
            <Route path="faculty-research-projects-guided" element={<ResearchProjectsGuidedForm />} />
          

            <Route path="faculty-books-chapterd-authored" element={<BooksChapteresAuthored />} />
            <Route path="faculty-invited-talks" element={<InvitedTalksForm />} />
            <Route path="faculty-academic-qualification-discipline" element={<AcademicQualificationForm />} />
            <Route path="faculty-membership-professional-bodies" element={<MembershipProfessionalBodies />} />
            <Route path="faculty-research-paper-publication" element={<ResearchPaper />} />
            {/* institute routing */}

          // studnets routing
            <Route path="addfacultyresearch" element={<AddFacultyResearchData />} />
            <Route path="/admin/addstudents" element={<AddStudentData />} />
            <Route path="/admin/addstudentcertificates" element={<AddStudentCertificateData />} />
            <Route path="/admin/addhackathons" element={<AddHackathonsData />} />
            <Route path="/admin/addplacements" element={<AddPlacementData />} />
            <Route path="/admin/addinternships" element={<AddInternshipData />} />
            <Route path="/admin/addstudentresearchs" element={<AddStudentResearchData />} />
            <Route path="/admin/addsports" element={<AddSportsData />} />
            <Route path="/admin/extracurricular" element={<ExtraCurricular />} />
            <Route path="/admin/capstone-projects" element={<CapstoneProjects />} />
            <Route path="/admin/technical-nontechnical" element={<AddTechnicalNonTechnicalCompetition />} />
            <Route path="/admin/startups" element={<Startups />} />
            <Route path="/admin/hackathon-challenges" element={<HackathonsData />} />
            <Route path="/admin/higher-studies" element={<HigherStudies />} />
            <Route path="/admin/professional-membership" element={<AddProfessionalMembership />} />

            // institute routing

            <Route path="/admin/addinstitue-mous" element={<MouForm />} />
            <Route path="/admin/addinstitute-counsultancy" element={<Counsultancy />} />
            <Route path="/admin/addinstitute-eventgrant" element={<EventGrant />} />
            <Route path="/admin/addinstitute-documents" element={<InstituteDocumentForm />} />
            <Route path="/admin/addinstitute-r&dforms" element={<RnDForms />} />
            <Route path="/admin/addinstitute-eventorganized" element={<EventOrganized />} />
            {/* Admin Department */}
            <Route path='/admin/addmou' element={<MOU />} />
            <Route path="/admin/addconsultancy-project" element={<ConsultancyProject />} />
            <Route path="/admin/addrd-inititatives" element={<RDInititatives />} />
            <Route path="/admin/addevent-grant-received" element={<EventGrantReceived />} />
          </Route>
          <Route path='*' element={<NotFound404 />} />
        </Routes>

      </BrowserRouter>
    </>

  )
}

export default App;
