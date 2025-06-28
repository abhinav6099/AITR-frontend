import { Input } from 'postcss'
import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import InputBox from '../components/InputBox'
import { SelectBox } from '../components/SelectBox'
import CalenderBox from '../components/CalenderBox'
import FileBox from '../components/FileBox'
import axios from 'axios'

function FacultyForm() {

    const { register, handleSubmit, reset  } = useForm()
    const [file , setFile] = useState(null)
    const ageOptions = [20, 30] 


    const onSubmit = async(data) => {
    console.log(data)
    setFile(data.file[0])
    try{
      const formData = new FormData();
      formData.append("file" , file);

      const res = await axios.post("http://localhost:3000/file", formData)
      console.log(res.data)

      const response = await axios.post("http://localhost:3000/userData" , {
        firstName : data.firstName,
        age: data.Age,
        startingDate: Date.startingDate,
        // using fileId without middleware 
        // TODO : create middleware and send the fileId with using middleware
        fileId : res.data.fileId
      })
      
      console.log(response)
      
      }catch(err){
        console.log("Error:", err )
      }
  }

  const handleEditForm = (data) => {
    data
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputBox label="first_Name" register={register} required />
        <SelectBox options={ageOptions} label="Age" register={register} />
        <CalenderBox register={register}  />
        <FileBox register={register} />
        <input type="submit" />

      </form>
    </div>
  )
}



export default FacultyForm