import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  { name: 'Hackathon Name', selector: row => row.hackathonName },
  { name: 'Organiser', selector: row => row.organizer },
  { name: 'Team Details', selector: row => row.teamDetails, wrap: true },
  { name: 'Result', selector: row => row.result },
  { name: 'Event Date', selector: row => row.eventDate },
  { name: 'Team Name', selector: row => row.teamName },
  { name: 'Team Size', selector: row => row.teamSize},
  { name: 'Mentor Name', selector: row => row.mentorName },
  { name: 'Venue', selector: row => row.venue },
  { name: 'Problem Statement', selector: row => row.problemStatement, wrap: true },
  { name: 'Technology Used', selector: row => row.technologyUsed },
  { name: 'Prize Money', selector: row => row.prizeMoney },
  { name: 'Position Secured', selector: row => row.positionSecured },
  {
    name: 'Actions',
    cell: row => (
      <div className="flex gap-2">
        <button onClick={() => alert(`Viewing event ${row.Id}`)} className="bg-blue-500 text-white px-2 py-1 text-xs rounded">View</button>
        <button onClick={() => alert(`Editing event ${row.Id}`)} className="bg-yellow-500 text-white px-2 py-1 text-xs rounded">Edit</button>
        <button onClick={() => alert(`Deleting event ${row.Id}`)} className="bg-red-500 text-white px-2 py-1 text-xs rounded">Delete</button>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];



const HackathonTable = ({data}) => {
  return (
    <div className="p-4 overflow-x-auto">
      <DataTable
        title="Student Hackathon Participation"
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

export default HackathonTable;
