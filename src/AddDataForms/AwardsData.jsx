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
  const [file, setFile] = useState(null)


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

  const onSubmit = async (data) => {
 
    console.log(data)
    console.log(data.file[0])
    setFile(data.file[0])
    try{
      const formData = new FormData();
      formData.append("file" , file);

      const res = await axios.post("http://localhost:3000/file", formData)
      console.log(res.data)

    //   const url = "http://localhost:3000/api/v1/faculty/profile"
    //   const response = await axios.post( url 
    //     , {
    //     recipientId: data.recipientId,
    //     recipientName: data.recipientName,
    //     department: data.department,
    //     awardName: data.awardName,
    //     issuingOrganisation: data.issuingOrganisationber,
    //     date: data.date,
    //     catagory: data.catagory,
    //     enevtName: data.enevtName,
    //     description: data.description,
    //     certificatePdfUrl: data.certificatePdfUrl,
    //     titleOfAward: data.titleOfAward,
    //     level: data.level,
    //     supportingDocumentUrl: data.supportingDocumentUrl,
    //     // using fileId without middleware 
    //     // TODO : create middleware and send the fileId with using middleware
    //     fileId : res.data.fileId
    //   }
    // )

    // console.log(response)
      
    }catch(err){
      console.log("Error:", err )
    }
    console.log(data)

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