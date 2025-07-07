import React from 'react'
import InputBox from '../../components/InputBox'
import FileBox from '../../components/FileBox'
import { useForm } from 'react-hook-form'  

function AcedmicQualificationDiscipline() {
    const { register, handleSubmit, reset } = useForm()
    
    const onSubmit = async (data) => {  
        console.log("Academic Qualification Discipline Submission:", data);
        // Here you can handle the form submission, e.g., send data to an API
        reset(); // Reset the form after submission
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">

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

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
        </form>

    </div>
  )
}

export default AcedmicQualificationDiscipline

