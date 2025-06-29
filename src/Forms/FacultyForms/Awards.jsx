import React from "react";
import { useForm } from "react-hook-form";
import InputBox from "../../components/InputBox";
import CalenderBox from "../../components/CalenderBox";
import FileBox from "../../components/FileBox";
import { Input } from "postcss";

const AwardForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Award Submission:", data);
    reset();
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Faculty Award Submission
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputBox label="faculty_Name" register={register} />
          <InputBox label="award_Name" register={register} />
          <InputBox label="awarded_By" register={register} />
          <CalenderBox label="award_Date" register={register} />

          <InputBox label="category" register={register} required />
          <InputBox label="recognition_Type" register={register} required />
          <InputBox label="event_Name" register={register} required />
          <InputBox label="description" register={register} required />

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

export default AwardForm;
