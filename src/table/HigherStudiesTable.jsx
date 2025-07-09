import React from 'react';
import DataTable from 'react-data-table-component';



const columns = [
  { name: 'Course Name', selector: row => row.courseName },
  { name: 'Scholarship', selector: row => row.scholarship || 'N/A' },
  { name: 'Institute', selector: row => row.instituteName },
  { name: 'City', selector: row => row.city },
  { name: 'Country', selector: row => row.country },
  { name: 'Duration (months)', selector: row => row.duration },
  { name: 'Admission Year', selector: row => row.admissionYear },
  { name: 'Admission Date', selector: row => row.admissionDate },
  {
    name: 'Actions',
    cell: row => (
      <div className="flex gap-2">
        <button onClick={() => alert(`Viewing ${row.id}`)} className="bg-blue-500 text-white px-2 py-1 text-xs rounded">View</button>
        <button onClick={() => alert(`Editing ${row.id}`)} className="bg-yellow-500 text-white px-2 py-1 text-xs rounded">Edit</button>
        <button onClick={() => alert(`Deleting ${row.id}`)} className="bg-red-500 text-white px-2 py-1 text-xs rounded">Delete</button>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

const dummyData = [
  {
    id: 1,
    studentName: "Riya Sharma",
    enrollmentNumber: "ENR2023CS101",
    courseName: "MS in Computer Science",
    scholarship: "DAAD",
    instituteName: "Technical University of Munich",
    city: "Munich",
    country: "Germany",
    duration: "24",
    admissionYear: "2024",
    admissionDate: "2024-09-01",
  },
  {
    id: 2,
    studentName: "Aman Verma",
    enrollmentNumber: "ENR2023IT122",
    courseName: "MBA in Finance",
    scholarship: "",
    instituteName: "London Business School",
    city: "London",
    country: "UK",
    duration: "18",
    admissionYear: "2023",
    admissionDate: "2023-10-15",
  },
];

const HigherStudiesTable = ({data}) => {
  return (
    <div className="p-4 overflow-x-auto">
      <DataTable
        title="Student Higher Studies Records"
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

export default HigherStudiesTable;
