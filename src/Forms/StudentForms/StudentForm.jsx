import React from "react";
import { useForm } from "react-hook-form";
import InputBox from "../../components/InputBox";
import FileBox from "../../components/FileBox";

const StudentForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    reset();
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Student Achievement Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputBox label="hackathon" register={register} required />
          <InputBox label="placement" register={register} required />
          <InputBox label="internship" register={register} required />
          <InputBox label="researchpaper" register={register} required />
          <InputBox label="sports" register={register} required />
          <FileBox label="Upload Certificate" register={register} />
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

export default StudentForm;
