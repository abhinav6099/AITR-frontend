import React from "react";
import { useForm } from "react-hook-form";
import FileBox from "../../components/FileBox";
import InputBox from "../../components/InputBox";
import SelectBox from "../../components/SelectBox";
import CalenderBox from "../../components/CalenderBox";

const statusOptions = ["Filed", "Published", "Granted", "Expired"];
const patentTypes = ["Utility", "Design", "Plant"];
const patentCategories = ["National", "International"];

const FacultyPatentForm = ({ register, handleSubmit, reset, onSubmit } ) => {

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Faculty Patent Published Form
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} >
      <InputBox label="ID" register={register} name="facultyId" required />
      <InputBox label="Faculty Name" register={register} name="facultyName" required />
      <InputBox label="Department" register={register} name="department" required />
      <InputBox label="Title" register={register} name="title" required />
      <InputBox label="Applicant" register={register} name="applicant" required />
      <InputBox label="Application Number" register={register} name="applicationNumber" required />
      <CalenderBox label="Application Date" register={register} name="applicationDate" />
      <SelectBox label="Status" options={statusOptions} register={register} name="status" />
      <InputBox label="Co-Inventors" register={register} name="coInventors" />
      <InputBox label="Country" register={register} name="country" />
      <InputBox label="Category" register={register} name="category" />
      <FileBox label="Certificate PDF" register={register} name="certificatePdf" />
      <InputBox label="Patent Title" register={register} name="patentTitle" required />
      <InputBox label="Inventors" register={register} name="inventors" required />
      <CalenderBox label="Publication Date" register={register} name="publicationDate" />
      <InputBox label="Abstract" register={register} name="abstract" multiline />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
    </div>
  );
};

export default FacultyPatentForm;
