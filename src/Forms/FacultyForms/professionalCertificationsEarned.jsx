import React from 'react'
import InputBox from '../../components/InputBox'
import FileBox from '../../components/FileBox'
import { useForm } from 'react-hook-form'



function professionalCertificationsEarned() {
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {  
        console.log("Professional Certifications Earned Submission:", data);
        // Here you can handle the form submission, e.g., send data to an API
        reset(); // Reset the form after submission
    }
    
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
        <InputBox label="Faculty Name" name="facultyName" register={register} required />
        <InputBox label="Certification Name" name="certificationName" register={register} required />
        <InputBox label="Issuing Body" name="issuingBody" register={register} required />
        <InputBox label="Certification Level (Beginner/Advanced/etc.)" name="certificationLevel" register={register} required />
        <InputBox label="Validity Period" name="validityPeriod" register={register} required />
        <InputBox label="Field/Domain" name="field" register={register} required />
        <FileBox label="Certificate Upload" name="certificateUpload" register={register} />
        
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
        </form>
    </div>
  )
}

export default professionalCertificationsEarned