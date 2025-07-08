import React from 'react'
import FacultyPatentForm from '../Forms/FacultyForms/Patent'
import PatentTable from '../table/PatentsTable'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useState, useEffect } from 'react'

function AddPatentData() {

  const { register, reset , handleSubmit } = useForm()
  const [data, setData] = useState([])
  const [loading , setLoading ] = useState(true)
  const [file, setFile] = useState(null)


  const fetchData = async () => {
    if(loading == true ){
      const data = await axios.get("http://localhost:3000/api/v1/faculty/patents-granted")
      console.log(data.data.patents)
      setData(data.data.patents)
     
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
      
      const url = "http://localhost:3000/api/v1/faculty/patent-granted"
      const response = await axios.post( url 
        , {
        facultyId: data.facultyId,
        facultyName: data.facultyName,
        department: data.department,
        fdpTitle: data.fdpTitle,
        organizingInstitute: data.organizingInstituteber,
        startDate: data.startDate,
        endDate: data.endDate,
        programType: data.programType,
        mode: data.mode,
        location:data.location,
        numberOfDays: data.numberOfDays,
        catagory: data.catagory,
        enevtName: data.enevtName,
        description: data.description,
        outcomeHighlights: data.outcomeHighlights,

        // using fileId without middleware 
        // TODO : create middleware and send the fileId with using middleware
        fileId : res.data.fileId
      }
      
    )
    console.log(response)

      
    }catch(err){
      console.log("Error:", err )
    }
    console.log(data)

    setLoading((p) => !p)
  }

  return (
    <div>
        <FacultyPatentForm register={register} reset={reset} handleSubmit={handleSubmit} onSubmit={onSubmit}  />
        <PatentTable data={data} />
    </div>
  )
}

export default AddPatentData