import React from 'react';
import DataTable from 'react-data-table-component';
import '../components/scroll.css' // we'll define custom styles here

const columns = [
  { name: 'ID', selector: row => row.certificateId, sortable: true, width: '100px' },
  { name: 'Student Name', selector: row => row.studentName, sortable: true },
  { name: 'Enrollment Number', selector: row => row.enrollmentNumber },
  { name: 'Certificate Name', selector: row => row.certificateName, wrap: true },
  { name: 'Certificate Type', selector: row => row.certificateType },
  { name: 'Branch', selector: row => row.branch },
  { name: 'Batch', selector: row => row.batch },
  { name: 'Year', selector: row => row.year },
  { name: 'Course', selector: row => row.courseName },
  { name: 'Issuing Organization', selector: row => row.issuingOrganization, wrap: true },
  { name: 'issue Date', selector: row => row.issueDate },
  { name: 'Validity Period', selector: row => row.validityPeriod },
  { name: 'Graded of Score', selector: row => row.gradeOfScore },
  { name: 'Mode Of Learning', selector: row => row.modeOfLearning },
  { name: 'Course Duration', selector: row => row.courseDuration },
  { name: 'Rank or Position', selector: row => row.rankOrPosition },
  { name: 'Certificate Description', selector: row => row.certificateDescription },
  { name: 'relevance To Program Or Branch', selector: row => row.relevanceToProgramOrBranch },


  {
    name: 'Certificate Link',
    cell: row => (
      <a href={row.fileId} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm">
        View
      </a>
    ),
  },
  {
    name: 'Actions',
    cell: row => (
      <div className="flex gap-2">
        <button onClick={() => alert(`Viewing certificate ${row.Id}`)} className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded">View</button>
        <button onClick={() => alert(`Editing certificate ${row.Id}`)} className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-3 py-1 rounded">Edit</button>
        <button onClick={() => alert(`Deleting certificate ${row.Id}`)} className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded">Delete</button>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];



const StudentCertificatesTable = ({data}) => {
  return (
    <div className="table-scroll-container">
      <DataTable
        title="Student Certificates"
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

export default StudentCertificatesTable;
