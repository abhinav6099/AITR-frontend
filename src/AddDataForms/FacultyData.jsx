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

  const fetchData = async () => {
    if(loading == true ){
      const data = await axios.get("http://localhost:3000/facultydata")
      setData(data.data.response)
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

      const response = await axios.post("http://localhost:3000/facultydata" , {
        name: facultyData.name,
        email: facultyData.email,
        department: facultyData.department,
        mobile_no: facultyData.mobile_no,
        years_Of_Experience: facultyData.years_of_experience,
        designation: facultyData.designation,
        // using fileId without middleware 
        // TODO : create middleware and send the fileId with using middleware
        // fileId : res.data.fileId
      })

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
  ];




  return (
    <div>
        <FacultyForm onSubmit={onSubmit}  register={register} handleSubmit={handleSubmit} reset={reset} />
        <DataTable columns={columns} />
    </div>
  )
}
export default AddFaculty