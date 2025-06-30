import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  { name: 'ID', selector: row => row.Id, sortable: true, width: '60px' },
  { name: 'Student Name', selector: row => row.Student_Name },
  { name: 'Enrollment Number', selector: row => row.Enrollment_Number },
  { name: 'Company Name', selector: row => row.Company_Name },
  { name: 'Role', selector: row => row.Role },
  { name: 'Internship Type', selector: row => row.Internship_Type },
  { name: 'Stipend', selector: row => row.Stipend },
  { name: 'Duration', selector: row => row.Duration },
  { name: 'Department', selector: row => row.Department },
  { name: 'Mentor Name', selector: row => row.Mentor_Name },
  { name: 'Mentor Email', selector: row => row.Mentor_Email },
  { name: 'Technologies Used', selector: row => row.Technologies_Used },
  { name: 'Project Name', selector: row => row.Project_Name },
  { name: 'Project Description', selector: row => row.Project_Description, wrap: true },
  { name: 'Skills Gained', selector: row => row.Skills_Gained },
  { name: 'Company Location', selector: row => row.Company_Location },
  { name: 'Internship Status', selector: row => row.Internship_Status },
  { name: 'Start Date', selector: row => row.Start_Date },
  { name: 'End Date', selector: row => row.End_Date },
  {
    name: 'Offer Letter',
    cell: row => (
      <a href={row.Offer_Letter_Link} target="_blank" rel="noreferrer" className="text-blue-600 underline text-sm">
        View
      </a>
    ),
  },
  {
    name: 'Experience Letter',
    cell: row => (
      <a href={row.Experience_Letter_Link} target="_blank" rel="noreferrer" className="text-blue-600 underline text-sm">
        View
      </a>
    ),
  },
  {
    name: 'Certificate',
    cell: row => (
      <a href={row.Certificate_Link} target="_blank" rel="noreferrer" className="text-blue-600 underline text-sm">
        View
      </a>
    ),
  },
  {
    name: 'Actions',
    cell: row => (
      <div className="flex gap-2">
        <button onClick={() => alert(`Viewing internship ${row.Id}`)} className="bg-blue-500 text-white text-xs px-2 py-1 rounded">View</button>
        <button onClick={() => alert(`Editing internship ${row.Id}`)} className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">Edit</button>
        <button onClick={() => alert(`Deleting internship ${row.Id}`)} className="bg-red-500 text-white text-xs px-2 py-1 rounded">Delete</button>
      </div>
    ),
    button: true,
  },
];

const data = [
  {
    Id: 1,
    Student_Name: 'Ananya Gupta',
    Enrollment_Number: 'ENR2023CS101',
    Company_Name: 'Tata Consultancy Services',
    Role: 'Frontend Developer Intern',
    Internship_Type: 'Full-Time',
    Stipend: '₹10,000',
    Duration: '2 Months',
    Department: 'CSE',
    Mentor_Name: 'Mr. Rajeev Mehta',
    Mentor_Email: 'rajeev.mehta@tcs.com',
    Technologies_Used: 'React, Tailwind, Git',
    Project_Name: 'TCS Client Dashboard',
    Project_Description: 'Built a responsive dashboard for internal use with live APIs.',
    Skills_Gained: 'React, Git, Responsive Design',
    Company_Location: 'Mumbai',
    Internship_Status: 'Completed',
    Start_Date: '2024-05-01',
    End_Date: '2024-06-30',
    Offer_Letter_Link: 'https://example.com/internship/ananya-offer.pdf',
    Experience_Letter_Link: 'https://example.com/internship/ananya-experience.pdf',
    Certificate_Link: 'https://example.com/internship/ananya-certificate.pdf',
  },
  {
    Id: 2,
    Student_Name: 'Rohit Sharma',
    Enrollment_Number: 'ENR2023IT222',
    Company_Name: 'Microsoft India',
    Role: 'Cloud Intern',
    Internship_Type: 'Remote',
    Stipend: '₹15,000',
    Duration: '3 Months',
    Department: 'IT',
    Mentor_Name: 'Ms. Sneha Verma',
    Mentor_Email: 'sneha.verma@microsoft.com',
    Technologies_Used: 'Azure, Python, APIs',
    Project_Name: 'Azure Automation Bot',
    Project_Description: 'Created bots to automate deployment pipelines using Azure DevOps.',
    Skills_Gained: 'Cloud Deployment, Automation',
    Company_Location: 'Bangalore',
    Internship_Status: 'Completed',
    Start_Date: '2024-04-01',
    End_Date: '2024-06-30',
    Offer_Letter_Link: 'https://example.com/internship/rohit-offer.pdf',
    Experience_Letter_Link: 'https://example.com/internship/rohit-experience.pdf',
    Certificate_Link: 'https://example.com/internship/rohit-certificate.pdf',
  },
  {
    Id: 3,
    Student_Name: 'Kavya Rathi',
    Enrollment_Number: 'ENR2023ECE056',
    Company_Name: 'DRDO',
    Role: 'Hardware Design Intern',
    Internship_Type: 'Offline',
    Stipend: 'Unpaid',
    Duration: '1.5 Months',
    Department: 'ECE',
    Mentor_Name: 'Dr. Vikram Patel',
    Mentor_Email: 'vikram.patel@drdo.gov.in',
    Technologies_Used: 'VHDL, FPGA, PCB Design',
    Project_Name: 'Missile Tracking Hardware',
    Project_Description: 'Worked on PCB layout for low-latency tracking system.',
    Skills_Gained: 'Hardware Design, PCB, Defense Projects',
    Company_Location: 'Hyderabad',
    Internship_Status: 'Ongoing',
    Start_Date: '2024-06-10',
    End_Date: '2024-07-25',
    Offer_Letter_Link: 'https://example.com/internship/kavya-offer.pdf',
    Experience_Letter_Link: '',
    Certificate_Link: '',
  },
];

const InternshipTable = () => {
  return (
    <div className="p-4 overflow-x-auto">
      <DataTable
        title="Student Internship Records"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        striped
        responsive
        fixedHeader
        fixedHeaderScrollHeight="600px"
      />
    </div>
  );
};

export default InternshipTable;
