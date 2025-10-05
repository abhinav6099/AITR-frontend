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

const SportsTable = () => {
   function convertArrayOfObjectsToCSV(array) {
    let result;

    const columnDelimiter = ',';
    const lineDelimiter = '\n';
    const keys = Object.keys(data[0]);

    result = '';
    result += keys.join(columnDelimiter);
    result += lineDelimiter;

    array.forEach(item => {
      let ctr = 0;
      keys.forEach(key => {
        if (ctr > 0) result += columnDelimiter;

        result += item[key];

        ctr++;
      });
      result += lineDelimiter;
    });

    return result;
  }

  function downloadCSV(array) {
    const link = document.createElement('a');
    let csv = convertArrayOfObjectsToCSV(array);
    if (csv == null) return;

    const filename = 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
      csv = `data:text/csv;charset=utf-8,${csv}`;
    }

    link.setAttribute('href', encodeURI(csv));
    link.setAttribute('download', filename);
    link.click();
  }

  const Export = ({ onExport }) => <button onClick={e => onExport(e.target.value)}>Export</button>;
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
