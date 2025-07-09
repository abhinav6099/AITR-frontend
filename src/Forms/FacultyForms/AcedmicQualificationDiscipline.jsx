import React from 'react'
import InputBox from '../../components/InputBox'
import FileBox from '../../components/FileBox'
import { useForm } from 'react-hook-form'  
import { useState, useEffect } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component'

function AcedmicQualificationDiscipline() {


  const {register, handleSubmit, reset} = useForm()
  const [data, setData] = useState([])
  const [loading , setLoading ] = useState(true)
  const [file, setFile] = useState(null)


  const fetchData = async () => {
    if(loading == true ){
      const data = await axios.get("http://localhost:3000/api/v1/faculty/academic-qualifications")
      console.log(data.data.qualifications)
      setData(data.data.qualifications)
     
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
      
      const url = "http://localhost:3000/api/v1/faculty/academic-qualification"
      const response = await axios.post( url 
        , {
        facultyName: data.facultyName,
        highestDegree: data.highestDegreet,
        universityOrInstitute: data.universityOrInstitute,
        specialization: data.specialization,
        yearOfCompletion: data.yearOfCompletion,
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
            Acadmic Qualification
          </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" >
        <InputBox label={"faculty_name"} name="facultyName" register={register} required />
        <InputBox label="highest_Degree" name="highestDegree" register={register} required />
        
        <InputBox label="universityOrInstitute" name="universityOrInstitute" register={register} required />
        
        <InputBox label="specialization" name="specialization" register={register} required />
        
        <InputBox
            label="year_Of_Completion"
            name="yearOfCompletion"
            register={register}
            type="number"
            required
        />
        <FileBox label="certificateUrl" name="certificateUrl" register={register} />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
        </div>
        </form>
    </div>
    <DataTable columns={academicQualificationColumns} data={data} />
    </div>
  )
}

export default AcedmicQualificationDiscipline

export const academicQualificationColumns = [
  {
    name: 'Highest Degree',
    selector: row => row.highestDegree,
    sortable: true,
    wrap: true,
  },
  {
    name: 'University/Institute',
    selector: row => row.universityOrInstitute,
    sortable: true,
    wrap: true,
  },
  {
    name: 'Specialization',
    selector: row => row.specialization,
    sortable: true,
  },
  {
    name: 'Year of Completion',
    selector: row => row.yearOfCompletion,
    sortable: true,
  },
  {
    name: 'Certificate',
    cell: row => (
      row.certificateUrl ? (
        <a
          href={row.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          View
        </a>
      ) : 'N/A'
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];


