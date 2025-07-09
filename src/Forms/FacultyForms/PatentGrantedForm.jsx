import React from 'react'
import InputBox from '../../components/InputBox'
import FileBox from '../../components/FileBox'
import CalenderBox from '../../components/CalenderBox'
import { useForm } from 'react-hook-form'
import DataTable from 'react-data-table-component'
import { useEffect, useState } from 'react'

import axios from 'axios'

function PatentGrantedForm() {

  const {register, handleSubmit, reset} = useForm()
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
        paperTitle: data.paperTitle,
        inventors: data.inventorse,
        grantNumber: data.grantNumbert,
        dateOfGrant: data.dateOfGrant,
        countryOfGrant: data.countryOfGrant,
        applicationNumber: data.applicationNumber,
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
      <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Patent Guided
      </h2>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <InputBox label="patent_Title" name="patentTitle" register={register} required />
        <InputBox label="investors" name="inventors" register={register} required />
        <InputBox label="grant_Number" name="grantNumber" register={register} required />
        <CalenderBox label="date_Of_Grant" name="dateOfGrant" register={register} required />
        <InputBox label="country_Of_Grant" name="countryOfGrant" register={register} required />
        <InputBox label="application_Number" name="applicationNumber" register={register} required />
        <FileBox label="patent_Certificate_Upload" name="file" register={register} />

        <button type="submit" className="bg-blue-600 text-white px-4 py-1 rounded">Submit</button>
        </div>
        </form>
      </div>
      <DataTable columns={patentColumn} data={data} />
    </div>
  )
}

export default PatentGrantedForm


export const patentColumn = [
  {
    name: 'Patent Title',
    selector: row => row.patentTitle,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Inventors',
    selector: row => row.inventors?.join(', '),
    sortable: true,
    wrap: true,
  },
  {
    name: 'Grant Number',
    selector: row => row.grantNumber,
    sortable: true,
  },
  {
    name: 'Date of Grant',
    selector: row => (row.dateOfGrant),
    sortable: true,
  },
  {
    name: 'Country of Grant',
    selector: row => row.countryOfGrant,
    sortable: true,
  },
  {
    name: 'Application Number',
    selector: row => row.applicationNumber,
    sortable: true,
  }
]


