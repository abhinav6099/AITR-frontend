import React from "react";
import { useForm } from "react-hook-form";
import SelectBox from "../../components/SelectBox";
import InputBox from "../../components/InputBox";
import FileBox from "../../components/FileBox";
import CalenderBox from "../../components/CalenderBox";

const studentNames = ["John Doe", "Jane Smith", "Ajay Sahani"];
const companies = ["Google", "TCS", "Infosys", "Amazon"];
const jobRoles = ["Software Engineer", "Data Analyst", "Frontend Developer"];
const branches = ["CSE", "ECE", "Mechanical", "Civil"];
const placementTypes = ["On Campus", "Off Campus"];
const packages = ["4 LPA", "6 LPA", "10 LPA"];
const companyLocations = ["Bangalore", "Hyderabad", "Pune", "Delhi"];
const interviewModes = ["Online", "Offline", "Hybrid"];

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
          <InputBox label="student_name" options={studentNames} register={register} />
          <SelectBox label="company_name" options={companies} register={register} />
          <SelectBox label="job_role" options={jobRoles} register={register} />
          <SelectBox label="branch" options={branches} register={register} />
          <SelectBox label="placement_type" options={placementTypes} register={register} />
          <SelectBox label="package" options={packages} register={register} />
          <SelectBox label="company_location" options={companyLocations} register={register} />
          <SelectBox label="interview_mode" options={interviewModes} register={register} />
          <CalenderBox label="joining_date" register={register} />
          <FileBox label="offer_letter_pdf" register={register} />
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
