import React from "react";
import { useForm } from "react-hook-form";
import InputBox from "../../components/InputBox";
import FileBox from "../../components/FileBox";
import CalenderBox from "../../components/CalenderBox";

const AgencyForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // You can send this to your API here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 bg-white shadow-lg rounded-md max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Agency Details Form</h2>

      <InputBox label="Agency Name" name="agencyName" register={register} required />

      <CalenderBox label="Date" name="date" register={register} required />

      <InputBox label="Duration" name="duration" register={register} placeholder="e.g., 3 years" required />

      <InputBox label="Description" name="description" register={register} textarea required />

      <InputBox label="Funding" name="funding" register={register} required />

      <FileBox label="Upload PDF" name="pdf" register={register} accept=".pdf" />

      <input
        type="submit"
        value="Submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-md"
      />
    </form>
  );
};

export default AgencyForm;
