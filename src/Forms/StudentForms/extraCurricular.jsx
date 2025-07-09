import React from "react";
import InputBox from "../../components/InputBox";
import CalenderBox from "../../components/CalenderBox";
import Options from "../../components/SelectBox";
import FileBox from "../../components/FileBox";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const eventLevels = ["Institute", "State", "National", "International"];
const positions = ["1st", "2nd", "3rd", "Runner-up", "Participation"];

const extraCurricular = () => {


  return (
    <div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 p-4">
        <InputBox label="ID" register={register} required />
        <InputBox label="Student Name" register={register} required />
        <InputBox label="Enrollment Number" register={register} required />
        <InputBox label="Branch" register={register} required />
        <InputBox label="Batch" register={register} required />
        <InputBox label="Year" type="number" register={register} required />
        <InputBox label="Event Name" register={register} required />
        <CalenderBox label="Event Date" register={register} required />
        <Options label="Event Level" name="eventLevel" register={register} options={eventLevels} required />
        <InputBox label="Event Location" register={register} required />
        <Options label="Position" name="position" register={register} options={positions} required />
        <FileBox label="Certificate PDF" name="certificatePDF" register={register} />
        <InputBox label="Organizer" register={register} required />
        <InputBox label="Coach Name" register={register} required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md shadow">
          Submit
        </button>
      </form>
      <div>
        <DataTable columns={studentEventColumns} />
      </div>
    </div>

  );
};

export default extraCurricular;

