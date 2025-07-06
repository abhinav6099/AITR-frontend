import React from 'react'
import InputBox from '../../../components/InputBox'
import SelectBox from '../../../components/SelectBox'
import CalenderBox from '../../../components/CalenderBox'
import { useForm } from 'react-hook-form'

function phDSupervision() {
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {  
        console.log("PhD Supervision Submission:", data);
        // Here you can handle the form submission, e.g., send data to an API
        reset(); // Reset the form after submission
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
        <InputBox label="Faculty Name" name="facultyName" register={register} required />

        <InputBox label="PhD Scholar Name" name="phdScholarName" register={register} required />

        <InputBox label="University Affiliation" name="universityAffiliation" register={register} required />

        <SelectBox
            label="Status"
            name="status"
            register={register}
            options={[
            { value: "Ongoing", label: "Ongoing" },
            { value: "Completed", label: "Completed" }
            ]}
            required
        />

        <InputBox label="Research Topic" name="researchTopic" register={register} required />

        <CalenderBox
            label="Date of Registration/Completion"
            name="date"
            register={register}
            required
        />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit
        </button>
        </form>

    </div>
  )
}

export default phDSupervision