import React from "react";
import { useForm, FormProvider} from "react-hook-form";
import InputBox from "../../components/InputBox";
import SelectBox from "../../components/SelectBox";
import FileBox from "../../components/FileBox";
import DynamicUserFields from "../../components/DynamicFieldsForm";
const outcomes = ["Prototype", "Patent", "Paper"];

const CapstoneProjectForm = ({ onSubmit, register, handleSubmit, reset }) => {
    const methods = useForm({
      defaultValues: {
        studentName: "",
        enrollmentNumber: "",
        branch: "",
        batch: "",
        doiOrIsbn: "",
        titleOfPaper: "",
        publicationDate: "",
        journalOrConferenceName: "",
        indexing: "",
        paperPdf: null,
        coAuthors: [{ memberName: "", role: "" }],
        facultyGuide: [{ memberName: "", role: "" }],
      },
    });
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Capstone Project Submission Form
      </h2>
     <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputBox label="Project Title" name="projectTitle" register={register} required />
          <InputBox label="Team Members" name="teamMembers" register={register} placeholder="e.g., Alice, Bob, Charlie" required />
          <InputBox label="Guide Name" name="guideName" register={register} required />
          <InputBox label="Semester" name="semester" register={register} required />
               <DynamicUserFields
                label="Industry Mentors"
                name="Industry Mentors"
                fieldName="Industry Mentor"
                addButtonLabel="Add Mentor"
              />
          <SelectBox label="Project Outcome" name="projectOutcome" options={outcomes} register={register} />
          <FileBox label="Project Report (PDF)" name="projectPdf" register={register} />
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

export default CapstoneProjectForm;
