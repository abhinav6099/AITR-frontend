import React from "react";
import { useForm } from "react-hook-form";
import InputBox from "../../components/InputBox";
import SelectBox from "../../components/SelectBox";
import CalenderBox from "../../components/CalenderBox";
import FileBox from "../../components/FileBox";

const levels = ["Institute", "State", "National", "International"];
const eventModes = ["Online", "Offline", "Hybrid"];
const achievements = ["Participation", "Winner", "Rank Holder"];

const Hackathons = ({ onSubmit: parentSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Hackathon Data Submitted:", data);
    parentSubmit && parentSubmit(data);
    reset();
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Student Hackathon Participation Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputBox label="ID" name="hackathonId" register={register} required />
          <InputBox label="Student Name" name="studentName" register={register} required />
          <InputBox label="Enrollment Number" name="enrollmentNumber" register={register} required />
          <InputBox label="Branch" name="branch" register={register} required />
          <InputBox label="Batch" name="batch" register={register} />
          <InputBox label="Year" name="year" register={register} />
          <InputBox label="Competition Name" name="competitionName" register={register} required />
          <CalenderBox label="Date" name="date" register={register} />
          <InputBox label="Team Name" name="teamName" register={register} />
          <InputBox label="Team Size" name="teamSize" register={register} />
          <InputBox label="Mentor Name" name="mentorName" register={register} />
          <SelectBox label="Level" name="level" options={levels} register={register} />
          <InputBox label="Organizer" name="organizer" register={register} />
          <InputBox label="Venue" name="venue" register={register} />
          <InputBox label="Problem Statement" name="problemStatement" register={register} />
          <InputBox label="Technology Used" name="technologyUsed" register={register} />
          <InputBox label="Prize Money" name="prizeMoney" register={register} />
          <InputBox label="Sponsoring Agency" name="sponsoringAgency" register={register} />
          <InputBox label="Position Secured" name="positionSecured" register={register} />
          <InputBox label="Project GitHub Link" name="githubLink" register={register} />
          <InputBox label="Project Description" name="projectDescription" register={register} />
          <SelectBox label="Event Mode" name="eventMode" options={eventModes} register={register} />
          <SelectBox label="Achievement" name="achievement" options={achievements} register={register} />
          <FileBox label="Certificate PDF" name="certificatePdf" register={register} />
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

export default Hackathons;
