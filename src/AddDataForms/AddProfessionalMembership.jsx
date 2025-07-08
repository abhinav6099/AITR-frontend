import React, { useEffect, useState } from 'react';
import ProfessionalMembershipForm from '../Forms/StudentForms/proffessionalMembership'
import ProfessionalMembershipTable from '../table/ProfessionalMembershipTable'
import { useForm } from 'react-hook-form';
import axios from 'axios';

const AddProfessionalMembership = () => {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/v1/student/professionalmembership');
      setData(res.data.memberships);
    } catch (error) {
      console.error('Error fetching professional membership data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  const onSubmit = async (formData) => {
    try {
      await axios.post('http://localhost:3000/api/v1/student/professionalmembership', formData);
      reset();
      setLoading(prev => !prev);
    } catch (error) {
      console.error('Error submitting professional membership:', error);
    }
  };

  return (
    <div>
      <ProfessionalMembershipForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <ProfessionalMembershipTable data={data} />
    </div>
  );
};

export default AddProfessionalMembership;
