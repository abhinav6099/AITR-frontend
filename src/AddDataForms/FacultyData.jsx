import React, { useEffect } from 'react'
import FacultyForm from '../Forms/FacultyForms/FacultyForm'
import FacultyTable from '../table/FacultyTable'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import DataTable from 'react-data-table-component';


function AddFaculty() {

  const {register, handleSubmit, reset} = useForm()
  const [data, setData] = useState([])
  const [loading , setLoading ] = useState(true)
  const [submit, setSubmit ] = useState(false)


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


  const fetchData = async () => {
    if(loading == true ){
      const data = await axios.get("http://localhost:3000/api/v1/faculty/profiles")
      console.log(data.data.profiles)
      setData(data.data.profiles)
    }
 
  }

  useEffect(() => {
    console.log("fetching data")
    fetchData()
    console.log(data)
  },[loading])

  const onSubmit = async (facultyData) => {
 
    try{
      // const formData = new FormData();
      // formData.append("file" , file);

      // const res = await axios.post("http://localhost:3000/file", formData)
      // console.log(res.data)

      console.log(facultyData)
      const url = "http://localhost:3000/api/v1/faculty/profile"
      const response = await axios.post( url 
        , {
        facultyId: facultyData.facultyId,
        name: facultyData.name,
        email: facultyData.email,
        qualification: facultyData.qualification,
        department: facultyData.department,
        mobileNumber: facultyData.mobileNumber,
        category: facultyData.category,
        teachingExperience: facultyData.teachingExperience,
        designation: facultyData.designation,


        // using fileId without middleware 
        // TODO : create middleware and send the fileId with using middleware
        // fileId : res.data.fileId
      }
    )

      console.log(response)
      
      }catch(err){
        console.log("Error:", err )
      }
      console.log(facultyData)

    setLoading((p) => !p)
  }

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
    name: 'faculty ID',
    selector: row => row.facultyId,
    sortable: true,
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
    name: 'qualification',
    selector: row => row.qualification,
    sortable: true,
  },
  {
    name: 'Department',
    selector: row => row.department,
    sortable: true,
  },
  {
    name: 'Mobile No',
    selector: row => row.mobileNumber,
    sortable: true,
  },
  {
    name: 'Experience (Years)',
    selector: row => row.teachingExperience,
    sortable: true,

  },
  {
    name: 'Designation',
    selector: row => row.designation,
    sortable: true,
  },
  ];




  return (
    <div>
        <FacultyForm onSubmit={onSubmit}  register={register} handleSubmit={handleSubmit} reset={reset} />
        <DataTable columns={columns} data={data} />
    </div>
  )
}
export default AddFaculty