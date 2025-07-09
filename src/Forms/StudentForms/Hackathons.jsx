import React from "react";
import { useForm } from "react-hook-form";
import SelectBox from "../../components/SelectBox";
import CalenderBox from "../../components/CalenderBox";
import FileBox from "../../components/FileBox";
import InputBox from "../../components/InputBox";

const StudentHackathonForm = ({ register, handleSubmit, reset, onSubmit }) => {

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Student Hackathon Participation Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CalenderBox Fields */}
          <InputBox label="Hackathon_Name" name={"hackathonName"}  register={register} />
          <InputBox label="Organiser" name={"organiser"} register={register} />
          <InputBox label="Team Details" name={"teamDetails"} register={register} />
          <InputBox label="Result" name={"name"} register={register} />

          {/* SelectBox Fields */}
          <CalenderBox label="Event Date" name={"eventDate"} register={register} />
          <InputBox label="team_Details" name={"teamDetails"} register={register} />
          <InputBox label="result" name={"result"} register={register} />
          <CalenderBox label="event_date" name={"eventDate"} register={register} />
          <InputBox label="team_Name" name={"teamName"} register={register} />
          <InputBox label="team_Size" name={"teamSize"} register={register} />
          <InputBox label="mentor name" name={"mentorName"} register={register} />
          <InputBox label="venue" name={"venue"} register={register} />
          <InputBox label="problem statement" name={"problemStatement"} register={register} />
          <InputBox label="technology used" name={"technologyUsed"} register={register} />
          <InputBox label="price Money" name={"prizeMoney"} register={register} />
          <InputBox label="position Secured" name={"positionSecured"} register={register} />

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

export default StudentHackathonForm;
