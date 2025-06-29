import React from "react";
import { useForm } from "react-hook-form";
import FileBox from "../../components/FileBox";
import InputBox from "../../components/InputBox";
import SelectBox from "../../components/SelectBox";
import CalenderBox from "../../components/CalenderBox";

const statusOptions = ["Filed", "Published", "Granted", "Expired"];
const patentTypes = ["Utility", "Design", "Plant"];
const patentCategories = ["National", "International"];

const FacultyPatentForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Patent Submission:", data);
    reset();
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Faculty Patent Submission Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputBox label="faculty_Name" register={register} required />
          <InputBox label="patent_Title" register={register} required />
          <InputBox label="patent_Number" register={register} />
          <CalenderBox label="application_Date" register={register} />
          <SelectBox label="status" options={statusOptions} register={register} />
          <InputBox label="inventor_Names" register={register} />
          <SelectBox label="patentType" options={patentTypes} register={register} />
          <InputBox label="patent_Office" register={register} />
          <CalenderBox label="grant_Date" register={register} />
          <CalenderBox label="expiry_Date" register={register} />
          <InputBox label="country" register={register} />
          <SelectBox label="patent_Category" options={patentCategories} register={register} />
          <FileBox label="certificatePdf" register={register} />
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

export default FacultyPatentForm;
