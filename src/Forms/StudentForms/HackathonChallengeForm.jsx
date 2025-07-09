import React from "react";
import { useForm } from "react-hook-form";
import InputBox from "../../components/InputBox";
import SelectBox from "../../components/SelectBox";
import CalenderBox from "../../components/CalenderBox";

const results = ["Selected", "Winner", "Finalist"];

const HackathonChallengeForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Hackathon Challenge Submitted:", data);
    reset();
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold mb-6">Hackathon / Innovation Challenge Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputBox label="Hackathon Name" register={register} required />
        <InputBox label="Organizer" register={register} required />
        <InputBox label="Team Details" register={register} required />
        <SelectBox label="Result" options={results} register={register} required />
        <CalenderBox label="Event Date" register={register} />
        <InputBox label="Team Name" register={register} />
        <InputBox label="Team Size" register={register} />
        <InputBox label="Mentor Name" register={register} />
        <InputBox label="Venue" register={register} />
        <InputBox label="Problem Statement" register={register} />
        <InputBox label="Technology Used" register={register} />
        <InputBox label="Prize Money" register={register} />
        <InputBox label="Position Secured" register={register} />
        <button type="submit" className="col-span-2 bg-blue-600 text-white px-4 py-2 rounded mt-4">Submit</button>
      </form>
    </div>
  );
};

export default HackathonChallengeForm;
