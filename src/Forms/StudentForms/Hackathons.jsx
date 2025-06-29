import React from "react";
import { useForm } from "react-hook-form";
import SelectBox from "../../components/SelectBox";
import CalenderBox from "../../components/CalenderBox";
import FileBox from "../../components/FileBox";
import InputBox from "../../components/InputBox";

const StudentHackathonForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Hackathon Form Submitted:", data);
    reset();
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Student Hackathon Participation Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CalenderBox Fields */}
          <InputBox label="student_Name" register={register} />
          <InputBox label="enrollment_Number" register={register} />
          <InputBox label="event_Name" register={register} />
          <CalenderBox label="date" register={register} />

          {/* SelectBox Fields */}
          <SelectBox label="team_Name" options={["Team Alpha", "Team Beta"]} register={register} />
          <SelectBox label="team_Size" options={["1", "2", "3", "4", "5+"]} register={register} />
          <SelectBox label="mentor_Name" options={["Dr. Singh", "Ms. Rao"]} register={register} />
          <SelectBox label="hackathon_Type" options={["Online", "Offline", "Hybrid"]} register={register} />
          <SelectBox label="organizing_Body" options={["AICTE", "MLSA", "GDSC", "Private Org"]} register={register} />
          <SelectBox label="venue" options={["IIT Delhi", "NIT Trichy", "IIIT Hyderabad"]} register={register} />
          <SelectBox label="problem_Statement" options={["AI for Education", "Climate Change", "Healthcare"]} register={register} />
          <SelectBox label="technology_Used" options={["React", "Node", "Python", "TensorFlow"]} register={register} />
          <SelectBox label="prize_Money" options={["None", "₹5,000", "₹10,000", "₹50,000+"]} register={register} />
          <SelectBox label="sponsoring_Company" options={["Google", "TCS", "Infosys"]} register={register} />
          <SelectBox label="position" options={["1st", "2nd", "3rd", "Participation"]} register={register} />
          <SelectBox label="project_GithubLink" options={["https://github.com/team-alpha", "https://github.com/team-beta"]} register={register} />
          <SelectBox label="project_Description" options={["AI tool", "Mobile App", "Web Dashboard"]} register={register} />
          <SelectBox label="certificate_Status" options={["Received", "Pending", "Not Provided"]} register={register} />

          {/* FileBox */}
          <FileBox label="certificatePdf" register={register} />
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
