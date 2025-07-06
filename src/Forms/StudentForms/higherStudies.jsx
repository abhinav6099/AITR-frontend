import React from "react";
import { useForm } from "react-hook-form";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";


const EducationProgramForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Education Program Data:", data);
    // Send to API if needed
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-white rounded-xl shadow"
    >
      <InputBox
        label="Name of the Course"
        name="courseName"
        register={register}
        required
      />

      <InputBox
        label="Scholarship (if any)"
        name="scholarship"
        register={register}
        placeholder="Optional"
      />

      <InputBox
        label="Name of the Institute"
        name="instituteName"
        register={register}
        required
      />

      <InputBox
        label="City"
        name="city"
        register={register}
        required
      />

      <InputBox
        label="Country"
        name="country"
        register={register}
        required
      />

      <InputBox
        label="Duration of Program"
        name="programDuration"
        register={register}
        placeholder="e.g., 2 years"
        required
      />

      <InputBox
        label="Admission Year"
        name="admissionYear"
        register={register}
        required
      />

      <div className="md:col-span-2">
        <Button label="Submit" type="submit" />
      </div>
    </form>
  );
};

export default EducationProgramForm;
