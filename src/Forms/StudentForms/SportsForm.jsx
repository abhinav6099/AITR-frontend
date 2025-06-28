import React from "react";
import { useForm } from "react-hook-form";
import InputBox from "../../components/InputBox";
import SelectBox  from "../../components/SelectBox";
import CalenderBox from "../../components/CalenderBox";
import FileBox from "../../components/FileBox";

const eventNames = ["Annual Sports Meet", "District Championship", "State Tournament", "National Games"];
const eventLevels = ["School", "District", "State", "National"];
const eventLocations = ["Delhi", "Mumbai", "Chennai", "Kolkata"];
const positions = ["1st", "2nd", "3rd", "Participation"];

const SportForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Sports Achievement Submitted:", data);
    reset();
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Student Sports Achievement Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputBox label="student_Name" register={register} />
          <InputBox label="sport_Name" register={register} />
          <InputBox label="achievement" register={register} />
          <CalenderBox label="event_Date" register={register} />

          <SelectBox label="event_Name" options={eventNames} register={register} />
          <SelectBox label="event_Level" options={eventLevels} register={register} />
          <SelectBox label="event_Location" options={eventLocations} register={register} />
          <SelectBox label="position" options={positions} register={register} />

          <InputBox label="coachName" register={register} required />
          <FileBox label="certificate" register={register} />
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

export default SportForm;
