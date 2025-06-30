import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  { name: 'ID', selector: row => row.Id, sortable: true, width: '70px' },
  { name: 'Student Name', selector: row => row.Student_Name, sortable: true },
  { name: 'Title', selector: row => row.Title, wrap: true },
  { name: 'Publication Date', selector: row => row.Publication_Date },
  { name: 'Journal Name', selector: row => row.Journal_Name },
  { name: 'Co-Authors', selector: row => row.Co_Authors, wrap: true },
  {
    name: 'Actions',
    cell: row => (
      <div className="flex gap-2">
        <button onClick={() => alert(`Viewing ${row.Title}`)} className="bg-blue-500 text-white text-xs px-2 py-1 rounded">View</button>
        <button onClick={() => alert(`Editing ${row.Id}`)} className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">Edit</button>
        <button onClick={() => alert(`Deleting ${row.Id}`)} className="bg-red-500 text-white text-xs px-2 py-1 rounded">Delete</button>
      </div>
    ),
    button: true,
  },
];

const data = [
  {
    Id: 1,
    Student_Name: 'Ankita Sharma',
    Title: 'Deep Learning Applications in Agriculture',
    Publication_Date: '2023-09-15',
    Journal_Name: 'International Journal of AI Research',
    Co_Authors: 'Dr. Vikas Gupta, Neha Verma',
  },
  {
    Id: 2,
    Student_Name: 'Rohit Mehra',
    Title: 'A Review on Blockchain in Education',
    Publication_Date: '2024-01-10',
    Journal_Name: 'Journal of Distributed Systems',
    Co_Authors: 'Dr. Anjali Rao',
  },
  {
    Id: 3,
    Student_Name: 'Kavya Rathi',
    Title: 'Low-Power IoT Architectures for Smart Cities',
    Publication_Date: '2023-12-22',
    Journal_Name: 'IEEE IoT Journal',
    Co_Authors: 'Dr. Abhay Singh, Ravi Yadav',
  },
];

const StudentResearchPaper = () => {
  return (
    <div className="p-4 overflow-x-auto">
      <DataTable
        title="Student Research Publications"
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

export default StudentResearchPaper;
