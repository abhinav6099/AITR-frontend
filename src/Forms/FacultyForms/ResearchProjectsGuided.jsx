import React from 'react'
import InputBox from '../../components/InputBox'
import SelectBox from '../../components/SelectBox'
import { useForm } from 'react-hook-form'

function ResearchProjectsGuided() {

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {  
        console.log("Research Projects Guided Submission:", data);
        // Here you can handle the form submission, e.g., send data to an API
        reset(); // Reset the form after submission
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">

        <InputBox
            label="project_Title"
            name="projectTitle"
            register={register}
            required
        />

        <SelectBox
            label="level"
            name="level"
            register={register}
            options={[
            { value: "UG", label: "UG" },
            { value: "PG", label: "PG" },
            { value: "PhD", label: "PhD" }
            ]}
            required
        />

        <InputBox
            label="student_Names"
            name="studentNames"
            register={register}
            placeholder="e.g., John Doe, Jane Smith"
            required
        />

        <SelectBox
            label="outcome"
            name="outcome"
            register={register}
            options={[
             "Publication",
             "Patent",
             "Prototype",
             "Other"
            ]}
            required
        />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit
        </button>
        </form>

    </div>
  )
}

export default ResearchProjectsGuided