import React from 'react'
import InputBox from '../../components/InputBox'
import FileBox from '../../components/FileBox'
import { useForm } from 'react-hook-form'  

function acedmicQualificationDiscipline() {
    const { register, handleSubmit, reset } = useForm()
    
    const onSubmit = async (data) => {  
        console.log("Academic Qualification Discipline Submission:", data);
        // Here you can handle the form submission, e.g., send data to an API
        reset(); // Reset the form after submission
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
        <InputBox label="Highest Degree Earned" name="highestDegree" register={register} required />
        
        <InputBox label="University/Institute" name="universityOrInstitute" register={register} required />
        
        <InputBox label="Specialization" name="specialization" register={register} required />
        
        <InputBox
            label="Year of Completion"
            name="yearOfCompletion"
            register={register}
            type="number"
            required
        />
        
        <FileBox label="Supporting Document (Certificate)" name="certificateUrl" register={register} />

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
        </form>

    </div>
  )
}

export default acedmicQualificationDiscipline