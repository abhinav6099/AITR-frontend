import React from "react";
import { useForm } from "react-hook-form";
import InputBox from "../../components/InputBox";
import CalenderBox from "../../components/CalenderBox";
import Button from "../../components/Button";
import SelectBox from "../../components/SelectBox";

const MembershipForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const statusOptions = ["Active", "Expired"];

  const onSubmit = (data) => {
    console.log("Membership Form Data:", data);
    // Add your API logic here (axios.post etc.)
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-white shadow-md rounded-xl"
    >
      <InputBox
        label="Organization Name (IEI, CSI, IEEE, etc.)"
        name="organizationName"
        register={register}
        required
      />

      <InputBox
        label="Membership ID"
        name="membershipId"
        register={register}
        required
      />

      <CalenderBox
        label="Date of Joining"
        name="dateOfJoining"
        register={register}
        required
      />

      <SelectBox
        label="Membership Status"
        name="membershipStatus"
        register={register}
        options={statusOptions}
        required
      />

      <div>
        <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white font-semibold text-base rounded-md shadow hover:bg-blue-700 transition"
          >
            Submit
          </button>
      </div>
    </form>
  );
};

export default MembershipForm;
