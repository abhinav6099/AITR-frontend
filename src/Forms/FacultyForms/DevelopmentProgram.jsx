import React from "react";
import { useForm } from "react-hook-form";
import InputBox from "../../components/InputBox";
import CalenderBox from "../../components/CalenderBox";
import SelectBox from "../../components/SelectBox";
import FileBox from "../../components/FileBox";

const programTypes = ["FDP", "Workshop", "Seminar", "Training"];
const modes = ["Online", "Offline", "Hybrid"];

const DevlopmentProgram = ({ onSubmit, register, handleSubmit, reset }) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Faculty Development Program
      </h2>

      <form onSubmit={handleSubmit((data) => { onSubmit(data); reset(); })}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputBox label="ID" name={"facultyId"} register={register} />
          <InputBox label="faculty_Name" name={"facultyName"} register={register} required />
          <InputBox label="department" name={"department"} register={register} required />
          <InputBox label="fdp_Title" name={"fdpTitle"} register={register} required />
          <InputBox label="program_Name" name={"programName"} register={register} required />
          <InputBox label="organizing_Institute" name={"organizingInstitute"} register={register} required />
          <CalenderBox label="start_Date" name={"startDate"} register={register} />
          <CalenderBox label="end_Date" name={"endDate"} register={register} />
          <SelectBox label="program_Type" name={"programType"} options={programTypes} register={register} />
          <SelectBox label="mode" name={"mode"} options={modes} register={register} />
          <InputBox label="location" name={"location"} register={register} />
          <InputBox label="duration_Days" name={"numberOfDays"} register={register} />
          <FileBox label="certificatePdf" name={"certificatePdfUrl"} register={register} />
          <InputBox label="outcome" name={"outcomeHighlights"} register={register} />
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
