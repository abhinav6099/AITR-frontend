import React from 'react';
import DataTable from 'react-data-table-component';

// Columns
const columns = [
  { name: 'ID', selector: row => row.Id, sortable: true, width: '70px' },
  { name: 'Faculty Name', selector: row => row.Faculty_Name, sortable: true },
  { name: 'Conference Name', selector: row => row.Conference_Name },
  { name: 'Paper Title', selector: row => row.Paper_Title, wrap: true },
  { name: 'Presentation Date', selector: row => row.Presentation_Date },
  { name: 'Conference Type', selector: row => row.Conference_Type },
  { name: 'Location', selector: row => row.Conference_Location },
  { name: 'Mode', selector: row => row.Conference_Mode },
  { name: 'Publication Status', selector: row => row.Publication_Status },
  { name: 'Journal Name', selector: row => row.Journal_Name },
  { name: 'ISSN Number', selector: row => row.Issn_Number },
  { name: 'Indexing', selector: row => row.Indexing },
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
          onClick={() => alert(`Viewing conference ${row.Id}`)}
          className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded"
        >
          View
        </button>
        <button
          onClick={() => alert(`Editing conference ${row.Id}`)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => alert(`Deleting conference ${row.Id}`)}
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

// Data
const data = [
  {
    Id: 1,
    Faculty_Name: 'Dr. Ajay Sahani',
    Conference_Name: 'ICAI 2024',
    Paper_Title: 'AI-Powered Learning Models for Rural Education',
    Presentation_Date: '2024-08-10',
    Conference_Type: 'International',
    Conference_Location: 'New Delhi',
    Conference_Mode: 'Offline',
    Publication_Status: 'Published',
    Journal_Name: 'International Journal of AI Research',
    Issn_Number: '2394-5678',
    Indexing: 'Scopus',
    Certificate_Link: 'https://example.com/certificates/ajay-conf.pdf',
  },
  {
    Id: 2,
    Faculty_Name: 'Prof. Riya Sharma',
    Conference_Name: 'ETCT 2023',
    Paper_Title: 'Trends in Cybersecurity for Higher Education',
    Presentation_Date: '2023-09-25',
    Conference_Type: 'National',
    Conference_Location: 'Mumbai',
    Conference_Mode: 'Online',
    Publication_Status: 'Under Review',
    Journal_Name: 'CyberTech Review',
    Issn_Number: '2231-1234',
    Indexing: 'UGC Care',
    Certificate_Link: 'https://example.com/certificates/riya-conf.pdf',
  },
  {
    Id: 3,
    Faculty_Name: 'Dr. Vikram Patel',
    Conference_Name: 'MLCon 2024',
    Paper_Title: 'Applying Deep Learning for Disease Prediction',
    Presentation_Date: '2024-03-12',
    Conference_Type: 'International',
    Conference_Location: 'Singapore',
    Conference_Mode: 'Hybrid',
    Publication_Status: 'Accepted',
    Journal_Name: 'Journal of Medical AI',
    Issn_Number: '1875-9987',
    Indexing: 'Scopus',
    Certificate_Link: 'https://example.com/certificates/vikram-conf.pdf',
  },
];

const ConferenceTable = () => {
  return (
    <div className="p-4">
      <DataTable
        title="Faculty Conference Presentations"
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

export default ConferenceTable;
