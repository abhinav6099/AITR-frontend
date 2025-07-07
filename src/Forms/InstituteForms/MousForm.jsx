import React from "react";
import { useForm } from "react-hook-form";
import InputBox from "../../components/InputBox";
import CalenderBox from "../../components/CalenderBox";
import FileBox from "../../components/FileBox";


const MouForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Handle form submission (e.g., POST to backend)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 bg-white shadow-md rounded-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">MoU Form</h2>

      <InputBox label="Agency Name" register={register} name="agencyName" required />
      
      <CalenderBox label="Date" register={register} name="date" required />

      <InputBox label="Duration" register={register} name="duration" placeholder="e.g., 2 years" required />

      <InputBox label="Description" register={register} name="description" textarea required />

      <InputBox label="Funding" register={register} name="funding" required />

      <FileBox label="MoU PDF" register={register} name="mouPdf" accept=".pdf" />

      <input type="submit" value="Submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md cursor-pointer" />
    </form>
  );
};

export default MouForm;
