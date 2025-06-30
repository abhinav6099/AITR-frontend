import React from 'react'
import DataTable from 'react-data-table-component';

function ResearchPaperTable() {


    const data = [
  {
    Id: 1,
    Faculty_Name: 'Dr. Ajay Sahani',
    Title: 'Artificial Intelligence in Education',
    Publication_Date: '2024-10-15',
    Journal_Name: 'International Journal of AI Research',
    Co_Authors: 'Riya Sharma, Vikram Patel',
  },
  {
    Id: 2,
    Faculty_Name: 'Prof. Riya Sharma',
    Title: 'Advancements in Quantum Computing',
    Publication_Date: '2023-07-22',
    Journal_Name: 'Quantum Technology Today',
    Co_Authors: 'Ajay Sahani',
  },
  {
    Id: 3,
    Faculty_Name: 'Dr. Vikram Patel',
    Title: 'Blockchain Applications in Academia',
    Publication_Date: '2022-11-10',
    Journal_Name: 'Journal of Computer Science',
    Co_Authors: 'Riya Sharma, Neha Mehta',
  },
  {
    Id: 4,
    Faculty_Name: 'Prof. Neha Mehta',
    Title: 'Cybersecurity Trends in 2025',
    Publication_Date: '2024-03-18',
    Journal_Name: 'CyberSec Journal',
    Co_Authors: 'Ajay Sahani',
  },
  {
    Id: 5,
    Faculty_Name: 'Dr. Karan Verma',
    Title: 'Machine Learning for Healthcare Analytics',
    Publication_Date: '2023-12-01',
    Journal_Name: 'HealthTech Journal',
    Co_Authors: 'Riya Sharma, Vikram Patel',
  },
];


    const columns = [
  {
    name: 'ID',
    selector: row => row.Id,
    sortable: true,
    width: '80px',
  },
  {
    name: 'Faculty Name',
    selector: row => row.Faculty_Name,
    sortable: true,
  },
  {
    name: 'Title',
    selector: row => row.Title,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Publication Date',
    selector: row => row.Publication_Date,
    sortable: true,
  },
  {
    name: 'Journal Name',
    selector: row => row.Journal_Name,
    sortable: true,
  },
  {
    name: 'Co-Authors',
    selector: row => row.Co_Authors,
    wrap: true,
  },
  {
    name: 'Actions',
    width: '150px',
    cell: row => (
      <div className="flex gap-2">
        {/* <button
          className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-3 py-1 rounded"
          onClick={() => alert(`Editing ${row.Id}`)}
        >
          Edit
        </button> */}
        <button
          className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded"
          onClick={() => alert(`Deleting ${row.Id}`)}
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

  return (
    <DataTable columns={columns} data={data} />
  )
}

export default ResearchPaperTable