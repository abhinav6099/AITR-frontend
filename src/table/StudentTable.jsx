import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  { name: 'ID', selector: row => row.studentId, sortable: true, width: '70px' },
  { name: 'Student Name', selector: row => row.name, sortable: true },
  { name: 'Enrollment No.', selector: row => row.enrollmentNumber },
  { name: 'Branch', selector: row => row.branch },
  { name: 'batch', selector: row => row.batch, wrap: true },
  { name: 'email', selector: row => row.email },
  { name: 'year', selector: row => row.year },
  { name: 'course', selector: row => row.course, wrap: true },
  { name: 'cgpa', selector: row => row.cgpa, wrap: true },
  { name: 'dateOfBirth', selector: row => row.dateOfBirth, wrap: true },
  { name: 'gender', selector: row => row.gender, wrap: true },
  { name: 'catogory', selector: row => row.catogory, wrap: true },
  { name: 'yearOfAdmission', selector: row => row.yearOfAdmission, wrap: true },
  { name: 'status', selector: row => row.status, wrap: true },
  { name: 'githubLink', selector: row => (<a href={row.githubLink} target='_blank'>{row.githubLink}</a>), wrap: true },
  { name: 'linkinProfileLink', selector: row => (<a href={row.linkinProfileLink} target='_blank'>Link</a> ) || "N/A", wrap: true },
  { name: 'gaurdianContactNumber', selector: row => row.gaurdianContactNumber, wrap: true },
  { name: 'gaurdianName', selector: row => row.gaurdianName, wrap: true },
  { name: 'address', selector: row => row.address, wrap: true },
  {
    name: "Download PDF",
    selector: row => row.fileId,
    cell: row =>
      row.fileId ? (
        <a
          href={`http://localhost:3000/file/${row.fileId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View PDF
        </a>
      ) : (
        "N/A"
      ),
    sortable: false,
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
              alert(`Deleting certificate ${row._Id}`)
              const baseUrl = "http://localhost:3000";
              const url = "api/v1/students/profile";
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

// Sample Data
// const data = [
//   {
//     Id: 1,
//     Student_Name: 'Aryan Gupta',
//     Enrollment_Number: 'ENR2023CS102',
//     Activity_Type: 'certificate',
//     Title: 'Full Stack Web Development',
//     Organization: 'Coursera',
//     Date: '2024-04-10',
//     Description: 'Completed certified online training for MERN Stack.',
//     Certificate_Link: 'https://example.com/aryan-certificate.pdf',
//   },
//   {
//     Id: 2,
//     Student_Name: 'Sneha Verma',
//     Enrollment_Number: 'ENR2023CS198',
//     Activity_Type: 'hackathon',
//     Title: 'Smart India Hackathon 2024',
//     Organization: 'Govt. of India',
//     Date: '2024-02-28',
//     Description: 'Won 2nd prize in a national-level hackathon.',
//     Certificate_Link: 'https://example.com/sneha-hackathon.pdf',
//   },
//   {
//     Id: 3,
//     Student_Name: 'Rajat Malhotra',
//     Enrollment_Number: 'ENR2023EE215',
//     Activity_Type: 'placement',
//     Title: 'Placed at TCS',
//     Organization: 'Tata Consultancy Services',
//     Date: '2024-06-15',
//     Description: 'Selected as Assistant System Engineer.',
//     Certificate_Link: 'https://example.com/rajat-offer.pdf',
//   },
//   {
//     Id: 4,
//     Student_Name: 'Nikita Sharma',
//     Enrollment_Number: 'ENR2023ME178',
//     Activity_Type: 'internship',
//     Title: 'Summer Intern',
//     Organization: 'BHEL',
//     Date: '2023-07-01',
//     Description: 'Worked on turbine blade design.',
//     Certificate_Link: 'https://example.com/nikita-intern.pdf',
//   },
//   {
//     Id: 5,
//     Student_Name: 'Amit Yadav',
//     Enrollment_Number: 'ENR2023CS067',
//     Activity_Type: 'researchpaper',
//     Title: 'Machine Learning in Agriculture',
//     Organization: 'IJRTE',
//     Date: '2024-01-10',
//     Description: 'Published in Scopus-indexed journal.',
//     Certificate_Link: 'https://example.com/amit-paper.pdf',
//   },
//   {
//     Id: 6,
//     Student_Name: 'Pooja Singh',
//     Enrollment_Number: 'ENR2023PE044',
//     Activity_Type: 'sports',
//     Title: 'Inter-College Volleyball Championship',
//     Organization: 'University Sports Cell',
//     Date: '2023-10-05',
//     Description: 'Won gold medal in volleyball event.',
//     Certificate_Link: 'https://example.com/pooja-sports.pdf',
//   },
// ];

const StudentTable = ({data}) => {
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
        title="Student Activities"
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

export default StudentTable;
