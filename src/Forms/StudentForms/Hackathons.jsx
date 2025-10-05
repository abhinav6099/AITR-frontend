import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import SelectBox from "../../components/SelectBox";
import CalenderBox from "../../components/CalenderBox";
import FileBox from "../../components/FileBox";
import InputBox from "../../components/InputBox";
import DynamicUserFields from "../../components/DynamicFieldsForm";

const StudentHackathonForm = ({ onSubmit }) => {
  const methods = useForm({
    defaultValues: {
      hackathonName: "",
      organiser: "",
      teamDetails: [{ memberName: "", role: "" }], // 👈 default subform array
    },
  });

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Student Hackathon Participation Form
      </h2>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <InputBox label="Hackathon Name" name="hackathonName" register={methods.register} />
            <InputBox label="Organiser" name="organizer" register={methods.register} />

            {/* 👇 Subform for team details */}
            <DynamicUserFields label="Team Details" name="teamDetails" fieldName={"Member name"} />
            <InputBox label="Result" name="result" register={methods.register} />
            <CalenderBox label="Event Date" name="eventDate" register={methods.register} />
            <InputBox label="Team Name" name="teamName" register={methods.register} />
            <InputBox label="Team Size" name="teamSize" register={methods.register} />
            <InputBox label="Mentor Name" name="mentorName" register={methods.register} />
            <InputBox label="Venue" name="venue" register={methods.register} />
            <InputBox label="Problem Statement" name="problemStatement" register={methods.register} />
            <DynamicUserFields label="Technology Used" name="technologyUsed" fieldName={"Technology used"} addButtonLabel="Add Technology" register={methods.register} />
            <InputBox label="Prize Money" name="prizeMoney" register={methods.register} />
            <InputBox label="Position Secured" name="positionSecured" register={methods.register} />
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
      </FormProvider>
    </div>
  );
};

export default StudentHackathonForm;
