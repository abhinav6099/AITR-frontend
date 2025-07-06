import React from "react";
import { useForm } from "react-hook-form";
import InputBox from "../../components/InputBox";
import CalenderBox from "../../components/CalenderBox";
import SelectBox from "../../components/SelectBox";
import FileBox from "../../components/FileBox";

const programTypes = ["FDP", "Workshop", "Seminar", "Training"];
const modes = ["Online", "Offline", "Hybrid"];

const DevlopmentProgram = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Faculty Program Submitted:", data);
    reset();
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Faculty Development Program
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputBox label="faculty_Name" register={register} required />
          <InputBox label="program_Name" register={register} required />
          <InputBox label="organized_By" register={register} required />
          <CalenderBox label="start_Date" register={register} />
          <CalenderBox label="end_Date" register={register} />
          <SelectBox label="program_type" options={programTypes} register={register} />
          <SelectBox label="mode" options={modes} register={register} />
          <InputBox label="location" register={register} />
          <InputBox label="duration_Days" register={register} />
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

export default DevlopmentProgram;
