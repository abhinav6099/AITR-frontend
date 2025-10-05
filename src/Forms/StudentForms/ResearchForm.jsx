import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import InputBox from "../../components/InputBox";
import FileBox from "../../components/FileBox";
import CalenderBox from "../../components/CalenderBox";
import DynamicUserFields from "../../components/DynamicFieldsForm";

const ResearchForm = ({ onSubmit }) => {
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

  const { handleSubmit, register } = methods;

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-8 md:p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        Student Research Paper
      </h2>

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Standard Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InputBox label="Student Name" name="studentName" register={register} required />
            <InputBox label="Enrollment Number" name="enrollmentNumber" register={register} required />
            <InputBox label="Branch" name="branch" register={register} required />
            <InputBox label="Batch" name="batch" register={register} required />
            <InputBox label="DOI / ISBN" name="doiOrIsbn" register={register} />
            <InputBox label="Title of Paper" name="titleOfPaper" register={register} required />
            <CalenderBox label="Publication Date" name="publicationDate" register={register} required />
            <InputBox label="Journal / Conference Name" name="journalOrConferenceName" register={register} required />
            <InputBox label="Indexing (Scopus, SCI, etc.)" name="indexing" register={register} />
            <FileBox label="Upload Paper PDF" name="paperPdf" register={register} />
          </div>

          {/* Dynamic Fields: Side-by-side */}
          <div className="flex flex-col md:flex-row md:space-x-1 space-y-6 md:space-y-0">
            <div className="flex-1">
              <DynamicUserFields
                label="Co-Authors"
                name="coAuthors"
                fieldName="Co-Author"
                addButtonLabel="Add Co-Author"
              />
            </div>
            <div className="flex-1">
              <DynamicUserFields
                label="Faculty Guide(s)"
                name="facultyGuide"
                fieldName="Faculty Guide"
                addButtonLabel="Add Faculty Guide"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
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

export default ResearchForm;
