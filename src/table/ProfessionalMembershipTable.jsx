import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  { name: 'Organization Name', selector: row => row.organizationName },
  { name: 'Membership ID', selector: row => row.membershipId },
  { name: 'Date of Joining', selector: row => row.dateOfJoining },
  { name: 'Membership Status', selector: row => row.membershipStatus },
  {
    name: 'Actions',
    cell: row => (
      <div className="flex gap-2">
        <button onClick={() => alert(`Viewing ${row.organizationName}`)} className="bg-blue-500 text-white px-2 py-1 text-xs rounded">View</button>
        <button onClick={() => alert(`Editing ${row.organizationName}`)} className="bg-yellow-500 text-white px-2 py-1 text-xs rounded">Edit</button>
        <button onClick={() => alert(`Deleting ${row.organizationName}`)} className="bg-red-500 text-white px-2 py-1 text-xs rounded">Delete</button>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  }
];

const ProfessionalMembershipTable = ({ data }) => {
  return (
    <div className="p-4 overflow-x-auto">
      <DataTable
        title="Professional Memberships"
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

export default ProfessionalMembershipTable;
