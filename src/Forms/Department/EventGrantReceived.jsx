import React from 'react';
import { useForm } from 'react-hook-form';
import InputBox from '../../components/InputBox';
import CalenderBox from '../../components/CalenderBox';
import FileBox from '../../components/FileBox';

const EventGrantReceived = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Event Grant Received Data:", data);
    reset();
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md p-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Event Grant Received Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <InputBox label="Event Title" name="eventTitle" register={register} required />
          <InputBox label="Event Type" name="eventType" register={register} required />
          <InputBox label="Department Name" name="departmentName" register={register} required />
          <InputBox label="Granting Agency" name="grantingAgency" register={register} required />
          <InputBox label="Category" name="category" register={register} required />
          <InputBox label="Number of Participants" name="numberOfParticipants" register={register} required />
          <CalenderBox label="Date of Approval" name="dateOfApproval" register={register} required type="date" />
          <InputBox label="Duration" name="duration" register={register} required />
          <InputBox label="Description" name="description" register={register} required />
          <InputBox label="Funding" name="funding" register={register} required />
          <FileBox label="PDF" name="pdf" register={register} />
          <InputBox label="Grant Amount" name="grantAmount" register={register} required />
          <InputBox label="Faculty Coordinator" name="facultyCoordinator" register={register} required />
          <InputBox label="Purpose" name="purpose" register={register} required />
          <InputBox label="Utilization Summary" name="utilizationSummary" register={register} required />

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

export default EventGrantReceived;
