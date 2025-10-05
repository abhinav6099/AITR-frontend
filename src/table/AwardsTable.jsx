import axios from 'axios';
import DataTable from 'react-data-table-component';


// note : this is the faculty table

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
              alert(`Deleting this ${row._id}`)
              const baseUrl = "http://localhost:3000";
              const url = "api/v1/faculty/award-recognition"
              const response = await axios.delete(`${baseUrl}/${url}/${row._id}`);
              console.log(response.data);
            }
          } className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded">Delete</button>
      </div >
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  }
];


// Sample Data


// Component
const AwardTable = ({ data }) => {
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
