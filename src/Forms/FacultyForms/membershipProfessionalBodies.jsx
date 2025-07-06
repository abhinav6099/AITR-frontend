import React from 'react'
import InputBox from '../../components/InputBox'
import SelectBox from '../../components/SelectBox'
import CalenderBox from '../../components/CalenderBox'
import { useForm } from 'react-hook-form'

function membershipProfessionalBodies() {

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {  
        console.log("Membership Professional Bodies Submission:", data);
        // Here you can handle the form submission, e.g., send data to an API
        reset(); // Reset the form after submission
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
        <InputBox label="Faculty Name" name="facultyName" register={register} required />
        <InputBox label="Name of Organization (IEEE, ISTE, ACM, etc.)" name="organization" register={register} required />
        
        <SelectBox
            label="Membership Type"
            name="membershipType"
            options={["Life", "Annual", "Student", "Professional"]}
            register={register}
            required
        />
        
        <InputBox label="Membership ID" name="membershipId" register={register} required />
        
        <CalenderBox label="Date of Joining" name="dateOfJoining" register={register} required />
        
        <SelectBox
            label="Current Status"
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

export default membershipProfessionalBodies