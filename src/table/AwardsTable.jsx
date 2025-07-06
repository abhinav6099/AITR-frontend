import React from 'react';
import DataTable from 'react-data-table-component';

// Columns Definition
const columns = [
  { name: 'ID', selector: row => row.Id, sortable: true, width: '70px' },
  { name: 'Faculty Name', selector: row => row.Faculty_Name, sortable: true },
  { name: 'Award Name', selector: row => row.Award_Name, sortable: true },
  { name: 'Awarded By', selector: row => row.Awarded_By, sortable: true },
  { name: 'Award Date', selector: row => row.Award_Date, sortable: true },
  { name: 'Category', selector: row => row.Category },
  { name: 'Recognition Type', selector: row => row.Recognition_Type },
  { name: 'Event Name', selector: row => row.Event_Name },
  { name: 'Description', selector: row => row.Description, wrap: true },
  {
    name: 'Certificate Link',
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
    width: '150px',
    cell: row => (
      <div className="flex gap-2">
        <button
          onClick={() => alert(`Editing Award ${row.Id}`)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => alert(`Deleting Award ${row.Id}`)}
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
const awardsdata = [
  {
    Id: 1,
    Faculty_Name: 'Dr. Ajay Sahani',
    Award_Name: 'Best Researcher',
    Awarded_By: 'AICTE',
    Award_Date: '2023-11-15',
    Category: 'Research',
    Recognition_Type: 'National',
    Event_Name: 'AICTE National Conference',
    Description: 'Awarded for outstanding AI research contributions in education.',
    Certificate_Link: 'https://example.com/certificates/ajay-award.pdf',
  },
  {
    Id: 2,
    Faculty_Name: 'Prof. Riya Sharma',
    Award_Name: 'Innovative Teaching Award',
    Awarded_By: 'UGC',
    Award_Date: '2024-01-20',
    Category: 'Teaching',
    Recognition_Type: 'University',
    Event_Name: 'UGC Faculty Summit',
    Description: 'Recognized for adopting innovative online teaching methods.',
    Certificate_Link: 'https://example.com/certificates/riya-award.pdf',
  },
  {
    Id: 3,
    Faculty_Name: 'Dr. Vikram Patel',
    Award_Name: 'Excellence in Publication',
    Awarded_By: 'IEEE',
    Award_Date: '2022-09-12',
    Category: 'Publication',
    Recognition_Type: 'International',
    Event_Name: 'IEEE Global Meet',
    Description: 'Honored for highly cited journal publications.',
    Certificate_Link: 'https://example.com/certificates/vikram-award.pdf',
  },
];




// Component
const AwardTable = () => {
  return (
    <div className="p-4">
      <DataTable
        title="Faculty Awards"
        columns={columns}
        data={awardsdata}
        pagination
        highlightOnHover
        striped
        responsive
      />
    </div>
  );
};

export default AwardTable;
