import React from 'react';
import { useForm } from 'react-hook-form';
import InputBox from '../../components/InputBox';
import CalenderBox from '../../components/CalenderBox';
import FileBox from '../../components/FileBox';

const RDInitiatives = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("R&D Initiative Submitted:", data);
    reset();
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        R&D Initiatives Submission Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputBox label="department Name" name="departmentName" register={register} required />
          <InputBox label="agency Name" name="agencyName" register={register} required />
          <CalenderBox label="date" name="date" register={register} required type="date" />
          <InputBox label="duration" name="duration" register={register} required />
          <InputBox label="description" name="description" register={register} required />
          <InputBox label="funding" name="funding" register={register} required />
          <FileBox label="pdf" name="pdf" register={register} />
          <InputBox label="project Title" name="projectTitle" register={register} required />
          <InputBox label="funding Agency" name="fundingAgency" register={register} required />
          <InputBox label="principal Investigator" name="principalInvestigator" register={register} required />
          <InputBox label="co Investigator" name="coInvestigator" register={register} />
          <InputBox label="budget" name="budget" register={register} required />
          <InputBox label="output Patents Publications" name="outputPatentsPublications" register={register} />

          <button
            type="submit"
            className="col-span-2 mt-6 px-6 py-3 bg-blue-600 text-white font-semibold text-base rounded-md shadow hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RDInitiatives;
