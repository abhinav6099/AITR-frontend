import React from "react";
import { useForm } from "react-hook-form";
import InputBox from "../../components/InputBox";
import CalenderBox from "../../components/CalenderBox";
import Options from "../../components/Options";
import Button from "../../components/Button";

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

      <Options
        label="Membership Status"
        name="membershipStatus"
        register={register}
        options={statusOptions}
        required
      />

      <div className="md:col-span-2">
        <Button label="Submit Membership Info" type="submit" />
      </div>
    </form>
  );
};

export default MembershipForm;
