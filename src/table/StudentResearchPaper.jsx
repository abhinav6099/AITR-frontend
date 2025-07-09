import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
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


const StudentResearchPaper = ({data}) => {
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
