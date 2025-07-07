import React from 'react'
import InputBox from '../../components/InputBox'
import SelectBox from '../../components/SelectBox'
import CalenderBox from '../../components/CalenderBox'
import { useForm } from 'react-hook-form'

function MembershipProfessionalBodies() {

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {  
        console.log("Membership Professional Bodies Submission:", data);
        // Here you can handle the form submission, e.g., send data to an API
        reset(); // Reset the form after submission
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
        <InputBox label="faculty_Name" name="facultyName" register={register} required />
        <InputBox label="name_Of_Organization" name="organizationName" register={register} required />
        
        <SelectBox
            label="membership_Type"
            name="membershipType"
            options={["Life", "Annual", "Student", "Professional"]}
            register={register}
            required
        />
        
        <InputBox label="membership_ID" name="membershipId" register={register} required />
        
        <CalenderBox label="date_Of_Joining" name="dateOfJoining" register={register} required />
        
        <SelectBox
            label="current_Status"
            name="currentStatus"
            options={["Active", "Expired"]}
            register={register}
            required
        />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
        </form>

    </div>
  )
}

export default MembershipProfessionalBodies