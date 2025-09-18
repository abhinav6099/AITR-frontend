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
      <div className="flex flex-col items-center justify-center gap-0.5">
        {/* <button onClick={() => alert(`Viewing certificate ${row.Id}`)} className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-4 py-1 rounded">View</button> */}
        <button onClick={() => alert(`Editing certificate ${row._Id}`)} className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-5 py-1 rounded">Edit</button>
        <button
          onClick={
            async () => {
              console.log(row._id)
              alert(`Deleting certificate ${row._id}`)
              const baseUrl = "http://localhost:3000";
              const url = "api/v1/students/higher-study"
              const response = await axios.delete(`${baseUrl}/${url}/${row._id}`);
              console.log(response.data.certificate);
            }
          } className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded">Delete</button>
      </div >
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
