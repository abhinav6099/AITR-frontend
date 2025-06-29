import React from "react";
import { useForm } from "react-hook-form";
import FileBox from "../../components/FileBox";
import SelectBox from "../../components/SelectBox";
import CalenderBox from "../../components/CalenderBox";
import InputBox from "../../components/InputBox";

const StudentInternshipForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Internship Data Submitted:", data);
    reset();
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Student Internship Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Select Fields */}
          <InputBox label="studentName"  register={register} />
          <InputBox label="enrollment_Number" register={register} />
          <SelectBox label="company_Name" options={["TCS", "Infosys", "Wipro"]} register={register} />
          <SelectBox label="role" options={["Frontend Developer", "Backend Developer", "Data Analyst"]} register={register} />
          <SelectBox label="internship_Type" options={["Online", "Offline", "Hybrid"]} register={register} />
          <SelectBox label="stipend" options={["Unpaid", "₹5,000", "₹10,000"]} register={register} />
          <SelectBox label="duration" options={["1 month", "3 months", "6 months"]} register={register} />
          <SelectBox label="department" options={["CSE", "IT", "ECE"]} register={register} />
          <SelectBox label="mentorName" options={["Dr. Sharma", "Mr. Gupta"]} register={register} />
          <SelectBox label="mentorEmail" options={["mentor1@domain.com", "mentor2@domain.com"]} register={register} />
          <SelectBox label="technologies_Used" options={["React", "Node.js", "MongoDB", "Python"]} register={register} />
          <SelectBox label="project_Name" options={["Student Portal", "E-commerce App"]} register={register} />
          <SelectBox label="project_Description" options={["Web development project", "AI-powered chatbot"]} register={register} />
          <SelectBox label="skills_Gained" options={["Teamwork", "Problem Solving", "Leadership"]} register={register} />
          <SelectBox label="company_Location" options={["Delhi", "Bangalore", "Remote"]} register={register} />
          <SelectBox label="internship_Status" options={["Completed", "Ongoing", "Dropped"]} register={register} />

          {/* Calendar Fields */}
          <CalenderBox label="start_Date" register={register} />
          <CalenderBox label="end_Date" register={register} />

          {/* File Uploads */}
          <InputBox label="offerLetter_Link" register={register} />
          <InputBox label="experience_LetterLink" register={register} />
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

export default StudentInternshipForm;
