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
    selector: row => row.years_of_experience,
    sortable: true,

  },
  {
    name: 'Designation',
    selector: row => row.designation,
    sortable: true,
  },
];


function FacultyTable() {
	return (
		<DataTable
			columns={columns}
			facultyData={responce.data.response}

		/>
	);
};

export default FacultyTable;