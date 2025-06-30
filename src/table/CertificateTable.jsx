import React from 'react';
import DataTable from 'react-data-table-component';
import '../components/scroll.css' // we'll define custom styles here

const columns = [
  { name: 'ID', selector: row => row.Id, sortable: true, width: '70px' },
  { name: 'Student Name', selector: row => row.Student_Name, sortable: true },
  { name: 'Enrollment Number', selector: row => row.Enrollment_Number },
  { name: 'Certificate Name', selector: row => row.Certificate_Name, wrap: true },
  { name: 'Certificate Type', selector: row => row.Certificate_Type },
  { name: 'Issued By', selector: row => row.Issued_By },
  { name: 'Issue Date', selector: row => row.Issue_Date },
  { name: 'Validity Period', selector: row => row.Validity_Period },
  { name: 'Grade Or Score', selector: row => row.Grade_Or_Score },
  { name: 'Certificate Description', selector: row => row.Certificate_Description, wrap: true },
  { name: 'Mode Of Training', selector: row => row.Mode_Of_Training },
  { name: 'Related Course Or Program', selector: row => row.Related_Course_Or_Program },
  { name: 'Certificate Status', selector: row => row.Certificate_Status },
  { name: 'Verified', selector: row => row.Verified },
  {
    name: 'Certificate Link',
    cell: row => (
      <a href={row.Certificate_Link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm">
        View
      </a>
    ),
  },
  {
    name: 'Actions',
    cell: row => (
      <div className="flex gap-2">
        <button onClick={() => alert(`Viewing certificate ${row.Id}`)} className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded">View</button>
        <button onClick={() => alert(`Editing certificate ${row.Id}`)} className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-3 py-1 rounded">Edit</button>
        <button onClick={() => alert(`Deleting certificate ${row.Id}`)} className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded">Delete</button>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

const data = [
  {
    Id: 1,
    Student_Name: 'Ananya Mehta',
    Enrollment_Number: 'ENR2023CS101',
    Certificate_Name: 'Python for Data Science',
    Certificate_Type: 'Online Course',
    Issued_By: 'Coursera',
    Issue_Date: '2023-06-10',
    Validity_Period: 'Lifetime',
    Grade_Or_Score: '92%',
    Certificate_Description: 'Completed Python and applied it in data science scenarios.',
    Mode_Of_Training: 'Online',
    Related_Course_Or_Program: 'Data Science Basics',
    Certificate_Status: 'Active',
    Verified: 'Yes',
    Certificate_Link: 'https://example.com/certificates/ananya-python.pdf',
  },
  {
    Id: 2,
    Student_Name: 'Rohit Sharma',
    Enrollment_Number: 'ENR2023EE215',
    Certificate_Name: 'Embedded Systems Workshop',
    Certificate_Type: 'Workshop',
    Issued_By: 'NPTEL',
    Issue_Date: '2023-04-22',
    Validity_Period: '5 Years',
    Grade_Or_Score: 'A+',
    Certificate_Description: 'Hands-on training in embedded system design.',
    Mode_Of_Training: 'Offline',
    Related_Course_Or_Program: 'Embedded Systems',
    Certificate_Status: 'Active',
    Verified: 'Yes',
    Certificate_Link: 'https://example.com/certificates/rohit-embedded.pdf',
  },
  {
    Id: 3,
    Student_Name: 'Kavya Rathi',
    Enrollment_Number: 'ENR2023ME087',
    Certificate_Name: 'Autodesk CAD Certification',
    Certificate_Type: 'Certification',
    Issued_By: 'Autodesk',
    Issue_Date: '2022-12-01',
    Validity_Period: '10 Years',
    Grade_Or_Score: 'Certified',
    Certificate_Description: 'Autodesk Certified User (ACU) in AutoCAD.',
    Mode_Of_Training: 'Hybrid',
    Related_Course_Or_Program: 'Mechanical Design',
    Certificate_Status: 'Expired',
    Verified: 'No',
    Certificate_Link: 'https://example.com/certificates/kavya-cad.pdf',
  },
];

const StudentCertificatesTable = () => {
  return (
    <div className="table-scroll-container">
      <DataTable
        title="Student Certificates"
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

export default StudentCertificatesTable;
