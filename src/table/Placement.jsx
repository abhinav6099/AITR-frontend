import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  { name: 'ID', selector: row => row.Id, sortable: true, width: '70px' },
  { name: 'Student Name', selector: row => row.Student_Name, sortable: true },
  { name: 'Company Name', selector: row => row.Company_Name },
  { name: 'Job Role', selector: row => row.Job_Role },
  { name: 'Branch', selector: row => row.Branch },
  { name: 'Placement Type', selector: row => row.Placement_Type },
  { name: 'Package', selector: row => row.Package },
  { name: 'Joining Date', selector: row => row.Joining_Date },
  {
    name: 'Offer Letter',
    cell: row => (
      <a
        href={row.Offer_Letter_Pdf}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline text-sm"
      >
        View
      </a>
    ),
  },
  { name: 'Company Location', selector: row => row.Company_Location },
  { name: 'Interview Mode', selector: row => row.Interview_Mode },
  {
    name: 'Actions',
    cell: row => (
      <div className="flex gap-2">
        <button onClick={() => alert(`Viewing ${row.Id}`)} className="bg-blue-500 text-white px-2 py-1 text-xs rounded">View</button>
        <button onClick={() => alert(`Editing ${row.Id}`)} className="bg-yellow-500 text-white px-2 py-1 text-xs rounded">Edit</button>
        <button onClick={() => alert(`Deleting ${row.Id}`)} className="bg-red-500 text-white px-2 py-1 text-xs rounded">Delete</button>
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
    Student_Name: 'Aryan Mishra',
    Company_Name: 'Infosys',
    Job_Role: 'System Engineer',
    Branch: 'CSE',
    Placement_Type: 'On-Campus',
    Package: '₹4.5 LPA',
    Joining_Date: '2024-07-01',
    Offer_Letter_Pdf: 'https://example.com/placement/aryan-offer.pdf',
    Company_Location: 'Pune',
    Interview_Mode: 'Online',
  },
  {
    Id: 2,
    Student_Name: 'Sneha Rathi',
    Company_Name: 'Wipro',
    Job_Role: 'Project Engineer',
    Branch: 'IT',
    Placement_Type: 'Off-Campus',
    Package: '₹3.6 LPA',
    Joining_Date: '2024-08-10',
    Offer_Letter_Pdf: 'https://example.com/placement/sneha-offer.pdf',
    Company_Location: 'Bangalore',
    Interview_Mode: 'Offline',
  },
  {
    Id: 3,
    Student_Name: 'Rohit Jain',
    Company_Name: 'TCS',
    Job_Role: 'Assistant System Engineer',
    Branch: 'ECE',
    Placement_Type: 'On-Campus',
    Package: '₹4.2 LPA',
    Joining_Date: '2024-07-15',
    Offer_Letter_Pdf: 'https://example.com/placement/rohit-offer.pdf',
    Company_Location: 'Hyderabad',
    Interview_Mode: 'Hybrid',
  },
];

const PlacementTable = () => {
  return (
    <div className="p-4 overflow-x-auto">
      <DataTable
        title="Student Placement Records"
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

export default PlacementTable;
