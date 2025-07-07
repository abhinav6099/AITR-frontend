import React from 'react'
import AwardForm from "../Forms/FacultyForms/Awards"
import AwardTable from '../table/AwardsTable'
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddAwards = () => {

  const {register, handleSubmit, reset} = useForm()
  const [data, setData] = useState([])
  const [loading , setLoading ] = useState(true)


  const fetchData = async () => {
    if(loading == true ){
      const data = await axios.get("http://localhost:3000/api/v1/faculty/award-recognitions")
      console.log(data.data)
     
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

  return (
    <>
        <AwardForm onSubmit={onSubmit}  register={register} handleSubmit={handleSubmit} reset={reset}  />
        <AwardTable  data={data} />
    </>
  )

}

export default AddAwards