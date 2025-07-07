import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import InputBox from '../../components/InputBox'
import  SelectBox  from '../../components/SelectBox'



function FacultyForm({register, handleSubmit, reset , onSubmit}) {

    const departments = ["Computer Science", "Mechanical", "Electrical", "Civil"];
    const experienceYears = ["0-1", "2-4", "5-7", "8+"];
    const designations = ["Assistant Professor", "Associate Professor", "Professor"];


 return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Faculty Registration Form
      </h2> 

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputBox label="facultyId" name="facultyId" register={register} required />
          <InputBox label="name" name="name" register={register} required />
          <InputBox label="email" name="email" register={register} required />
          <InputBox label="qualification" name="qualification" register={register} required />
          <SelectBox label="department" name={"department"} options={departments} register={register} />
          <InputBox label="mobile_Number" name={"mobileNumber"} register={register} required/>
          <InputBox label="category" name={"category"} register={register} required />
          <SelectBox label="teaching_Experience" name={"teachingExperience"} options={experienceYears} register={register} />
          <SelectBox label="designation" name={"designation"} options={designations} register={register} />

        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold text-base rounded-md shadow hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FacultyForm;



