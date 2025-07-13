import React, { useEffect } from 'react'
import FacultyForm from '../Forms/FacultyForms/FacultyForm'
import FacultyTable from '../table/FacultyTable'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Button from '../components/Button';


function AddFaculty() {

  const {register, handleSubmit, reset} = useForm()
  const [data, setData] = useState([])
  const [loading , setLoading ] = useState(true)
  const [submit, setSubmit ] = useState(false)

  const fetchData = async () => {
    if(loading == true ){
      const data = await axios.get("http://localhost:3000/api/v1/faculty/profiles")
      console.log(data.data.profiles)
      setData(data.data.profiles)
      setLoading(false)
    }
 
  }

  useEffect(() => {
    console.log("fetching data")
    fetchData()
    console.log(data)
  },[loading])

  const onSubmit = async (facultyData) => {
 
    try{

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

      }
    )

    if(response.ok){
      console.log("hi there")
    }

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