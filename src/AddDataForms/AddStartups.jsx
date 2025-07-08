import React, { useEffect, useState } from 'react';
import StartupForm from '../Forms/StudentForms/StartupForm';
import StudentTable from '../table/StudentTable'; // Can rename to StartupTable if needed
import { useForm } from 'react-hook-form';
import axios from 'axios';

function AddStartups() {
  const { register, handleSubmit, reset } = useForm();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/v1/student/startups');
      setData(res.data.startups); // Adjust key based on backend response
    } catch (err) {
      console.error("Error fetching startups:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading]);

  const onSubmit = async (formData) => {
    try {
      await axios.post('http://localhost:3000/api/v1/student/startups', formData);
      reset();
      setLoading(prev => !prev);
    } catch (err) {
      console.error("Error submitting startup data:", err);
    }
  };

  return (
    <div>
      <StartupForm
        onSubmit={onSubmit}
        register={register}
        handleSubmit={handleSubmit}
        reset={reset}
      />
      <StudentTable data={data} />
    </div>
  );
}

export default AddStartups;
