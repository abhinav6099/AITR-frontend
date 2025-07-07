import React from 'react'
import InputBox from '../../components/InputBox'
import FileBox from '../../components/FileBox'
import CalenderBox from '../../components/CalenderBox'
import { useForm } from 'react-hook-form'


function PatentGrantedForm() {

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {  
        console.log("Patent Granted Submission:", data);
        // Here you can handle the form submission, e.g., send data to an API
        reset(); // Reset the form after submission
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
        <InputBox label="patent_Title" name="patentTitle" register={register} required />
        <InputBox label="investors" name="inventors" register={register} required />
        <InputBox label="grant_Number" name="grantNumber" register={register} required />
        <CalenderBox label="date_Of_Grant" name="dateOfGrant" register={register} required />
        <InputBox label="country_Of_Grant" name="countryOfGrant" register={register} required />
        <InputBox label="application_Number" name="applicationNumber" register={register} required />
        <FileBox label="patent_Certificate_Upload" name="patentCertificateUrl" register={register} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
        </form>

    </div>
  )
}

export default PatentGrantedForm



