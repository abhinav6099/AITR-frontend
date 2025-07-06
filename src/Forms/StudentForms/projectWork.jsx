import React from "react";
import { useForm } from "react-hook-form";
import InputBox from "../../components/InputBox";
import Options from "../../components/Options";
import Button from "../../components/Button";   

const projectWork = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Project Details Submitted:", data);
    // You can send to backend via fetch/axios here
    reset();
  };

  const outcomeOptions = ["Prototype", "Patent", "Paper"];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-white rounded-lg shadow"
    >
      <InputBox label="Project Title" name="projectTitle" register={register} required />
      <InputBox
        label="Team Members"
        name="teamMembers"
        register={register}
        placeholder="Comma-separated names"
        required
      />
      <InputBox label="Guide Name" name="guideName" register={register} required />
      <InputBox label="Semester" name="semester" register={register} required />
      <InputBox
        label="Industry Mentor"
        name="industryMentor"
        register={register}
        placeholder="Optional"
      />
      <Options
        label="Project Outcome"
        name="projectOutcome"
        register={register}
        options={outcomeOptions}
        required
      />

      <div className="md:col-span-2">
        <Button label="Submit Project" type="submit" />
      </div>
    </form>
  );
};

export default projectWork;
