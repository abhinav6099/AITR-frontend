import React from 'react'
import InputBox from '../../components/InputBox'
import SelectBox from '../../components/SelectBox'
import CalenderBox from '../../components/CalenderBox'
import FileBox from '../../components/FileBox'
import { useForm } from 'react-hook-form'

function invitedTalks() {
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {  
        console.log("Invited Talks Submission:", data);
        // Here you can handle the form submission, e.g., send data to an API
        reset(); // Reset the form after submission
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">

        <InputBox
            label="Faculty Name"
            name="facultyName"
            register={register}
            required
        />

        <InputBox
            label="Title of Talk/Session"
            name="talkTitle"
            register={register}
            required
        />

        <InputBox
            label="Event Name"
            name="eventName"
            register={register}
            required
        />

        <InputBox
            label="Organizing Body"
            name="organizingBody"
            register={register}
            required
        />

        <CalenderBox
            label="Date"
            name="date"
            register={register}
            required
        />

        <SelectBox
            label="Nature of Engagement"
            name="engagementNature"
            register={register}
            options={[
            { value: "Keynote", label: "Keynote" },
            { value: "Panelist", label: "Panelist" },
            { value: "Speaker", label: "Speaker" }
            ]}
            required
        />

        <FileBox
            label="Supporting Letter or Certificate"
            name="supportingCertificate"
            register={register}
        />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit
        </button>
        </form>

    </div>
  )
}

export default invitedTalks