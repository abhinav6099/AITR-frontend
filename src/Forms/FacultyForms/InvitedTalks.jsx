import React from 'react'
import InputBox from '../../components/InputBox'
import SelectBox from '../../components/SelectBox'
import CalenderBox from '../../components/CalenderBox'
import FileBox from '../../components/FileBox'
import { useForm } from 'react-hook-form'

function InvitedTalks() {
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
            label="faculty_Name"
            name="facultyName"
            register={register}
            required
        />

        <InputBox
            label="title_Of_Talk"
            name="titleOfTalk"
            register={register}
            required
        />

        <InputBox
            label="event_Name"
            name="eventName"
            register={register}
            required
        />

        <InputBox
            label="organizing_Body"
            name="organizingBody"
            register={register}
            required
        />

        <CalenderBox
            label="date"
            name="date"
            register={register}
            required
        />

        <SelectBox
            label="nature_Of_Engagement"
            name="natureOfEngagement"
            register={register}
            options={[
            "Keynote", 
            "Panelist",
            "Speaker", 
            ]}
            required
        />

        <FileBox
            label="certificate_Url"
            name="certificateUrl"
            register={register}
        />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit
        </button>
        </form>

    </div>
  )
}

export default InvitedTalks