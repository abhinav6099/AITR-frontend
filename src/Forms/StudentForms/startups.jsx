import React from "react";
import { useForm } from "react-hook-form";
import InputBox from "../components/form/InputBox";
import Options from "../components/form/Options";
import Button from "../components/Button";

const startUps = () => {
  const { register, handleSubmit, reset } = useForm();

  const statusOptions = ["Idea", "Prototype", "Registered"];

  const onSubmit = (data) => {
    console.log("Startup Details Submitted:", data);
    // Handle form submission (e.g., axios.post)
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-white shadow-md rounded-xl"
    >
      <InputBox
        label="Startup Name"
        name="startupName"
        register={register}
        required
      />

      <InputBox
        label="Domain"
        name="domain"
        register={register}
        required
      />

      <InputBox
        label="Incubation Support"
        name="incubationSupport"
        register={register}
        placeholder="Optional"
      />

      <Options
        label="Current Status"
        name="currentStatus"
        register={register}
        options={statusOptions}
        required
      />

      <InputBox
        label="Website or Link"
        name="websiteLink"
        register={register}
        placeholder="https://example.com"
      />

      <div className="md:col-span-2">
        <Button label="Submit Startup Info" type="submit" />
      </div>
    </form>
  );
};

export default startUps;
