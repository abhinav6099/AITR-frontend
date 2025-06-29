import React from "react";
import { useForm } from "react-hook-form";
import InputBox from "../../components/InputBox";
import SelectBox from "../../components/SelectBox";
import FileBox from "../../components/FileBox";
import CalenderBox from "../../components/CalenderBox";

const certificateTypes = ["Participation", "Completion", "Excellence", "Achievement"];
const validityOptions = ["6 Months", "1 Year", "2 Years", "Lifetime"];
const modesOfTraining = ["Online", "Offline", "Hybrid"];
const certificateStatuses = ["Active", "Expired", "Revoked"];
const verificationStatuses = ["Verified", "Not Verified"];

const StudentCertificateForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Certificate Data Submitted:", data);
    reset();
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Student Certificate Submission
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Input Fields */}
          <InputBox label="student_name" register={register} required />
          <InputBox label="enrollment_number" register={register} required />
          <InputBox label="certificate_name" register={register} required />
          <SelectBox label="certificate_type" options={certificateTypes} register={register} />
          <InputBox label="issued_by" register={register} required />
          <CalenderBox label="issue_date" register={register} />
          <SelectBox label="validity_period" options={validityOptions} register={register} />
          <InputBox label="grade_or_score" register={register} />
          <InputBox label="certificate_description" register={register} />
          <SelectBox label="mode_of_training" options={modesOfTraining} register={register} />
          <InputBox label="related_course_or_program" register={register} />
          <SelectBox label="certificate_status" options={certificateStatuses} register={register} />
          <SelectBox label="verified" options={verificationStatuses} register={register} />

          {/* File Upload */}
          <FileBox label="certificate_Pdf" register={register} />
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

export default StudentCertificateForm;
