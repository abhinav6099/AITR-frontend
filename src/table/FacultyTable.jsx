import axios from 'axios';
import DataTable from 'react-data-table-component';

const facultyData = [
  {
    name: "Dr. Aditi Sharma",
    email: "aditi.sharma@university.edu",
    department: "Computer Science",
    mobile_no: "9876543210",
    years_Of_Experience: 12,
    designation: "Associate Professor"
  },
  {
    name: "Prof. Rajesh Kumar",
    email: "rajesh.kumar@university.edu",
    department: "Mechanical Engineering",
    mobile_no: "9123456780",
    years_Of_Experience: 18,
    designation: "Professor"
  },
  {
    name: "Ms. Neha Verma",
    email: "neha.verma@university.edu",
    department: "Electrical Engineering",
    mobile_no: "9988776655",
    years_Of_Experience: 7,
    designation: "Assistant Professor"
  },
  {
    name: "Dr. Vikram Singh",
    email: "vikram.singh@university.edu",
    department: "Civil Engineering",
    mobile_no: "9765432109",
    years_Of_Experience: 15,
    designation: "Professor"
  },
  {
    name: "Mr. Alok Das",
    email: "alok.das@university.edu",
    department: "Mathematics",
    mobile_no: "9090909090",
    years_Of_Experience: 5,
    designation: "Lecturer",
    fileId: "345346534653465392"
  }
];


// const responce = await axios.get("http://localhost:3000/facultydata")
// console.log(responce.data.response)

// Define faculty columns
const index =   1

const columns = [
  {
    name: 's.no',
    selector: row => row.id,
    sortable: true,
    width: '80px',
    cell: (row ,index) => index + 1 
  },
  {
    name: 'Name',
    selector: row => row.name,
    sortable: true,
  },
  {
    name: 'Email',
    selector: row => row.email,
    sortable: true,
  },
  {
    name: 'Department',
    selector: row => row.department,
    sortable: true,
  },
  {
    name: 'Mobile No',
    selector: row => row.mobile_no,
    sortable: true,
  },
  {
    name: 'Experience (Years)',
    selector: row => row.years_Of_Experience,
    sortable: true,

  },
  {
    name: 'Designation',
    selector: row => row.designation,
    sortable: true,
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
              alert(`Deleting ${row._id}`)
              const baseUrl = "http://localhost:3000";
              const url = "api/v1/faculty/profile"
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


function FacultyTable({data}) {
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
  console.log(data)
	return (
		<DataTable columns={columns} data={facultyData} />
	);
};

export default FacultyTable;