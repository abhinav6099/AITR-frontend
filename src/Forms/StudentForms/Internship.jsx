import React from "react";
import { useForm } from "react-hook-form";
import FileBox from "../../components/FileBox";
import SelectBox from "../../components/SelectBox";
import CalenderBox from "../../components/CalenderBox";
import InputBox from "../../components/InputBox";

const internshipModes = ["Online", "Offline", "Hybrid"];
const stipends = ["Unpaid", "₹5,000", "₹10,000", "₹20,000"];
const branches = ["CSE", "IT", "ECE", "Mechanical"];
const technologies = ["React", "Node.js", "MongoDB", "Python", "Java"];
const companyLocations = ["Delhi", "Bangalore", "Remote"];
const internshipStatuses = ["Completed", "Ongoing", "Dropped"];

const StudentInternshipForm = ({ register, handleSubmit, reset, onSubmit }) => {
  

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Student Internship Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputBox label="ID" name="internshipId" register={register} required />
          <InputBox label="Student Name" name="studentName" register={register} required />
          <InputBox label="Enrollment Number" name="enrollmentNumber" register={register} required />
          <SelectBox label="Branch" name="branch" options={branches} register={register} />
          <InputBox label="Batch" name="batch" register={register} />
          <InputBox label="Year" name="year" register={register} />
          <InputBox label="Company Name" name="companyName" register={register} required />
          <InputBox label="Internship Role" name="internshipRole" register={register} />
          <SelectBox label="Mode of Internship" name="internshipMode" options={internshipModes} register={register} />
          <SelectBox label="Stipend" name="stipend" options={stipends} register={register} />
          <CalenderBox label="Start Date" name="startDate" register={register} />
          <CalenderBox label="End Date" name="endDate" register={register} />
          <SelectBox label="Technology Used" name="technologyUsed" options={technologies} register={register} />
          <InputBox label="Project Name" name="projectName" register={register} />
          <InputBox label="Project Description" name="projectDescription" register={register} />
          <SelectBox label="Company Location" name="companyLocation" options={companyLocations} register={register} />
          <InputBox label="Area of Work" name="areaOfWork" register={register} />
          <FileBox label="Certificate / Report Upload" name="certificatePdf" register={register} />
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

export default StudentInternshipForm;
