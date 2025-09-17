import React from "react";
import { useForm } from "react-hook-form";
import FileBox from "../../components/FileBox";

const InstituteDocumentForm = () => {
  const { register, handleSubmit, reset } = useForm();
  // todo : do the mulptiform upload file


  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Institute Document Upload Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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

export default InstituteDocumentForm;
