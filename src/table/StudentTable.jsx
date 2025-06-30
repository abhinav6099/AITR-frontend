import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  { name: 'ID', selector: row => row.Id, sortable: true, width: '70px' },
  { name: 'Student Name', selector: row => row.Student_Name, sortable: true },
  { name: 'Enrollment No.', selector: row => row.Enrollment_Number },
  { name: 'Activity Type', selector: row => row.Activity_Type },
  { name: 'Title', selector: row => row.Title, wrap: true },
  { name: 'Organization', selector: row => row.Organization },
  { name: 'Date', selector: row => row.Date },
  { name: 'Description', selector: row => row.Description, wrap: true },
  {
    name: 'Certificate',
    cell: row => (
      <a
        href={row.Certificate_Link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline text-sm"
      >
        View
      </a>
    ),
  },
  {
    name: 'Actions',
    cell: row => (
      <div className="flex gap-2">
        <button
          onClick={() => alert(`Viewing ${row.Title}`)}
          className="bg-blue-500 text-white text-xs px-3 py-1 rounded hover:bg-blue-600"
        >
          View
        </button>
        <button
          onClick={() => alert(`Editing ${row.Title}`)}
          className="bg-yellow-500 text-white text-xs px-3 py-1 rounded hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={() => alert(`Deleting ${row.Title}`)}
          className="bg-red-500 text-white text-xs px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

// Sample Data
const data = [
  {
    Id: 1,
    Student_Name: 'Aryan Gupta',
    Enrollment_Number: 'ENR2023CS102',
    Activity_Type: 'certificate',
    Title: 'Full Stack Web Development',
    Organization: 'Coursera',
    Date: '2024-04-10',
    Description: 'Completed certified online training for MERN Stack.',
    Certificate_Link: 'https://example.com/aryan-certificate.pdf',
  },
  {
    Id: 2,
    Student_Name: 'Sneha Verma',
    Enrollment_Number: 'ENR2023CS198',
    Activity_Type: 'hackathon',
    Title: 'Smart India Hackathon 2024',
    Organization: 'Govt. of India',
    Date: '2024-02-28',
    Description: 'Won 2nd prize in a national-level hackathon.',
    Certificate_Link: 'https://example.com/sneha-hackathon.pdf',
  },
  {
    Id: 3,
    Student_Name: 'Rajat Malhotra',
    Enrollment_Number: 'ENR2023EE215',
    Activity_Type: 'placement',
    Title: 'Placed at TCS',
    Organization: 'Tata Consultancy Services',
    Date: '2024-06-15',
    Description: 'Selected as Assistant System Engineer.',
    Certificate_Link: 'https://example.com/rajat-offer.pdf',
  },
  {
    Id: 4,
    Student_Name: 'Nikita Sharma',
    Enrollment_Number: 'ENR2023ME178',
    Activity_Type: 'internship',
    Title: 'Summer Intern',
    Organization: 'BHEL',
    Date: '2023-07-01',
    Description: 'Worked on turbine blade design.',
    Certificate_Link: 'https://example.com/nikita-intern.pdf',
  },
  {
    Id: 5,
    Student_Name: 'Amit Yadav',
    Enrollment_Number: 'ENR2023CS067',
    Activity_Type: 'researchpaper',
    Title: 'Machine Learning in Agriculture',
    Organization: 'IJRTE',
    Date: '2024-01-10',
    Description: 'Published in Scopus-indexed journal.',
    Certificate_Link: 'https://example.com/amit-paper.pdf',
  },
  {
    Id: 6,
    Student_Name: 'Pooja Singh',
    Enrollment_Number: 'ENR2023PE044',
    Activity_Type: 'sports',
    Title: 'Inter-College Volleyball Championship',
    Organization: 'University Sports Cell',
    Date: '2023-10-05',
    Description: 'Won gold medal in volleyball event.',
    Certificate_Link: 'https://example.com/pooja-sports.pdf',
  },
];

const StudentTable = () => {
  return (
    <div className="p-4 overflow-x-auto">
      <DataTable
        title="Student Activities"
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

export default StudentTable;
