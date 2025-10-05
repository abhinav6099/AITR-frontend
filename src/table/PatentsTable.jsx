import React from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';

// Column Definitions
const columns = [
  { name: 'faculty Id', selector: row => row.facultyId, sortable: true, width: '70px' },
  { name: 'Faculty Name', selector: row => row.facultyName, sortable: true },
  { name: 'Department', selector: row => row.department, wrap: true },
  { name: 'title', selector: row => row.title },
  { name: 'Applicant', selector: row => row.applicant },
  { name: 'Application Number', selector: row => row.applicationNumber },
  { name: 'Application Number', selector: row => row.applicationNumber, wrap: true },
  { name: 'Application Date', selector: row => row.applicationDate },
  { name: 'Status', selector: row => row.status },
  { name: 'Co-Inventors', selector: row => row.coInventors },
  { name: 'Country', selector: row => row.country },
  { name: 'Category', selector: row => row.category },
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
  { name: 'Patent Title', selector: row => row.patentTitle },
  { name: 'Inventors', selector: row => row.inventors },
  { name: 'Publication Date', selector: row => row.publicationDate },
  { name: 'Abstract', selector: row => row.abstract },


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
              const url = "api/v1/faculty/patent-published"
              const response = await axios.delete(`${baseUrl}/${url}/${row._id}`);
              console.log(response.data);
            }
          } className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded">Delete</button>
      </div >
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

// Sample Data
// const data = [
//   {
//     Id: 1,
//     Faculty_Name: 'Dr. Ajay Sahani',
//     Patent_Title: 'Smart Irrigation Control System Using AI',
//     Patent_Number: 'IN2024112345',
//     Application_Date: '2024-01-15',
//     Status: 'Granted',
//     Inventor_Names: 'Ajay Sahani, Riya Sharma',
//     Patent_Type: 'Utility',
//     Patent_Office: 'Indian Patent Office',
//     Grant_Date: '2024-05-10',
//     Expiry_Date: '2044-01-15',
//     Country: 'India',
//     Patent_Category: 'Agriculture Technology',
//     Certificate_Link: 'https://example.com/patents/ajay-cert.pdf',
//   },
//   {
//     Id: 2,
//     Faculty_Name: 'Prof. Riya Sharma',
//     Patent_Title: 'Low-Power Blockchain Voting Protocol',
//     Patent_Number: 'IN2023998765',
//     Application_Date: '2023-06-10',
//     Status: 'Published',
//     Inventor_Names: 'Riya Sharma, Vikram Patel',
//     Patent_Type: 'Provisional',
//     Patent_Office: 'Indian Patent Office',
//     Grant_Date: '-',
//     Expiry_Date: '2043-06-10',
//     Country: 'India',
//     Patent_Category: 'Blockchain Security',
//     Certificate_Link: 'https://example.com/patents/riya-cert.pdf',
//   },
//   {
//     Id: 3,
//     Faculty_Name: 'Dr. Vikram Patel',
//     Patent_Title: 'AI-Powered Diagnostic Imaging Device',
//     Patent_Number: 'IN2023123456',
//     Application_Date: '2023-09-25',
//     Status: 'Granted',
//     Inventor_Names: 'Vikram Patel',
//     Patent_Type: 'Design',
//     Patent_Office: 'Indian Patent Office',
//     Grant_Date: '2024-03-05',
//     Expiry_Date: '2033-09-25',
//     Country: 'India',
//     Patent_Category: 'Healthcare AI',
//     Certificate_Link: 'https://example.com/patents/vikram-cert.pdf',
//   },
// ];

const PatentTable = ({data}) => {
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
        title="Faculty Patents"
        columns={columns}
        data={data}
        pagination
        striped
        highlightOnHover
        responsive
      />
    </div>
  );
};

export default PatentTable;
