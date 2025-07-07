import React from "react";
import { useForm } from "react-hook-form";
import FileBox from "../../components/FileBox";

const InstituteDocumentForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Uploaded Files:", data);
    // send to backend API using FormData
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 bg-white shadow-lg rounded-lg max-w-xl mx-auto space-y-4">
      <h2 className="text-xl font-semibold mb-4">Institute Document Upload</h2>

      <FileBox
        label="AICTE Affiliation PDF"
        name="aicteAffiliationPdf"
        register={register}
        accept=".pdf"
        required
      />

      <FileBox
        label="RGPV PDF"
        name="rgpvPdf"
        register={register}
        accept=".pdf"
        required
      />

      <FileBox
        label="Society PDF"
        name="societyPdf"
        register={register}
        accept=".pdf"
        required
      />

      <FileBox
        label="By Laws PDF"
        name="byLawsPdf"
        register={register}
        accept=".pdf"
        required
      />

      <input
        type="submit"
        value="Submit"
        className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
      />
    </form>
  );
};

export default InstituteDocumentForm;
