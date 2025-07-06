import React from 'react'
import InputBox from '../../components/InputBox'
import SelectBox from '../../components/SelectBox'
import { useForm } from 'react-hook-form'

function researchProjectsGuided() {

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
            label="Project Title"
            name="projectTitle"
            register={register}
            required
        />

        <SelectBox
            label="Level"
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
            label="Student Names (comma-separated)"
            name="studentNames"
            register={register}
            placeholder="e.g., John Doe, Jane Smith"
            required
        />

        <SelectBox
            label="Outcome"
            name="outcome"
            register={register}
            options={[
            { value: "Publication", label: "Publication" },
            { value: "Patent", label: "Patent" },
            { value: "Prototype", label: "Prototype" },
            { value: "Other", label: "Other" }
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

export default researchProjectsGuided