import React from 'react';
import DataTable from 'react-data-table-component';

// Columns Definition
const columns = [
  {
    name: 'ID',
    selector: row => row.recipientId,
    sortable: true
  },
  {
    name: 'Recipient Name',
    selector: row => row.recipientName,
    sortable: true
  },
  {
    name: 'Department',
    selector: row => row.department,
    sortable: true
  },
  {
    name: 'Award Name',
    selector: row => row.awardName,
    sortable: true
  },
  {
    name: 'Issuing Organization',
    selector: row => row.issuingOrganization,
    sortable: true
  },
  {
    name: 'Date',
    selector: row => new Date(row.date).toLocaleDateString(),
    sortable: true
  },
  {
    name: 'Category',
    selector: row => row.category,
    sortable: true
  },
  {
    name: 'Event Name',
    selector: row => row.eventName,
    sortable: true
  },
  {
    name: 'Description/Purpose',
    selector: row => row.description,
    wrap: true
  },
  {
    name: 'Certificate PDF',
    cell: row => (
      <a
        href={`http://localhost:3000/file/${row.fileId}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        View
      </a>
    )
  },
  {
    name: 'Title of Award',
    selector: row => row.titleOfAward,
    sortable: true
  },
  {
    name: 'Level',
    selector: row => row.level,
    sortable: true
  },
  // {
  //   name: 'Supporting Document',
  //   cell: row => (
  //     <a
  //       href={row.supportingDocument}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       className="text-blue-600 underline"
  //     >
  //       View
  //     </a>
  //   )
  // }
];


// Sample Data



// Component
const AwardTable = ({data}) => {
  return (
    <div className="p-4">
      <DataTable
        title="Faculty Awards"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        striped
        responsive
      />
    </div>
  );
};

export default AwardTable;
