import React from 'react';
import DataTable from 'react-data-table-component';

// Columns
const columns = [
  { name: 'ID', selector: row => row.Id, sortable: true, width: '70px' },
  { name: 'Faculty Name', selector: row => row.Faculty_Name, sortable: true },
  { name: 'Program Name', selector: row => row.Program_Name, wrap: true },
  { name: 'Organized By', selector: row => row.Organized_By },
  { name: 'Start Date', selector: row => row.Start_Date },
  { name: 'End Date', selector: row => row.End_Date },
  { name: 'Program Type', selector: row => row.Program_Type },
  { name: 'Mode', selector: row => row.Mode },
  { name: 'Location', selector: row => row.Location },
  { name: 'Duration Days', selector: row => row.Duration_Days, right: true },
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
          onClick={() => alert(`Viewing program ${row.Id}`)}
          className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded"
        >
          View
        </button>
        <button
          onClick={() => alert(`Editing program ${row.Id}`)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => alert(`Deleting program ${row.Id}`)}
          className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded"
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
    Faculty_Name: 'Dr. Ajay Sahani',
    Program_Name: 'FDP on Artificial Intelligence',
    Organized_By: 'IIT Bombay',
    Start_Date: '2024-05-10',
    End_Date: '2024-05-14',
    Program_Type: 'Faculty Development Program',
    Mode: 'Online',
    Location: 'Mumbai',
    Duration_Days: 5,
    Certificate_Link: 'https://example.com/certificates/fdp-ajay.pdf',
  },
  {
    Id: 2,
    Faculty_Name: 'Prof. Riya Sharma',
    Program_Name: 'Workshop on Quantum Computing',
    Organized_By: 'IIT Delhi',
    Start_Date: '2023-11-01',
    End_Date: '2023-11-03',
    Program_Type: 'Workshop',
    Mode: 'Offline',
    Location: 'Delhi',
    Duration_Days: 3,
    Certificate_Link: 'https://example.com/certificates/workshop-riya.pdf',
  },
  {
    Id: 3,
    Faculty_Name: 'Dr. Vikram Patel',
    Program_Name: 'STTP on Machine Learning',
    Organized_By: 'NIT Trichy',
    Start_Date: '2023-07-15',
    End_Date: '2023-07-20',
    Program_Type: 'Short Term Training Program',
    Mode: 'Hybrid',
    Location: 'Trichy',
    Duration_Days: 6,
    Certificate_Link: 'https://example.com/certificates/sttp-vikram.pdf',
  },
];

const DevelopmentProgramTable = () => {
  return (
    <div className="p-4">
      <DataTable
        title="Faculty Programs Attended"
        columns={columns}
        data={data}
        pagination
        striped
        highlightOnHover
        responsive
      />
    </div>
  );
};

export default DevelopmentProgramTable;
