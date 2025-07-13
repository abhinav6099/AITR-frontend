import React from 'react'
import DataTable from 'react-data-table-component';

function ResearchPaperTable() {


//     const data = [
//   {
//     Id: 1,
//     Faculty_Name: 'Dr. Ajay Sahani',
//     Title: 'Artificial Intelligence in Education',
//     Publication_Date: '2024-10-15',
//     Journal_Name: 'International Journal of AI Research',
//     Co_Authors: 'Riya Sharma, Vikram Patel',
//   },
//   {
//     Id: 2,
//     Faculty_Name: 'Prof. Riya Sharma',
//     Title: 'Advancements in Quantum Computing',
//     Publication_Date: '2023-07-22',
//     Journal_Name: 'Quantum Technology Today',
//     Co_Authors: 'Ajay Sahani',
//   },
//   {
//     Id: 3,
//     Faculty_Name: 'Dr. Vikram Patel',
//     Title: 'Blockchain Applications in Academia',
//     Publication_Date: '2022-11-10',
//     Journal_Name: 'Journal of Computer Science',
//     Co_Authors: 'Riya Sharma, Neha Mehta',
//   },
//   {
//     Id: 4,
//     Faculty_Name: 'Prof. Neha Mehta',
//     Title: 'Cybersecurity Trends in 2025',
//     Publication_Date: '2024-03-18',
//     Journal_Name: 'CyberSec Journal',
//     Co_Authors: 'Ajay Sahani',
//   },
//   {
//     Id: 5,
//     Faculty_Name: 'Dr. Karan Verma',
//     Title: 'Machine Learning for Healthcare Analytics',
//     Publication_Date: '2023-12-01',
//     Journal_Name: 'HealthTech Journal',
//     Co_Authors: 'Riya Sharma, Vikram Patel',
//   },
// ];

  return (
    <DataTable columns={researchPaperColumns} data={data} />
  )
}

export default ResearchPaperTable

export const researchPaperColumns = [
  {
    name: 'ID',
    selector: row => row.facultyId,
    sortable: true,
    center: true
  },
  {
    name: 'Faculty Name',
    selector: row => row.facultyName,
    sortable: true
  },
  {
    name: 'Title of Paper',
    selector: row => row.titleOfPaper,
    sortable: true,
    wrap: true
  },
  {
    name: 'Publication Date',
    selector: row => row.publicationDate,
    format: row => new Date(row.publicationDate).toLocaleDateString()
  },
  {
    name: 'Journal/Conference Name',
    selector: row => row.journalOrConferenceName,
    wrap: true
  },
  {
    name: 'Co-Author',
    selector: row => row.coAuthors,
    wrap: true
  },
  {
    name: 'Indexing',
    selector: row => row.indexing,
    wrap: true
  },
  {
    name: 'Paper PDF',
    selector: row => row.paperPdf,
    cell: row => (
      <a
        href={row.paperPdf}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        View PDF
      </a>
    )
  },
  {
    name: 'ISSN Number',
    selector: row => row.issnNumber
  },
  {
    name: 'DOI Link',
    selector: row => row.doiLink,
    cell: row => (
      <a
        href={row.doiLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        DOI
      </a>
    )
  },
  {
    name: 'Authors',
    selector: row => row.authors,
    cell: row =>
      Array.isArray(row.authors) ? row.authors.join(', ') : row.authors
  },
  {
    name: 'ISSN/ISBN',
    selector: row => row.issnOrIsbn
  },
  {
    name: 'Department',
    selector: row => row.department
  }
];


export const ResearchPaperPublication = [
  { name: 'Student Name', selector: row => row.studentName, sortable: true },
  { name: 'Enrollment Number', selector: row => row.enrollmentNumber, wrap: true },
  { name: 'Branch', selector: row => row.branch },
  { name: 'Batch', selector: row => row.batch },
  { name: 'doiOrIsbn', selector: row => row.doiOrIsbn, wrap: true },
  { name: 'title Of Paper', selector: row => row.titleOfPaper },
  { name: 'Publication Date', selector: row => row.publicationDate },
  { name: 'journal Or Conference Name', selector: row => row.journalOrConferenceName },
  { name: 'cCo Authors', selector: row => row.coAuthors },
  { name: 'indexing', selector: row => row.indexing },
  { name: 'PDF', selector: row => row.fileId },
  { name: 'Faculty Guide', selector: row => row.facultyGuide },
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