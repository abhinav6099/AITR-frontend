import { Input } from 'postcss'
import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import InputBox from '../../components/InputBox'
import { SelectBox } from '../../components/SelectBox'

import FileBox from '../../components/FileBox'
import axios from 'axios'
import CalenderBox from '../../components/CalenderBox'

function FacultyForm() {

    const { register, handleSubmit, reset  } = useForm()

    // const [file , setFile] = useState(null)
    const departments = ["Computer Science", "Mechanical", "Electrical", "Civil"];
    const experienceYears = ["0-1", "2-4", "5-7", "8+"];
    const designations = ["Assistant Professor", "Associate Professor", "Professor"];


    const onSubmit = async(data) => {
    console.log(data)
    reset()
    // setFile(data.file[0])
    // try{
    //   const formData = new FormData();
    //   formData.append("file" , file);

    //   const res = await axios.post("http://localhost:3000/file", formData)
    //   console.log(res.data)

    //   const response = await axios.post("http://localhost:3000/userData" , {
    //     firstName : data.firstName,
    //     age: data.Age,
    //     startingDate: Date.startingDate,
    //     // using fileId without middleware 
    //     // TODO : create middleware and send the fileId with using middleware
    //     fileId : res.data.fileId
    //   })
      
    //   console.log(response)
      
    //   }catch(err){
    //     console.log("Error:", err )
    //   }
  }

 return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Faculty Registration Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputBox label="name" register={register} required />
          <InputBox label="email" register={register} required />
          <SelectBox label="department" options={departments} register={register} />
          <SelectBox label="years_of_experience" options={experienceYears} register={register} />
          <SelectBox label="designation" options={designations} register={register} />
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold text-base rounded-md shadow hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FacultyForm;



