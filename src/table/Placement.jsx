import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  { name: 'ID', selector: row => row.placementId, sortable: true, width: '70px' },
  { name: 'Student Name', selector: row => row.studentName, sortable: true },
  { name: 'Company Name', selector: row => row.companyName },
  { name: 'Company Location', selector: row => row.companyLocation },

  { name: 'Job Role', selector: row => row.roleOffered },
  { name: 'Branch', selector: row => row.branch },
  { name: 'Year', selector: row => row.year },

  { name: 'Placement Type', selector: row => row.placementType },
  { name: 'Package', selector: row => row.package },
  { name: 'Joining Date', selector: row => row.joiningDate },
  {
    name: 'Offer Letter',
    cell: row => (
      <a
        href={row.fileId}
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
        <button onClick={() => alert(`Viewing ${row.Id}`)} className="bg-blue-500 text-white px-2 py-1 text-xs rounded">View</button>
        <button onClick={() => alert(`Editing ${row.Id}`)} className="bg-yellow-500 text-white px-2 py-1 text-xs rounded">Edit</button>
        <button onClick={() => alert(`Deleting ${row.Id}`)} className="bg-red-500 text-white px-2 py-1 text-xs rounded">Delete</button>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];



const PlacementTable = ({data}) => {
  return (
    <div className="p-4 overflow-x-auto">
      <DataTable
        title="Student Placement Records"
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

export default PlacementTable;
