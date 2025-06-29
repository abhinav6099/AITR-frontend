import React from "react";
import { useForm } from "react-hook-form";
import InputBox from "../../components/InputBox";

const ResearchPaper = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Research Paper Submitted:", data);
    reset();
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Research Paper Submission
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputBox label="faculty_name" register={register} required />
          <InputBox label="title" register={register} required />
          <InputBox label="publication_date" register={register} required />
          <InputBox label="journal_name" register={register} required />
          <InputBox label="co_authors" register={register} required />
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

export default ResearchPaper;
