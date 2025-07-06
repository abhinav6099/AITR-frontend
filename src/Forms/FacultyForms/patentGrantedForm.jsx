import React from 'react'
import InputBox from '../../components/InputBox'
import FileBox from '../../components/FileBox'
import CalenderBox from '../../components/CalenderBox'
import { useForm } from 'react-hook-form'


function patentGrantedForm() {

    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {  
        console.log("Patent Granted Submission:", data);
        // Here you can handle the form submission, e.g., send data to an API
        reset(); // Reset the form after submission
    }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
        <InputBox label="Patent Title" name="patentTitle" register={register} required />
        <InputBox label="Inventors (Comma-separated)" name="inventors" register={register} required />
        <InputBox label="Grant Number" name="grantNumber" register={register} required />
        <CalenderBox label="Date of Grant" name="dateOfGrant" register={register} required />
        <InputBox label="Country of Grant" name="countryOfGrant" register={register} required />
        <InputBox label="Application Number" name="applicationNumber" register={register} required />
        <FileBox label="Patent Certificate Upload" name="patentCertificateUrl" register={register} />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
        </form>

    </div>
  )
}

export default patentGrantedForm



