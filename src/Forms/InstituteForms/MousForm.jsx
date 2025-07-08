import React from "react";
import { useForm } from "react-hook-form";
import InputBox from "../../components/InputBox";
import CalenderBox from "../../components/CalenderBox";
import FileBox from "../../components/FileBox";

const MouForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("MoU Form Data:", data);
    reset();
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Memorandum of Understanding (MoU) Submission Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputBox
            label="Agency Name"
            name="agencyName"
            register={register}
            required
          />

          <CalenderBox
            label="Date"
            name="date"
            register={register}
            required
            type="date"
          />

          <InputBox
            label="Duration"
            name="duration"
            register={register}
            placeholder="e.g., 2 years"
            required
          />

          <InputBox
            label="Funding"
            name="funding"
            register={register}
            required
          />

          <InputBox
            label="Description"
            name="description"
            register={register}
            textarea
            required
            className="md:col-span-2"
          />

          <FileBox
            label="MoU PDF"
            name="mouPdf"
            register={register}
            accept=".pdf"
            className="md:col-span-2"
          />
          
          <button
            type="submit"
            className="col-span-2 mt-6 px-6 py-3 bg-blue-600 text-white font-semibold text-base rounded-md shadow hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>

      </form>
    </div>
  );
};

export default MouForm;
