import React from 'react'
import InputBox from '../../components/InputBox'
import FileBox from '../../components/FileBox'
import { useForm } from 'react-hook-form'



function ProfessionalCertificationsEarned() {
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {  
        console.log("Professional Certifications Earned Submission:", data);
        // Here you can handle the form submission, e.g., send data to an API
        reset(); // Reset the form after submission
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
        <InputBox label="faculty_Name" name="facultyName" register={register} required />
        <InputBox label="certification_Name" name="certificationName" register={register} required />
        <InputBox label="issuing_Body" name="issuingBody" register={register} required />
        <InputBox label="certification_Level (Beginner/Advanced/etc.)" name="certificationLevel" register={register} required />
        <InputBox label="validity_Period" name="validityPeriod" register={register} required />
        <InputBox label="field/domain" name="domain" register={register} required />
        <FileBox label="certificate_Upload" name="certificateUrl" register={register} />
        
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
        </form>
    </div>
  )
}

export default ProfessionalCertificationsEarned