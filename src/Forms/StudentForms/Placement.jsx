import React from "react";
import { useForm } from "react-hook-form";
import SelectBox from "../../components/SelectBox";
import InputBox from "../../components/InputBox";
import FileBox from "../../components/FileBox";
import CalenderBox from "../../components/CalenderBox";

const branches = ["CSE", "ECE", "Mechanical", "Civil"];
const placementTypes = ["On Campus", "Off Campus"];
const companyLocations = ["Bangalore", "Hyderabad", "Pune", "Delhi"];

const StudentPlacementForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Placement Form Submitted:", data);
    reset();
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Student Placement Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputBox label="ID" name="placementId" register={register} required />
          <InputBox label="Student Name" name="studentName" register={register} required />
          <InputBox label="Company Name" name="companyName" register={register} required />
          <SelectBox label="Company Location" name="companyLocation" options={companyLocations} register={register} />
          <InputBox label="Role Offered" name="roleOffered" register={register} required />
          <SelectBox label="Branch" name="branch" options={branches} register={register} required />
          <InputBox label="Batch" name="batch" register={register} />
          <InputBox label="Year" name="year" register={register} />
          <SelectBox label="Placement Type" name="placementType" options={placementTypes} register={register} />
          <InputBox label="Package" name="package" register={register} />
          <CalenderBox label="Joining Date" name="joiningDate" register={register} />
          <FileBox label="Offer Letter PDF" name="offerLetterPdf" register={register} />
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

export default StudentPlacementForm;
