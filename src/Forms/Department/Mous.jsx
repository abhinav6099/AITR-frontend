import React from 'react';
import { useForm } from 'react-hook-form';
import InputBox from '../../components/InputBox';
import CalenderBox from '../../components/CalenderBox';
import FileBox from '../../components/FileBox';

function Mous() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("MoU Submitted:", data);
    reset();
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Faculty MoU Submission Form
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputBox label="department Name" name="departmentName" register={register} required />
          <InputBox label="agency Name" name="agencyName" register={register} required />
          <CalenderBox label="date" name="date" register={register} required type="date" />
          <InputBox label="duration" name="duration" register={register} required />
          <InputBox label="description" name="description" register={register} required />
          <InputBox label="funding" name="funding" register={register} required />
          <FileBox label="mou Pdf" name="mouPdf" register={register} />
          <InputBox label="title Of Mou" name="titleOfMou" register={register} required />
          <InputBox label="organization Name" name="organizationName" register={register} required />
          <CalenderBox label="date Of Signing" name="dateOfSigning" register={register} required type="date" />
          <InputBox label="validity Period" name="validityPeriod" register={register} required />
          <InputBox label="purpose Objectives" name="purposeObjectives" register={register} required />
          <InputBox label="fund Support Received" name="fundSupportReceived" register={register} required />

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
}

export default Mous;
