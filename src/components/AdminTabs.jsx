import React, { Children } from "react";
import { Link, useLocation } from "react-router-dom";
import Accordion from "./Accordian";
import Faculty from "../pages/Faculty";

const AdminTabs = () => {
  const location = useLocation();

  const [active, setActive] = React.useState(false);
  const [tab, setTab] = React.useState('');
  const tabs = [
    { label: "Faculty" },
    { label: "Student" },
    { label: "Institute" },
    { label: "Department" },
  ];

  return (
    <nav className="mt-4 px-4">
      <div className="flex flex-wrap justify-center gap-3 bg-blue-50 border border-blue-200 rounded-xl p-4 shadow">
        {tabs.map(({ label }) => (
          <button 
            key={label}
            onClick={() => {
                setTab(label);
                setActive((p) => !p)
            }}
            
          >
            <div className={`px-4 py-2 bg-white text-black rounded-full ${active && "bg-blue-600" } hover:bg-blue-300 transition-colors duration-200`}>
              {label}
            </div>
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-3 mt-4">
      {tab === "Faculty" && (
        <Accordion isOpen={true}>
        <Link to="/admin/addfaculty">Add Profile</Link>
        <Link to="/admin/addfacultyresearch">Reaserch Paper publication</Link>
        <Link to="/admin/addawards">Awards and Recognitions</Link>
        <Link to="/admin/adddevlopmentprograms"> Development Programs</Link>
        <Link to="/admin/addpatents">Patent Published</Link>
        <Link to="/admin/addawards">Patent granted</Link>
        <Link to="/admin/addawards">Professional Certificate Earned</Link>
        <Link to="/admin/addawards">Acadmic Qualifications Discipline</Link>
        <Link to="/admin/addawards">phD Supervision / Guidence</Link>
        <Link to="/admin/addawards">Membership in Professinal Bodies</Link>
        <Link to="/admin/addawards">Research Projects Guided</Link>
        <Link to="/admin/addawards">Invited talks/ Resource person</Link>
        <Link to="/admin/addawards">Books / Chapters Authored</Link>
      </Accordion> // Render FacultyNavBar when "Faculty" tab is selected}
      )}
      {tab === "Student" && (
        <Accordion label="Student" isOpen={true}>
          <Link to="/admin/addstudents">Profile</Link>
          <Link to="/admin/addstudentcertificates">Certification</Link>
          <Link to="/admin/addhackathons">Technical/Non-Technical</Link>
          <Link to="/admin/addinternships">Placement</Link>
          <Link to="/admin/addplacements">Internship</Link>
          <Link to="/admin/addstudentresearchs">Research Paper</Link>
          <Link to="/admin/addsports">Sports</Link>
          <Link to="/admin/addsports">Extra Curricular</Link>
          <Link to="/admin/addsports">Project Work/ Capstone Projects</Link>
          <Link to="/admin/addsports">Startups/ Entrepreneurial Ventures</Link>
          <Link to="/admin/addsports">Hackathons / Innovation Challeges</Link>
          <Link to="/admin/addsports">Higher Studies</Link>
          <Link to="/admin/addsports">Professional Membership</Link>
        </Accordion>
      )}

      {tab === "Institute" && (
        <Accordion label="Institute" isOpen={true}>
          <Link to="/admin/addawards">Add Awards</Link>
          <Link to="/admin/addconferences">Add Conferences</Link>
          <Link to="/admin/adddevlopmentprograms">Add Development Programs</Link>
          <Link to="/admin/addpatents">Add Patents</Link>
          <Link to="/admin/addfacultyresearch">Add Faculty Research</Link>
          </Accordion>)}

      {tab === "Department" && (
        <Accordion label="Department" isOpen={true}>
          <Link to="/admin/addawards">Add Awards</Link>
          <Link to="/admin/addconferences">Add Conferences</Link>
          <Link to="/admin/adddevlopmentprograms">Add Development Programs</Link>
          <Link to="/admin/addpatents">Add Patents</Link>
          <Link to="/admin/addfacultyresearch">Add Faculty Research</Link>
        </Accordion>
      )}
      </div>
    </nav>
  );
};

export default AdminTabs;