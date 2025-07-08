import React from 'react';
import { useForm } from 'react-hook-form';
import InputBox from '../../components/InputBox';
import CalenderBox from '../../components/CalenderBox';

const ProfessionalMembershipForm = ({ onSubmit: parentSubmit, register, handleSubmit, reset }) => {
  const onSubmit = (data) => {
    console.log("Professional Membership Data:", data);
    parentSubmit && parentSubmit(data);
    reset();
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Professional Membership Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputBox label="Organization Name" name="organizationName" register={register} required />
        <InputBox label="Membership ID" name="membershipId" register={register} required />
        <CalenderBox label="Date of Joining" name="joiningDate" register={register} />
        <InputBox label="Membership Status" name="membershipStatus" register={register} required />
        <div className="md:col-span-2">
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ProfessionalMembershipForm;
