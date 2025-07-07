import React from 'react'
import InputBox from '../../components/InputBox'
import SelectBox from '../../components/SelectBox'
import CalenderBox from '../../components/CalenderBox'
import { useForm } from 'react-hook-form'

function PhDSupervision() {
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {  
        console.log("PhD Supervision Submission:", data);
        // Here you can handle the form submission, e.g., send data to an API
        reset(); // Reset the form after submission
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
        <InputBox label="faculty_Name" name="facultyName" register={register} required />

        <InputBox label="phd_Scholar_Name" name="phdScholarName" register={register} required />

        <InputBox label="university_Affiliation" name="universityAffiliation" register={register} required />

        <SelectBox
            label="status"
            name={"status"}
            register={register}
            options={[
            "ongoing",
            "completed",
            ]}
            required
        />

        <InputBox label="research_Topic" name="researchTopic" register={register} required />

        <CalenderBox
            label="registration_Date"
            name="date"
            register={register}
            required
        />

        <CalenderBox label="completion_Date" name="completionDate" register={register} />


        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit
        </button>
        </form>

    </div>
  )
}

export default PhDSupervision