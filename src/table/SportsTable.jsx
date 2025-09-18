import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  { name: 'ID', selector: row => row.Id, width: '60px' },
  { name: 'Student Name', selector: row => row.Student_Name },
  { name: 'Sport Name', selector: row => row.Sport_Name },
  { name: 'Achievement', selector: row => row.Achievement },
  { name: 'Event Date', selector: row => row.Event_Date },
  { name: 'Event Name', selector: row => row.Event_Name },
  { name: 'Event Level', selector: row => row.Event_Level },
  { name: 'Event Location', selector: row => row.Event_Location },
  { name: 'Position', selector: row => row.Position },
  {
    name: 'Certificate',
    cell: row => (
      <a href={row.Certificate} target="_blank" rel="noreferrer" className="text-blue-600 underline text-sm">
        View
      </a>
    ),
  },
  { name: 'Coach Name', selector: row => row.Coach_Name },
   {
    name: 'Actions',
    cell: row => (
      <div className="flex flex-col items-center justify-center gap-0.5">
        {/* <button onClick={() => alert(`Viewing certificate ${row.Id}`)} className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-4 py-1 rounded">View</button> */}
        <button onClick={() => alert(`Editing certificate ${row._Id}`)} className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-5 py-1 rounded">Edit</button>
        <button
          onClick={
            async () => {
              console.log(row._id)
              alert(`Deleting certificate ${row._Id}`)
              const baseUrl = "http://localhost:3000";
              const url = "api/v1/students/sports"
              const response = await axios.delete(`${baseUrl}/${url}/${row._id}`);
              console.log(response.data.certificate);
            }
          } className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded">Delete</button>
      </div >
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

const data = [
  {
    Id: 1,
    Student_Name: 'Riya Sharma',
    Sport_Name: 'Volleyball',
    Achievement: 'Gold Medal',
    Event_Date: '2024-02-15',
    Event_Name: 'Inter-University Championship',
    Event_Level: 'National',
    Event_Location: 'Delhi University',
    Position: '1st',
    Certificate: 'https://example.com/sports/riya-certificate.pdf',
    Coach_Name: 'Mr. Anil Kumar',
  },
  {
    Id: 2,
    Student_Name: 'Arjun Mehta',
    Sport_Name: '100m Sprint',
    Achievement: 'Silver Medal',
    Event_Date: '2023-11-10',
    Event_Name: 'State Athletics Meet',
    Event_Level: 'State',
    Event_Location: 'Bhopal',
    Position: '2nd',
    Certificate: 'https://example.com/sports/arjun-certificate.pdf',
    Coach_Name: 'Ms. Rekha Sinha',
  },
  {
    Id: 3,
    Student_Name: 'Sneha Verma',
    Sport_Name: 'Badminton',
    Achievement: 'Participation',
    Event_Date: '2023-08-05',
    Event_Name: 'College Sports Fest',
    Event_Level: 'Intra-College',
    Event_Location: 'Campus Indoor Hall',
    Position: 'N/A',
    Certificate: 'https://example.com/sports/sneha-certificate.pdf',
    Coach_Name: 'Mr. Rakesh Jaiswal',
  },
];

const SportsTable = () => {
  return (
    <div className="p-4 overflow-x-auto">
      <DataTable
        title="Student Sports Achievements"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        striped
        responsive
        fixedHeader
        fixedHeaderScrollHeight="500px"
      />
    </div>
  );
};

export default SportsTable;
