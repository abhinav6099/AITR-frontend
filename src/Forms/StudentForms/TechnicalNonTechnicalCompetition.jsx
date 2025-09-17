import React from 'react'
import InputBox from "../../components/InputBox";
import SelectBox from "../../components/SelectBox";
import CalenderBox from "../../components/CalenderBox";
import FileBox from "../../components/FileBox";

const genderOptions = ["Male", "Female", "Other"];
const categoryOptions = ["General", "OBC", "SC", "ST", "Other"];
const statusOptions = ["Pursuing", "Graduated"];
const courseOptions = ["B.Tech", "M.Tech", "B.Sc", "M.Sc", "MBA"]; // Add more as needed

const TechnicalNonTechnicalCompetition = ({ register, handleSubmit, onSubmit, reset }) => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Technical/Non-Technical Form
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InputBox label="ID" name="studentId" register={register} required />
          <InputBox label="Name" name="name" register={register} required />
          <InputBox label="Enrollment Number" name="enrollmentNumber" register={register} required />
          <InputBox label="Branch" name="branch" register={register} required />
          <InputBox label="Batch" name="batch" register={register} />
          <InputBox label="Year" name="year" register={register} required />
          <InputBox label="Competition name" name="competitionName" register={register} />
          <CalenderBox label="date" name="data" register={register} />
          <InputBox label="Team name" name="teamName" options={genderOptions} register={register} />
          <InputBox label="Team size" name="teamSize" options={categoryOptions} register={register} />
          <InputBox label="Mentor name" name="mentorName" register={register} />
          <SelectBox label="Level" name="level" options={["Institute", "State", "National", "International"]} register={register} />
          <InputBox label="Organizer" name="organiser" register={register} />
          <InputBox label="venue" name="venue" register={register} />
          <InputBox label="problem statement" name="problemStatement" register={register} />
          <InputBox label="Parent/Guardian Contact No" name="technologyUsed" register={register} />
          <InputBox label="Price money" name="priceMoney" register={register} />
          <InputBox label="Sponsoring agency" name="sponsoringAgency" register={register} />
          <InputBox label="position Acquired" name="positionAcquired" register={register} />
          <InputBox label="project github link" name="projectGithubLink" register={register} />
          <InputBox label="Event mode" name="eventMode" register={register} />
          <SelectBox label="Achievement" name="achievement" options={["Participation", "Winner" , "Rank"]} register={register} />
          <FileBox register={register} name="file" label="Certificate" />
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


export default TechnicalNonTechnicalCompetition